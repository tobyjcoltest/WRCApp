package com.samaritan.wrcapp.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.samaritan.wrcapp.model.Worker;

@Path("/v1/wrc/workers")
public interface WorkerService {

    @GET
    @Produces
    List<Worker> getAllWorkers();

    @GET
    @Produces
    @PathParam("/id")
    Worker getWorker(int id);

}
