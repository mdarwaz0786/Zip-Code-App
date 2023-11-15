import React from "react";
import "./DisplayData.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useSelector } from "react-redux";


const DisplayData = () => {
    const state = useSelector(state => state);
    const data = state?.data;
    const error = state?.error;
    const isLoading = state?.loading;

    return (
        <>
            <div>
                <SearchBar />
                {
                    isLoading && <h3>Loading...</h3>
                }
                {
                    data &&
                    <div className="displayData">
                        <div className="row">
                            <p className="key">country</p>
                            <p>{data["country"]}</p>
                        </div>
                        <div className="row">
                            <p className="key">country abbreviation</p>
                            <p>{data["country abbreviation"]}</p>
                        </div>
                        <div className="row">
                            <p className="key">postal code</p>
                            <p>{data["post code"]}</p>
                        </div>
                        <p>Places</p>
                        {
                            data.places?.map((place, index) => (
                                <div key={index}>
                                    <div className="row">
                                        <p className="key">place name</p>
                                        <p>{place["place name"]}</p>
                                    </div>
                                    <div className="row">
                                        <p className="key">longitude</p>
                                        <p>{place["longitude"]}</p>
                                    </div>
                                    <div className="row">
                                        <p className="key">latitude</p>
                                        <p>{place["latitude"]}</p>
                                    </div>
                                    <div className="row">
                                        <p className="key">state</p>
                                        <p>{place["state"]}</p>
                                    </div>
                                    <div className="row lastrow">
                                        <p className="key">state abbreviation</p>
                                        <p>{place["state abbreviation"]}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
                {
                    error && <h3>{error}</h3>
                }
            </div>
        </>
    );
};

export default DisplayData;
