import { useState } from "react";

const Header = () => {
  const [name, setName] = useState<string>("Ha Chanh Nam");
  return (
    <header className="App-header">
      <h3>App Mini Game</h3>
      <p>Design by {name}</p>
      {/* <button onClick={UpdateName}>Click me</button> */}
    </header>
  );
};
export default Header;
