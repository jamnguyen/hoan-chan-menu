import React from 'react';
import axios from 'axios';
import './styles/index.scss';

import Card from "./components/Card";
import Sign from "./components/Sign";
import Dishes from './components/Dishes';
import Special from './components/Special';

function App() {

  const [ data, setData ] = React.useState();

  React.useEffect(() => {
    axios.get(
      'https://api.jsonbin.io/v3/b/606e03249c59a9732caf1efb/latest',
      {
        headers: {
          'X-Master-Key': '$2b$10$AsqVRa3W51zchTsQvvtPSeQgFiF1YY35o8oSx44H/PvTP5S/QQLFG'
        }
      }
    ).then(res => setData(res.data.record));
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
