import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      status: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.image.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem('dogURL', this.state.image);
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({
        image: data.message,
        status: data.status,
      }));
  }

  render() {
    const { image, status } = this.state;
    return (
      <div className="container">
        <p>Dogs</p>
        <div className="imagem">
          {status === 'success' ? <img src={ image } alt="Random dog" /> : <h1>Loading...</h1>}
        </div>
        <button type="button" onClick={ this.fetchDog }>Novo dog!</button>
      </div>
    );
  }
}

export default App;
