import React from 'react';
import './App.css';
import {AutoComplete} from "./AutoComplete/AutoCompleteData";
import {autoCompleteData} from "./AutoComplete/data";
import {Stopwatch} from "./Stopwatch/Stopwatch";

function App() {
    return (
        <div className="App">
            {/*<AutoComplete data={autoCompleteData}/>*/}
            <Stopwatch/>
        </div>
    );
}

export default App;
