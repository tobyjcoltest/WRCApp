package com.samaritan.wrcapp.spark;

import spark.Request;
import spark.Response;
import spark.Route;

import static spark.Spark.get;

public class HelloWorld {
    public static void main(String[] args) {
        get(new Route("/hello") {
            @Override
            public Object handle(Request request, Response response) {
                return "Hello Spark MVC Framework!";
            }
        });
    }
}