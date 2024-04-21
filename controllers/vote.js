const httpUtils = require("../appModules/http-utils");

async function voteRouteController(req, res) {
    if (req.method !== "POST") {
        res.statusCode = 404;
        res.end("Not Found");
    } else {
        res.statusCode = 200;
        const body = await httpUtils.parseBody(req);
        const data = JSON.parse(body);
        console.log(data);
    }
}
module.exports = voteRouteController;
