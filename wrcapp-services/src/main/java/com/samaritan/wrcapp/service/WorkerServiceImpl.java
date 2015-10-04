package com.samaritan.wrcapp.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;

import com.samaritan.wrcapp.model.Worker;

public class WorkerServiceImpl implements WorkerService {

    @GET
    @Produces
    public List<Worker> getAllWorkers() {
        // TODO Auto-generated method stub
        return null;
    }

    @GET
    @Produces
    public Worker getWorker(int id) {
        // TODO Auto-generated method stub
        return null;
    }

}
