package com.example.movies;

import org.bson.types.ObjectId;

public class Fav {

    private String imdb;
    private  String name;

    public Fav(String imdb, String name) {
        this.imdb = imdb;
        this.name = name;
    }

    public String getImdb() {
        return imdb;
    }

    public void setImdb(String imdb) {
        this.imdb = imdb;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
