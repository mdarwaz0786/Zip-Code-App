import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [zipCode, setZipCode] = useState("");
    const dispatch = useDispatch();

    const fetchData = async () => {
        dispatch({ type: "LOADING", payload: { loading: true, data: null, error: null } });
        await axios.get(`https://api.zippopotam.us/in/${zipCode}`)
            .then((response) => dispatch({
                type: "DATA",
                payload: {
                    loading: false,
                    data: response?.data,
                    error: null
                },
            })).catch((error) => dispatch({
                type: "ERROR",
                payload: {
                    error: error.message,
                    loading: false,
                },
            }));
    };

    const clearData = () => {
        dispatch({
            type: 'DATA',
            payload: {
                data: null,
            },
        });
    };

    return (
        <>
            <div className="searchbar">
                <input className="input-box" type="text" onChange={(zip) => setZipCode(zip.target.value)} value={zipCode} placeholder="Enter Zip Code" />
                <button className="search-btn" onClick={() => fetchData()}>Search</button>
                <button className="clear-btn" onClick={() => clearData()}>Clear</button>
            </div>
        </>
    );
};

export default SearchBar;
