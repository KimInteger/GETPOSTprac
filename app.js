const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile('./public/index.html', (err,data)=>{
        if (err) {
          res.writeHead(500,{"Content-Type" : "text/plain; charset=UTF-8"});
          res.end("서버 자체에서 에러가 발생했습니다.");
        } else {

        }
      });
    }
  } else if (req.method === 'POST') {

  } else {

  }
});

server.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  } else {
    console.log('Server Open!!!!!!!!!!!!!!!!!!');
    console.log(`http://localhost:${PORT}`);
  }
});