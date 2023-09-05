package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import java.sql.SQLOutput;
import java.util.*;

@Service
public class UserService {


    @Autowired
    MovieRepository movieRepository;

    @Autowired
    UserRepository userRepository;


    public void addUser(User user) {

        String s= user.getName();
        String e = user.getEmail();
        System.out.println("name is " + s);

        Optional<User> a = userRepository.existsByName(s);
        Optional<User> b = userRepository.existsByEmail(e);

        System.out.println("A");
//        System.out.println("B" + b.isPresent);

        if(a.isPresent() || b.isPresent())
        {
            throw new IllegalStateException("Given username or Email already exists . please use another ");
        }

        User u = userRepository.insert(new User(user.getName() , user.getEmail(), user.getPassword()));

    }

    public void login(User user) {

        String n = user.getName();
        String p = user.getPassword();
        Optional<User> e = userRepository.existsByNameAndPass(n,p);
//
//        System.out.println("i found this user" + user);
//
        if(e.isPresent())
        {
            System.out.println("LOGIN SUCEESFULL");
            return;
        }

        throw new IllegalStateException("user does not exists Or Incorrect Password");
    }

    public void addFav(Fav fav) {

//        Optional<Movie> movie= movieRepository.findById(fav.getMovie_id());
//        ObjectId tp = fav.getUser_id();

        String name = fav.getName();
        Optional<User> u = userRepository.existsByName(name);
//        User tr;
//        System.out.println("this is the user_id " + tp);

        if(u.isPresent())
        {
            User user = u.get();

            Set<String> st = user.getFav();
            if(st==null)
            {
                Set<String> s = new HashSet<>();
                s.add(fav.getImdb());
                user.setFav(s);
                userRepository.save(user);
                return;
            }

            st.add(fav.getImdb());
            user.setFav(st);
            userRepository.save(user);
            return;
        }


        System.out.println("USER IS NOT PRESENT");
        return;
    }

    public Set<String> getFav(String name) {

        Optional<User> u = userRepository.existsByName(name);

        if(u.isPresent())
        {
            User user = u.get();
            System.out.println("user is" + u.get());

            Set<String> st = user.getFav();
            return st;
        }

        System.out.println("user does not exists");
        return null;


    }

    public Optional<User> getUser(String name) {
        return userRepository.existsByName(name);
    }

    public Set<Movie> getFavList(String name) {

        Optional<User> u = userRepository.existsByName(name);

        if(u.isPresent())
        {
            User user = u.get();
            Set<String> st = user.getFav();

            Set<Movie> res = new HashSet<>();

            int n = st.size();
            for(String temp:st)
            {
                RestTemplate restTemplate = new RestTemplate();
                String uri = "http://localhost:8080/api/v1/movies/"+temp;
                System.out.println("this is uri " + uri);

                Movie m = restTemplate.getForObject(uri,Movie.class);
                System.out.println("mOvie" + m);
                res.add(m);
            }
            System.out.println("this is res " + res);
            return res;
        }

        System.out.println("user not present");
        return null;

    }
}
