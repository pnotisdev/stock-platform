import React, { useState } from 'react'
import { mockSearchResults } from '../constants/mock';
import {XMarkIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";

const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatch, setBestMatch] = useState(mockSearchResults.result);

    const clear = () => {
        setInput("");
        setBestMatch([]);
    }

    const updateBestMatch = () => {
        setBestMatch(mockSearchResults.result);
    };


    return <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">
        <input type="text" value={input} className="w-full px-4 py-2 focus:outline-none rounded-md" placeholder="Search..." onChange={(event) => {setInput(event.target.value)}}
        onKeyPress={(event) => {
            if(event.key === "Enter"){
                updateBestMatch();
            }
        }}
        />

        {input && (
        <button onlick={clear}>
            <XMarkIcon className="h-4 w-4 fill-gray-500" />
        </button>
        )}
    </div>
}

export default Search 