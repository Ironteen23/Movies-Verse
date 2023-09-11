package com.example.movies;

import org.bson.json.JsonObject;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> getAllMovies()
    {
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovie(String ImdbId) {

        return movieRepository.findMovieByImdbId(ImdbId);
    }

    public Set<Movie> getMoviesByGenre(ArrayList<String> arr) {

        return null;
    }

    public String getTrendingMovies(String s) {

        RestTemplate restTemplate = new RestTemplate();
        String apiKey = "96444b11aa265b735baa1a4b50b9aa5e";
        String url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page="+s+"&api_key="+apiKey;

//        HttpHeaders headers = new HttpHeaders();
////        headers.add("api_key", "Bearer " + apiKey);
////        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
//
//        HttpEntity<String> entity = new HttpEntity<>(headers);

         String str = restTemplate.getForObject(url,String.class).toString();

        System.out.println("jsonObject is " + str);
         return str;



    }
}
