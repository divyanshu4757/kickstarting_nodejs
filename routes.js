const fs = require('fs');


const requestHandler=(req, res)=>{
    const url = req.url;
    const method = req.method;
if (url === "/") {
    fs.readFile("text.txt", (err, data) => {
      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(
        `<body> <h1>${data}</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
      );
      res.write("</head>");
      res.end();
      return;
    });
    return;
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    //data event is fired when a new chunk is ready to be read
    req.on("data", (chunk) => {
      //console.log(chunk);
      body.push(chunk);
    });
    //end event is fired when we get all the request data
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.appendFile("text.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
      return;
    });

    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my nodejs server</h1></body>");
  res.write("</head>");
  res.end();

};


//module.exports = requestHandler;

//module.exports = {
//    handler:requestHandler,
//    sometext : 'some hard coded text'
//};


module.exports.handler = requestHandler;
module.exports.sometext = 'some hardcoded text';
