const check = require('../vars/check');
const mongoose = require("mongoose");
const Roles = mongoose.model("roles");
module.exports = (app) => {
    app.post(
        "/unregister",
        async (req, res, next) => {
            check.admin = false;
            check.analyst = false;
            check.editor = false;
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
                await Roles.deleteMany(query_admin, function (err, res) {
                    if (res.deletedCount !== 0) {
                        check.admin = true;
                    }
                });
            }
            if (analyst_r > -1) {
                await Roles.deleteMany(query_analyst, function (err, res) {
                    if (res.deletedCount !== 0) {

                        check.analyst = true;
                    }
                });
            }
            if (editor_r > -1) {
                await Roles.deleteMany(query_editor, function (err, res) {
                    if (res.deletedCount !== 0) {
                        check.editor = true;
                    }
                });
            }

            if (
                check.admin === true ||
                check.analyst === true ||
                check.editor === true
            ) {

                response.end(`${name} deleted`);
            } else {
                response.end(`not found`);
            }
        }
    );
}