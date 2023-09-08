package com.example.movies;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @Operation(summary = "Add review" , description = "This api allows us to add a review to a specific movie")
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String , String> payload)
    {
        return new ResponseEntity<Review>(reviewService.createReview(payload.get("reviewBody") , payload.get("imdbId")), HttpStatus.CREATED);
    }

}
