FROM openjdk:8u111-jdk-alpine

WORKDIR /usr/app
COPY ./target/movies-0.0.1-SNAPSHOT.jar /usr/app

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "movies-0.0.1-SNAPSHOT.jar"]