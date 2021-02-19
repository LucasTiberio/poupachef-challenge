import React, { Suspense } from 'react';

import Routing from './routing';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading</h1>}>
        <Routing />
      </Suspense>
    </div>
  );
}

export default App;
