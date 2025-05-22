import logo from './logo.svg';
import './App.css';
// import LargeContent from './LargeContent';
import React, { Suspense } from 'react';
const LargeContent = React.lazy(() => import('./LargeContent'));

function App() {
  return (
    <div className="App">
        <h1>The Lazy Loading </h1>
        {/* <LargeContent /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <LargeContent />
          </Suspense>
    </div>
  );
}

export default App;
