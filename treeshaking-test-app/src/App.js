import React from 'react';
import './App.css';
import TreeshakingTestModule from 'treeshaking-test-module'

function App() {
  return (
    <div className="App">
      <TreeshakingTestModule.Avatar username="Aang" src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-avatar-the-last-airbender-zach-tyler.jpg" />
    </div>
  );
}

export default App;
