package com.example.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.Optional;

@Service
public class UserService {

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
}
