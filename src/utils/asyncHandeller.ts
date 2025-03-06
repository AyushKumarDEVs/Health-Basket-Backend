import { apiError } from "./apiError"

export const asyncHandeller=async (fx:any)=>{

    return async (req:any,res:any,next:any)=>{
        try {
            await fx(req,res,next);
        } catch (error) {
            throw new apiError("something went wrong",500);
        }
    }
}