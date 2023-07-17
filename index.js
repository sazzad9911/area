import dotenv from "dotenv";
import http from "http"
import express from "express";
import "express-async-errors";
import { createServer } from "http";
import cors from "cors";
import helmet from "helmet";
import { divisionList, getDistrict, getUazila, getUnion } from "./data/functions.js";


dotenv.config();
const app= express()
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/divisions",divisionList)
app.post("/district",getDistrict)
app.post("/upazila",getUazila)
app.post("/union",getUnion)
//Middleware
//app.use(notFoundMiddleware);
//app.use(errorHandlerMiddleware);


const httpServer = createServer(app)
const port = process.env.PORT || 1337;
const server=http.createServer({
    port:1400,
})

const start = async () => {
    try {
      app.set("port", port);
      httpServer.listen(app.get("port"), function () {
        var port = httpServer.address().port;
        console.log("Running on : ", port);
      });
      //orderWorker.init();
      //initilize synchronized processes
    } catch (error) {
      console.log(error);
    }
  };
start();
