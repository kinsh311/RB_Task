const existsIn = require('../vars/exist_in');
const mongoose = require("mongoose");
const Roles = mongoose.model("roles");
module.exports = (app) => {
    app.post(
        "/register",
        (req, res, next) => {
            existsIn.admin = "";
            existsIn.analyst = "";
            existsIn.editor = "";

            next();
        },
        async (req, response) => {
            const requested_role = req.body.role.toString();
            const admin_r = requested_role.search("admin");
            const analyst_r = requested_role.search("analyst");
            const editor_r = requested_role.search("editor");

            var Admin = "admin";
            var Analyst = "analyst";
            var Editor = "editor";
            var name = req.body.name;
            var query_admin = {};
            var query_analyst = {};
            var query_editor = {};
            query_admin[Admin] = name;
            query_analyst[Analyst] = name;
            query_editor[Editor] = name;

            if (admin_r > -1) {
                await Roles.findOne(query_admin, function (err, res) {
                    if (res !== null) {
                        existsIn.admin = "admin ";
                    } else {
                        var m = new Roles();
                        m.admin.push(name);
                        m.save();
                    }
                });
            }
            if (analyst_r > -1) {
                await Roles.findOne(query_analyst, function (err, res) {
                    if (res !== null) {
                        existsIn.analyst = "analyst ";
                    } else {
                        var m = new Roles();
                        m.analyst.push(name);
                        m.save();
                    }
                });
            }
            if (editor_r > -1) {
                await Roles.findOne(query_editor, function (err, res) {
                    if (res !== null) {
                        existsIn.editor = "editor ";
                    } else {
                        var m = new Roles();
                        m.editor.push(name);
                        m.save();
                    }
                });
            }


            if (
                existsIn.admin == "" &&
                existsIn.analyst == "" &&
                existsIn.editor == ""
            ) {
                response.end("new redord");
            } else {
                response.end(
                    "registered already exists in " +
                    existsIn.admin +
                    existsIn.analyst +
                    existsIn.editor
                );
            }
        }
    );
}