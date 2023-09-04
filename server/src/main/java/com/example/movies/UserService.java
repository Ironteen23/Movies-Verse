package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

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
//        System.out.println("holooa " + e);


    }

    public void addFav(Fav fav) {

//        Optional<Movie> movie= movieRepository.findById(fav.getMovie_id());
//        ObjectId tp = fav.getUser_id();

        String name = fav.getName();
        Optional<User> u = userRepository.existsByName(name);
//        User tr;
//        System.out.println("this is the user_id " + tp);

//        Optional<User> user = userRepository.findByMongoId(fav.getUser_id());

        if(u.isPresent())
        {
            ObjectId movie_id = fav.getMovie_id();

            Set<ObjectId> arr = new HashSet<>();
            Set<ObjectId> f = u.get().getFav();

            User curr = u.get();


            if(f==null)
            {
                arr.add(movie_id);
                System.out.println("setting " + arr);
                curr.setFav(arr);
                userRepository.save(curr);
            }

            else {
                f.add(movie_id);
                System.out.println("setting 2" + f);
                curr.setFav(f);
                userRepository.save(curr);
            }

            System.out.println("ADDED SUCCESFULLY");
            return;
        }

        System.out.println("USER IS NOT PRESENT");
        return;
    }

    public Set<ObjectId> getFav(String name) {
        Optional<User> u = userRepository.existsByName(name);

        if(u.isPresent())
        {
            User user = u.get();

            Set<ObjectId> fav = user.getFav();

            System.out.println("this is fav" +  fav);

            if(fav==null)return null;

            return fav;
        }

        System.out.println("user does not exists");
        return null;


    }
}
