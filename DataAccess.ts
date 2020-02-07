import * as Mongoose from "mongoose";

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    // local connect
    static DB_CONNECTION_STRING: string = "";

    construcor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING, {useNewParser: true});

        return this.mongooseInstance;
    }
}
DataAccess.connect();
export { DataAccess };   