import { useState } from "react";
import TicTacToe from "./TicTacToe/TicTacToe";
import OneTwoThree from "./OneTwoThree/OneTwoThree";
const HomePage = () => {
    const [toggle, setToggle] = useState(true);
    const changeComponent = () => {
        setToggle(!toggle)
    }
    return (
        <>
            {
                toggle? <TicTacToe/> : <OneTwoThree/>
            }
            <button onClick={changeComponent} >Change</button>
        </>
    )
} ;
export default HomePage;