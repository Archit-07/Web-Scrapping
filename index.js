import main from "./Scrapping.js";
import http from "http";

let port = 8080;

var server = http.createServer(async (req, res) => {
  if (req.url == "/getTimeStories") {
    res.writeHead(200, { "Content-Type": "text/html" });
    var data = await main();
    res.write(JSON.stringify(data));
    res.end();
    console.log(data);
  }
});
server.listen(port, console.log(`server is runnninggg on the port ${port}`));
