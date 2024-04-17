const http = require("http");
const fs = require("fs");
const { title } = require("process");
const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h1>Hello World!</h1>');
// fs.readFile("index.html", (err, dataFromTheFile) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(dataFromTheFile);
// })
// OR
if(req.url == '/') {
    const readableStream = fs.createReadStream('index.html', {encoding: "utf-8"});
    readableStream.pipe(res)
}else if(req.url == '/styles.css') {
    const readableStream = fs.createReadStream('styles.css', {encoding: "utf-8"});
    readableStream.pipe(res)
} else if(req.url == '/script.js') {
    const readableStream = fs.createReadStream('script.js', {encoding: "utf-8"});
    readableStream.pipe(res)
} else if(req.url == '/products') {
    var products = [ 
        {id: 1, title: "macbook pro"},
        {id:2, title: 'laptop'}
    ]
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify(products));
} else {
    res.writeHead(404, 'Not found !')
    res.end('resource not found')
}
    })



// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

console.log('end')




