export class DatabaseConnectionError extends Error {

    reason = "Error connecting to datatbase";
    
    constructor() {
        super();

        //only for extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);

    }
}