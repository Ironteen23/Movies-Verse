package com.example.movies;

import org.bson.types.ObjectId;

public class Fav {

    private ObjectId movie_id;

    private  String name;

    public Fav(ObjectId movie_id, String name) {
        this.movie_id = movie_id;
        this.name = name;
    }

    public ObjectId getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(ObjectId movie_id) {
        this.movie_id = movie_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
