import React from 'react';

class FetchDogs extends React.Component {
  render() {
    return({
      Function
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    });
  }
}

export default FetchDogs;