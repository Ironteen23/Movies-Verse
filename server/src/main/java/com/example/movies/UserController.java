package com.example.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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






}
