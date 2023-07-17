import { StatusCodes } from "http-status-codes";
import divisions from "./divisions.json" assert { type: "json" };
import districts from "./districts.json" assert { type: "json" };
import upazilas from "./upazilas.json" assert { type: "json" };
import unions from "./unions.json" assert { type: "json" };

const divisionList=async(req,res)=>{
    res.status(StatusCodes.OK).json({data:divisions});
}
const getDistrict=async(req,res)=>{
    const divisionId=req.body.divisionId;
    if(!divisionId){
        res.status(StatusCodes.BAD_REQUEST).json({message:"divisionId is required"});
        return;
    }
    res.status(StatusCodes.OK).json({data:districts.filter(d=>d.division_id.match(divisionId))});
}
const getUazila=async(req,res)=>{
    const districtId=req.body.districtId;
    if(!districtId){
        res.status(StatusCodes.BAD_REQUEST).json({message:"divisionId is required"});
        return;
    }
    res.status(StatusCodes.OK).json({data:upazilas.filter(d=>d.district_id.match(districtId))});
}
const getUnion=async(req,res)=>{
    const upazilaId=req.body.upazilaId;
    if(!upazilaId){
        res.status(StatusCodes.BAD_REQUEST).json({message:"divisionId is required"});
        return;
    }
    res.status(StatusCodes.OK).json({data:unions.filter(d=>d.upazilla_id.match(upazilaId))});
}
export {getUnion,getUazila,getDistrict,divisionList}