import dotenv from "dotenv";
import http from "http"
import express from "express";
import "express-async-errors";
import { createServer } from "http";
import cors from "cors";
import { divisionList, getDistrict, getUazila, getUnion } from "./data/functions.js";


dotenv.config();
const app= express()
const corsConfig = {
  origin: '',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/',(req,res)=>{
  res.send("Area Routing")
})
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
