import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import dog from "./dog.json";
import "./App.css";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    dog,
    game: "",
    Points:0

  };

  scramble= (array) => {
  
  //shuffle algorithm is the Fisher-Yates
       var i = array.length;
       if ( i === 0 ) return false;
       while ( --i ) {
          var j = Math.floor( Math.random() * ( i + 1 ) );
          var tempi = array[i];
          var tempj = array[j];
          array[i] = tempj;
          array[j] = tempi;
        }
     return array;
   }
 
   play = event => {
    this.setState( ( ) => {
      return {dog: this.scramble(this.state.dog)};
    } );
    if(event.target.getAttribute('data-clicked') === 'false'){
      event.target.setAttribute('data-clicked', "true");
      if(this.state.Points< 11){
        this.setState((prevState)=> {
          return { Points: prevState.Points + 1 }; })
      }
        
      else
        this.setState(() => {return {pts: 12, win: "You won!"}; })
    }
    else if (event.target.getAttribute('data-clicked') === 'true'){
        this.restart();
    }
  };

  restart = () => {
    this.setState(() => {return {Points: 0, dog, win: ""}});
    const dogs = document.getElementsByTagName("img");
    for (let i = 0; i < dog.length; i++){
      dogs[i].setAttribute('data-clicked', 'false');
    }
  }

  render() {
    return (
      <Wrapper>
        <Title><h3>Scramble the Puppies </h3>   
        <h5 >Points: {this.state.Points} </h5>
        <h5> State: {this.state.win}</h5></Title>
     
        {this.state.dog.map(dog => (
          <DogCard
            id={dog.id}
            key={dog.id}
            name={dog.name}
            image={dog.image}
            play={this.play}
       
  
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
