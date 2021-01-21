import React from 'react'
import logo from './logo.svg';
import BasicInfo from './BasicInfo'
import './App.css';

 class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      person:{
        name: 'Jorge Vaca',
        birthday: '06/14/97',
        age: '23',
      },
    };
  }
  render(){
    return (
    <div className="App">
    <body> 
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    </body>
    </div>
  );
}
}
export default App;
