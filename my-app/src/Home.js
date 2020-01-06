import React, { Suspense } from 'react';
import logo from './logo.png';

function Home() {
  return (
        
    <div className="Home">
        asdasd
        <Suspense fallback={<div>Loading</div>}></Suspense>
    </div>
  );
}

export default Home;
