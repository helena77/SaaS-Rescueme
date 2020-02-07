"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
    }
    // configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // configure API endpoints.
    App.prototype.routes = function () {
        var router = express.Router();
        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname + '/angularDist'));
    };
    return App;
}());
exports.App = App;
