import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';
import Dashboard from './Dashboard';

const Home = () => {
  const [bannerData, setBannerData] = useState({

    description: 'MySQL download!!',
    link: 'https://dev.mysql.com/downloads/mysql/',
    time: 30,
    visible: true,
  });

  useEffect(() => {
    axios.get('/api/banner')
      .then(response => {
        setBannerData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the banner data!', error);
      });
  }, []);

  const updateBanner = (newData) => {
    axios.post('/api/banner', newData)
      .then(() => {
        setBannerData(newData);
      })
      .catch(error => {
        console.error('There was an error updating the banner data!', error);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>BannerSite</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
      </header>
      
      <Banner
        description={bannerData.description}
        link={bannerData.link}
        initialTime={bannerData.time}
        visible={bannerData.visible}
      />

      <section id="main-content">
        <h2>Why MySQL?</h2>
        <p>Use automated and integrated generative AI and machine learning (ML) in one cloud service for transactions and lakehouse scale analytics. Get faster insights from all your data with unmatched performance and deploy apps in your choice of cloud providers.</p>
      </section>

      <Dashboard onUpdateBanner={updateBanner} />

      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Home;
