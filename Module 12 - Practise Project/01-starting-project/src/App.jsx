import { useState } from "react";
import Header from "./components/Header";
import Question from "./components/Question";

function App() {
    const [useActivity,setUserActivity] = useState([]);
    return(
        <>
            <Header />
            {/* this is the wrong approach:  */}
            {/* {q.map((value,id) => {
                return(
                    <Question value={value} /> 
                )
            })} */}
            <Question /> 
        </>
    )
}

export default App;
