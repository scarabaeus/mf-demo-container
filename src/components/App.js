import React from 'react';
import './App.css';

const Application1Module1 = React.lazy(() => import('Application1/Module1'));

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ flexBasis: '200px', backgroundColor: '#bada55' }}>Menu</div>
      <React.Suspense fallback="Loading Button">
        <Application1Module1 name="Steve" />
      </React.Suspense>
    </div>
  );
};

export default App;
