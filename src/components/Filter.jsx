import React, { useEffect } from 'react';

const Filter = () => {
    useEffect(() => {
        // Populate the dropdowns
        const genres = ["All", "Drama", "Romance", "Comedy", "Musical", "Animation", "Action", "Fantasy", "Mystery", "Thriller", "Horror", "Sci-Fi", "Adventure"];
        const genreDropdown = document.getElementById("genre");
        genreDropdown.innerHTML = ""; // Clear existing options
        genres.forEach((genre) => {
            genreDropdown.append(new Option(genre, genre.toLowerCase()));
        });

        const years = ["All", "2010", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];
        const yearDropdown = document.getElementById("year");
        yearDropdown.innerHTML = ""; // Clear existing options
        years.forEach((year) => {
            yearDropdown.append(new Option(year, year.toLowerCase()));
        });

        // const statusOptions = ["All", "Released", "In Production", "Announced"];
        // const statusDropdown = document.getElementById("status");
        // statusDropdown.innerHTML = ""; // Clear existing options
        // statusOptions.forEach((status) => {
        //     statusDropdown.append(new Option(status, status.toLowerCase()));
        // });

        // const availabilityOptions = ["All", "Bioskop", "Netflix", "Disney +"];
        // const availabilityDropdown = document.getElementById("availability");
        // availabilityDropdown.innerHTML = ""; // Clear existing options
        // availabilityOptions.forEach((availability) => {
        //     availabilityDropdown.append(new Option(availability, availability.toLowerCase()));
        // });

        // Populate country dropdown
        const countries = ["All", "USA", "UK", "France", "Japan", "India", "Germany", "Italy", "Spain", "Australia"];
        const countryDropdown = document.getElementById("country");
        countryDropdown.innerHTML = ""; // Clear existing options
        countries.forEach((country) => {
            countryDropdown.append(new Option(country, country.toLowerCase()));
        });

        // Populate award dropdown
        const awards = ["All", "Best Picture", "Best Actor", "Best Actress", "Best Director"];
        const awardDropdown = document.getElementById("award");
        awardDropdown.innerHTML = ""; // Clear existing options
        awards.forEach((award) => {
            awardDropdown.append(new Option(award, award.toLowerCase()));
        });
    }, []); // Empty dependency array ensures this runs only once

    return (
        <aside className="col-md-3" id="filterAside">
            <button href="/login" className="btn btn-golden w-100 mb-3">+ Add Movie</button>
            <div className="filters">
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year</label>
                    <select id="year" className="form-select"></select>
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <select id="genre" className="form-select"></select>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select id="status" className="form-select"></select>
                </div>
                <div className="mb-3">
                    <label htmlFor="availability" className="form-label">Availability</label>
                    <select id="availability" className="form-select"></select>
                </div> */}
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select id="country" className="form-select"></select>
                </div>
                <div className="mb-3">
                    <label htmlFor="award" className="form-label">Award</label>
                    <select id="award" className="form-select"></select>
                </div>
                <button id="submit" type="submit" className="btn btn-golden w-100 mb-2">Submit</button>
                <button id="clear" className="btn btn-clear w-100">Clear</button>
            </div>
        </aside>
    );
};

export default Filter;
