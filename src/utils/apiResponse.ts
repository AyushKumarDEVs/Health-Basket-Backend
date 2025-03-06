export class apiResponse{
    constructor(
        public message:string="default",
        public statusCode:number=200,
        public data:any[],
    ){
        this.message=message;
        this.statusCode=statusCode;
        this.data=data;
    }
}