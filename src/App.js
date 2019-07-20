import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {

  state = {
    characters:[ ],      
  }

  removeCharacter = index => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) =>{
        return i !== index
      }),
    })
  }

  handleSubmit = character =>{
    this.setState({characters: [...this.state.characters,character]})
  }

  render() {
    const {characters} = this.state

    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <Table characterData={characters} 
               removeCharacter={this.removeCharacter}/>
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App