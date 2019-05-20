import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Jumbotron from './Jumbo';
import Card from './Card';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

class Project extends React.Component {
  render() {
    return (
      <div>
        <App />
        <Jumbotron />
        <Card />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Project />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
