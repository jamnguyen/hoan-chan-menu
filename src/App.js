import React from 'react';
import axios from 'axios';
import './styles/index.scss';

import Card from "./components/Card";
import Sign from "./components/Sign";
import Dishes from './components/Dishes';
import Special from './components/Special';
import Loader from './components/Loader';

function App() {

  const [ data, setData ] = React.useState();
  const [ isFetching, setIsFetching ] = React.useState(true);

  React.useEffect(() => {
    axios.get(
      'https://api.jsonbin.io/v3/b/606ebade181177735ef41c59/latest',
      {
        headers: {
          'X-Master-Key': '$2b$10$ZWqwe9x6TfXXhI9zjenf9e0RmoG0yF/oXsZVT9xpmWzLEB8cE3anm'
        }
      }
    ).then(res => {
      setData(res.data.record);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="App">
        Error. Cannot load menu. :(
      </div>
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
