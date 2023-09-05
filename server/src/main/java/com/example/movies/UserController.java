package com.example.movies;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping(path = "/api/v1/users")
public class UserController {
    @Autowired
    private  UserService userService;

    @PostMapping("/signup")
    public void addUser( @RequestBody User user)
    {

        System.out.println("user is "+ user);

        userService.addUser(user);
    }

    @GetMapping("/getUser")
    public Optional<User> getUser(@RequestBody User user)
    {
        return userService.getUser(user.getName());
    }

    @PostMapping("/login")
    public void login(@RequestBody User user)
    {
        userService.login(user);
    }

    @PostMapping("/addFav")
    public void addFav(@RequestBody Fav fav)
    {
        userService.addFav(fav);
    }

    @PostMapping("/getFav")
    public Set<String> getFav(@RequestBody User user){
        System.out.println("LOLLLOER");
        String name= user.getName();
        System.out.println("Name is " + name);
        Set<String> s =  userService.getFav(name);
        System.out.println("set  is " + s);
        return s;
    }

    @PostMapping("/getFavList")
    public Set<Movie> getFavList(@RequestBody User user)
    {
        String name = user.getName();
        Set<Movie> s = userService.getFavList(name);
        return s;
    }

}
