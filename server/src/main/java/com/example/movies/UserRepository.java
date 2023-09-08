package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

public interface UserRepository extends MongoRepository<User, ObjectId> {

    @Query("{name:?0}")
    Optional<User> existsByName(String s);

    @Query("{email:?0}")
    Optional<User> existsByEmail(String e);

//    @Query("{name:?0 , password:?1}")
//    @Query("{$and :[{name: ?0},{password: ?1}] }")
    @Query("{name:?0 , password:?1}")
    Optional<User> existsByNameAndPass(String name , String password);


    @Query("{_id:?0}")
    Optional<User> findByMongoId(Object userId);
}
