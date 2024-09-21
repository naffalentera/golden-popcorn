import React from 'react';

const MovieGrid = ({ movies }) => {
    return (
        <main className="container-fluid px-4 mb-3"> 
            <div className="row justify-content-center movie-grid g-4"> 
                {movies.map((movie) => (
                    <div className="col-md-6" key={movie.id}> 
                        <div className="movie-card d-flex flex-row p-3" style={{ height: '250px' }}> 
                            <img 
                                src={movie.image} 
                                alt={movie.title} 
                                className="movie-image rounded-image"
                                style={{ height: '100%', objectFit: 'cover' }}  
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h3 className="card-title">{movie.title}</h3>
                                    <p className="card-text">{movie.description}</p>
                                    <p className="card-text">Genre: {movie.genre}</p>
                                    <p className="card-text">Year: {movie.year}</p>
                                    <p className="card-text">Rating: {movie.rating}</p>
                                    
                                </div>
                                <div className="mt-2 d-flex justify-content-between">
                                    <button className="btn btn-golden">Add Watchlist</button>
                                    <button className="btn btn-clear">Trailer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MovieGrid;
