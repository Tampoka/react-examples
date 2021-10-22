import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from "react";
import {AutoCompleteDataType} from "./data";
import {Box, List, ListItem, ListItemText, TextField} from "@material-ui/core";
import s from "../AutoComplete/AutoComplete.module.css"


export type AutoCompletePropsType = {
    data: AutoCompleteDataType
}
export const AutoComplete: React.FC<AutoCompletePropsType> = ({data}) => {

    const [suggestions, setSuggestions] = useState<AutoCompleteDataType>([]);
    const [suggestionIndex, setSuggestionIndex] = useState<number>(0);
    const [suggestionsActive, setSuggestionsActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

    const onClickHandler = (e: MouseEvent<HTMLLIElement>) => {
        setSuggestions([]);
        let target = e.target as HTMLLIElement
        setValue(target.innerText);
        setSuggestionsActive(false);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
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

    const Suggestions = () => {
        return (<div>
                <List className={s.suggestions} >
                    {suggestions.map((suggestion, index) => {
                        return (
                            <ListItem
                                className={index === suggestionIndex ? s.active : s.item}
                                key={index}
                                onClick={onClickHandler}>
                                {suggestion}
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    };


    return (
        <Box className={s.autocomplete}>
            <TextField
                value={value}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                label="Search animal"
                type="search"
                variant="filled"
                />
                {suggestionsActive && <Suggestions/>}

        </Box>
    );

};
