import React, {ChangeEvent, useState} from "react";
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

    return (
        <div className="autocomplete" >
            <input type="text" onChange={onChangeHandler}/>
        </div>
    );
};

