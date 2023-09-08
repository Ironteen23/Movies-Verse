package com.example.movies;

import io.swagger.v3.oas.annotations.Operation;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @Operation(summary = "Get all Movies" , description = "This api gets all Movies in the DB")
    @GetMapping("/")
    public ResponseEntity<List<Movie>> getAllMovies()
    {
        return new ResponseEntity<List<Movie>>( movieService.getAllMovies(), HttpStatus.OK);
    }

    @Operation(summary = "Get Specific Movie" , description = "This api gets a specific movie by ImdbId")
    @GetMapping("/{ImdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String ImdbId)
    {
        return new ResponseEntity<Optional<Movie>>(movieService.getMovie(ImdbId) , HttpStatus.OK);
    }

    @PostMapping("/getGenre")
    public Set<Movie>  getMovieByGenre(@RequestBody ArrayList<String> arr)
    {
        Set<Movie> s = movieService.getMoviesByGenre(arr);
                return s;

    }


}
