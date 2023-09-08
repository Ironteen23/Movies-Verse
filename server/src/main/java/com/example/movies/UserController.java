package com.example.movies;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.annotations.Operation;
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

    @Operation(summary = " SignUP a User", description = "This api allows you to signup ")
    @PostMapping("/signup")
    public void addUser( @RequestBody User user)
    {
        System.out.println("user is "+ user);

        userService.addUser(user);
    }

    @Operation(summary = " Get User", description = "This api allows you get a Specific User")
    @GetMapping("/getUser")
    public Optional<User> getUser(@RequestBody User user)
    {
        return userService.getUser(user.getName());
    }

    @Operation(summary = " Login a User", description = "This api allows you to login while auth the request ")
    @PostMapping("/login")
    public void login(@RequestBody User user)
    {
        userService.login(user);
    }


    @Operation(summary = " Add Movie to Fav " , description = "This api Adds Movie's ImdbId to your Fav List")
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

    @Operation(summary = "Get all Fav movies" , description = "This api gets all fav movies for a specific user")
    @PostMapping("/getFavList")
    public Set<Movie> getFavList(@RequestBody User user)
    {
        String name = user.getName();
        Set<Movie> s = userService.getFavList(name);
        return s;
    }

    @PostMapping("/getUserbyId")
    public User getUserByMongoId(@RequestBody Fav fav)
    {
        String id = fav.getImdb();
        return userService.getUserById(id);
    }






}
