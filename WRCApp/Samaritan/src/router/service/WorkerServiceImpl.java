package router.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import router.model.Worker;

@Path("/v1/wrc/workers")
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
