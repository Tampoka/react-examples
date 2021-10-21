import React from "react";
import {AutoCompleteDataType} from "./data";

export type AutoCompletePropsType={
    data:AutoCompleteDataType
}
const AutoComplete:React.FC<AutoCompletePropsType> = ({data}) => {
    return (
        <div className="autocomplete">
            <input type="text" />
        </div>
    );
};

export default AutoComplete;