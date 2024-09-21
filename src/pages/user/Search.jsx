import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Filter from '../../components/Filter';
import MovieGrid from '../../components/MovieGrid';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortBy, setSortBy] = useState('alphabetics-az');  // State for sorting
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  
  const sampleMovies = [
    { id: 1, title: 'Dark', year: 2010, rating: 8.8, genre: 'Action', description: 'A mind-bending thriller.', image: ''},
    { id: 2, title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action', description: 'A thrilling superhero movie.', image: '' },
    { id: 3, title: 'Dark', year: 2010, rating: 8.8, genre: 'Action', description: 'A mind-bending thriller.', image: ''},
    { id: 4, title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action', description: 'A thrilling superhero movie.', image: '' },
    { id: 5, title: 'Dark', year: 2010, rating: 8.8, genre: 'Action', description: 'A mind-bending thriller.', image: ''},
    { id: 6, title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action', description: 'A thrilling superhero movie.', image: '' },// Add more movie objects with image paths
  ];

  useEffect(() => {
    setMovies(sampleMovies); // Set initial movies (could be fetched from an API)
  }, []);

  useEffect(() => {
    let filtered = movies;

    if (query) {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply sorting
    let sorted;
    if (sortBy === 'alphabetics-az') {
      sorted = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'alphabetics-za') {
      sorted = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === 'rating') {
      sorted = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'year-asc') {
      sorted = [...filtered].sort((a, b) => a.year - b.year);
    } else if (sortBy === 'year-desc') {
      sorted = [...filtered].sort((a, b) => b.year - a.year);
    }

    setFilteredMovies(sorted);
  }, [query, movies, sortBy]);  // Re-run when query, movies, or sortBy changes

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 d-flex">
          <Filter />
          <div className="col-md-10 mt-3">
            <div className="d-flex justify-content-end gap-2 align-items-center mb-3">
              <label htmlFor="sort" className="form-label mb-0">Sorted by:</label>
              <select id="sort" className="form-select w-auto" value={sortBy} onChange={handleSortChange}>
                <option value="alphabetics-az">Alphabetics A-Z</option>
                <option value="alphabetics-za">Alphabetics Z-A</option>
                <option value="rating">Rating</option>
                <option value="year-asc">Year (Oldest to Newest)</option>
                <option value="year-desc">Year (Newest to Oldest)</option>
              </select>
            </div>
            {query ? (
                <>
                    <p className="mb-4 text-center">
                        Showing results for: <span className="text" style={{ color: '#E50914' }}>{query}</span>
                    </p>
                    <MovieGrid movies={filteredMovies} />
                </>
            ) : (
                <p className="text-center">Please enter a keyword to search for movies.</p>
            )}
          </div>
        </main>
        <Footer />
    </div>
  );
};

export default SearchPage;
