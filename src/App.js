import React from 'react';
import './styles/index.scss';

import Card from "./components/Card";
import Sign from "./components/Sign";
import Dishes from './components/Dishes';
import Special from './components/Special';

function App() {

  const [ data, setData ] = React.useState();

  React.useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(res => setData(res));
  }, []);

  if (!data) {
    return (
      <div className="App"></div>
    );
  }

  return (
    <div className="App">
      <Card>
        <Sign title={ data.brand } />
        <Dishes dishes={ data.dishes } />
        <Special dishes={ data.special } />
      </Card>
      <div className="credit">
        <div>{ data.brand_credit }</div>
        { data.contact.address } - { data.contact.phone }
      </div>
    </div>
  );
}

export default App;
