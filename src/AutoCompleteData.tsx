import React, {useState} from "react";
import {AutoCompleteDataType} from "./data";

export type AutoCompletePropsType={
    data:AutoCompleteDataType
}
const AutoComplete:React.FC<AutoCompletePropsType> = ({data}) => {

    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="autocomplete">
            <input type="text" />
        </div>
    );
};

export default AutoComplete;