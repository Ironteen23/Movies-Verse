package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//this layer actually talks to the database
@Repository
public interface MovieRepository extends MongoRepository<Movie,ObjectId> {

    Optional<Movie> findMovieByImdbId(String id);


}
