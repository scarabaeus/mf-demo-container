import React from 'react';

const MFE1_Button = React.lazy(() => import('MFE1/Button'));

const App = () => {
  return (
    <div>
      <h2>Container App</h2>
      <div>
        <React.Suspense fallback="Loading Button">
          <MFE1_Button />
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
