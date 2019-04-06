const mongoose = require("mongoose");
const Roles = mongoose.model("roles");
module.exports = app => app.get('/flush', (req, res) => {
    Roles.deleteMany({}, function (err) {
        res.end('database clean')
    })
})