export class apiError extends Error{
    constructor(
        public message :string="something went wrong !",
        public statusCode:number=500,
        public errors? :any[],
    ){
        super(message);
        this.statusCode=statusCode;
        this.errors=errors;
    }
}