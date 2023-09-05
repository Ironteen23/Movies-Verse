package com.example.movies;

import org.springframework.web.bind.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Set;

@Document(collection = "users")
@Data
@NoArgsConstructor
public class User {

    @Id
    private ObjectId id;
    private String name;
    private String email;
    private String password;
    private Set<String> fav;

    public User(ObjectId id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public User(ObjectId id, String name, String email, String password, Set<String> fav) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.fav = fav;
    }

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public User(String name , String password)
    {
        this.name = name;
        this.password = password;
    }

    public User(String name)
    {
        this.name = name;
    }




    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<String> getFav() {
        return fav;
    }

    public void setFav(Set<String> fav) {
        this.fav = fav;
    }
}
