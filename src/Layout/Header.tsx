import { useState } from "react";

const Header = () => {
    const [name, setName] = useState<string>('Ha Chanh Nam');
    const UpdateName = () => {
    var random = Math.round(Math.random()*100);
    if(random % 2 == 0){
      setName(name.toUpperCase());
      console.log(random,"Uppercase Updated")
    }else{
      setName(name.toLowerCase());
      console.log(random,"Lowercase Updated")
    }
  }
    return (
        <header className="App-header">
            <h3>App Mini Game</h3>
            <p>Design by {name}</p>
            {/* <button onClick={UpdateName}>Click me</button> */}
        </header>
    )
} ;
export default Header;