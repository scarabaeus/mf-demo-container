import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Container's Home Page</h1>
      <div style={{ marginTop: '1rem' }}>
        mf-demo-container Dependencies:
        <ul>
          <li>
            <code>react {React.version}</code>
          </li>
          <li>
            <code>react-router 17.0.2</code>
          </li>
          <li>
            <code>react-router-dom 5.3.0</code>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
