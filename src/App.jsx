import { Component } from "react";
import ComponentBlue from "./ComponentBlue";
import ComponentMagenta from "./ComponentMagenta";
import ComponentRed from "./ComponentRed";


const App = () => {
  return (
    <div>A</div>
  );
}

export default class App extends Component {
  render() {
  const users = [
    
      {
      ime = 'Branko',
      prezime = 'Branković',
      dob = 32,
      },
      {
        ime = 'Janko',
      prezime = 'Janković',
      dob = 42,
      },
      {
        ime = 'Stanko',
      prezime = 'Stanković',
      dob = 52,
      },
    ];


render(); {
  const users = this.users;
    return (
      <>
        <ComponentBlue ime= {users[0].ime} godine={users[0].dob}/>
        <ComponentRed user={users[1]} />
        <ComponentMagenta>
        {users}

        </ComponentMagenta>
      </>
      );
    }
  }
}