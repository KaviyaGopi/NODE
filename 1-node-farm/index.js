const fs = require("fs");
const http = require("http");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FILES

//  Blocking, Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is What we know about the avacado: ${textIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("file written!");

// Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "uft-8", (err, data1) => {
//   if (err) return console.log("ERROR");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n{data3}`, "utf-8", (err) => {
//         console.log("your file has been written");
//       });
//     });
//   });
// });
// console.log("will read file!");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
