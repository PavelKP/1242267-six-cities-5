import React from 'react';
import Main from '../main/main';

const App = (props) => {
  const {placesCount} = props;

  return (
    <Main placesCount={placesCount}/>
  );
};

export default App;
