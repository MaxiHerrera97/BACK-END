const http = require ('http');
 
http.createServer((request, response)=>{
    const users =[
        {id: 25, name: 'Anthony'},
        {id: 89, name: 'Tomas'},
        {id: 27, name: 'Jesus'}
    ]
       if(request.url === '/users'){
              response
              .writeHead(200, {"Content-type": "application/json"})
              .end(JSON.stringify(users));

       }else if (request.url === '/message'){
          response
           .writeHead(200, {"Content-type": "text/plain"})
           .end("Esta es la ruta message")

       }else{
          response
           .writeHead(404, {"Content-type": "application/json"})
           .end(JSON.stringify({error: "No se especificó una ruta o la ruta indicada no existe"}))
       }
    
}).listen(3001, '127.0.0.1');