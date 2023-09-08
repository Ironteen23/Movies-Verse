package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> getAllMovies()
    {
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovie(String ImdbId) {

        return movieRepository.findMovieByImdbId(ImdbId);
    }

    public Set<Movie> getMoviesByGenre(ArrayList<String> arr) {

        return null;
    }
}
