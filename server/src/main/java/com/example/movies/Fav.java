package com.example.movies;

import org.bson.types.ObjectId;

public class Fav {

    private ObjectId user_id;
    private ObjectId movie_id;

    public Fav(ObjectId user_id, ObjectId movie_id) {
        this.user_id = user_id;
        this.movie_id = movie_id;
    }

    public ObjectId getUser_id() {
        return user_id;
    }

    public void setUser_id(ObjectId user_id) {
        this.user_id = user_id;
    }

    public ObjectId getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(ObjectId movie_id) {
        this.movie_id = movie_id;
    }


}
