import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { Router } from 'express-serve-static-core';

class App {
    
    public expressApp: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
    }

    // configure Express middleware.
    private middleware(): void {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    // configure API endpoints.
    private routes(): void {
        let router: Router = express.Router();

        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname+'/angularDist')); 
    }     
}

export { App };