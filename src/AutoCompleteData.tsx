import React, {ChangeEvent, MouseEvent,useState} from "react";
import {AutoCompleteDataType} from "./data";

export type AutoCompletePropsType={
    data:AutoCompleteDataType
}
export const AutoComplete:React.FC<AutoCompletePropsType> = ({data}) => {

    const [suggestions, setSuggestions] = useState<AutoCompleteDataType>([]);
    const [suggestionIndex, setSuggestionIndex] = useState<number>(0);
    const [suggestionsActive, setSuggestionsActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
            const filterSuggestions = data.filter(
                (suggestion) => suggestion.toLowerCase().indexOf(query) > -1
            )
            setSuggestions(filterSuggestions)
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const onClickHandler = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false);
    };

    const onKeyDownHandler = (e) => {
        // UP ARROW
        if (e.keyCode === 38) {
            if (suggestionIndex === 0) {
                return;
            }
            setSuggestionIndex(suggestionIndex - 1);
        }
        // DOWN ARROW
        else if (e.keyCode === 40) {
            if (suggestionIndex - 1 === suggestions.length) {
                return;
            }
            setSuggestionIndex(suggestionIndex + 1);
        }
        // ENTER
        else if (e.keyCode === 13) {
            setValue(suggestions[suggestionIndex]);
            setSuggestionIndex(0);
            setSuggestionsActive(false);
        }
    };





    return (
        <div className="autocomplete" >
            <input type="text" onChange={onChangeHandler} onClick={onClickHandler}/>
        </div>
    );
};

