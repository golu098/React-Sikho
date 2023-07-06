import React from "react";
// import './style.css'; // Import the CSS file
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        const jsonData = await response.json();
        setUserData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Github Users:</h1>
      {userData && (
        <div className="card-container">
          {userData.map((user) => (
            <div className="card" key={user.id}>
              <h2>user_id:- {user.login}</h2>
              <p>Repo URL: {user.repos_url}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
