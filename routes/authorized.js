const check = require('../vars/check');
const mongoose = require("mongoose");
const Roles = mongoose.model("roles");

module.exports = (app) => {
    app.post(
        "/authorized",
        (req, res, next) => {
            check.admin = false;
            check.analyst = false;
            check.editor = false;
            next();
        },
        async (req, response) => {
            var Admin = "admin";
            ("m mid");
            var Analyst = "analyst";
            var Editor = "editor";
            var name = req.body.name;
            var query_admin = {};
            var query_analyst = {};
            var query_editor = {};
            query_admin[Admin] = name;
            query_analyst[Analyst] = name;
            query_editor[Editor] = name;

            await Roles.findOne(query_admin, function (err, res) {
                if (res !== null) {

                    check.admin = true;
                }
            });

            await Roles.findOne(query_analyst, function (err, res) {
                if (res !== null) {
                    check.analyst = true;
                }
            });

            await Roles.findOne(query_editor, function (err, res) {
                if (res !== null) {
                    check.editor = true;
                }
            });

            if (check.admin) {
                response.end(`${name} can ${req.body.actionType} the resource`);
            }
            if (check.editor && req.body.actionType != "delete") {
                response.end(`${name} can ${req.body.actionType} the resource`);
            } else if (check.analyst && req.body.actionType == "read") {
                response.end(`${name} can ${req.body.actionType} the resource`);
            } else {
                response.end(`${name} cannot ${req.body.actionType} the resource`);
            }
        }
    );
}