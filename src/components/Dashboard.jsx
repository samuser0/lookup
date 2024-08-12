import React, { useEffect, useState } from 'react';

const Dashboard = ({ onUpdateBanner }) => {
  const [description, setDescription] = useState('MySQL download!!');
  const [link, setLink] = useState('https://dev.mysql.com/downloads/mysql/');
  const [time, setTime] = useState(30);
  const [visible, setVisible] = useState(true);

  const handleUpdate = () => {
    onUpdateBanner({ description, link, time, visible });
  };
  

  useEffect(()=>{
    handleUpdate()
  }, [visible])

  return (
    <div className="dashboard">
      <h2>Banner Settings</h2>
      <label>
        Banner Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Banner Link:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>
      <label>
        Banner Timer (seconds):
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </label>
      <label>
        Banner Visibility:
        <input
          type="checkbox"
          checked={visible}
          onChange={() => setVisible(!visible)}
        />
      </label>
      <button onClick={handleUpdate}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
