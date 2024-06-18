const http = require("http")
const fs = require("fs");
const { log } = require("console");


const handleRequest = ((req, res)=>{

    if (req.method === "OPTIONS") {
        res.writeHead(204, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Accept",
            "Content-Length": 0
        });
        res.end();
        return;
    }


    if(req.method === "POST" && req.url === "/submit"){
        let body = ""
        req.on("data", chunk =>{
            body +=chunk.toString()
        })
        req.on("end", ()=>{
            const data = JSON.parse(body)
            // console.log(data);
            
            fs.appendFile("database.json",JSON.stringify(data) + ", \n", (error)=>{
            
                if(error){
                    res.writeHead(500, {"Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                    })
                    res.end(JSON.stringify({message: "server errror"}))
                }
                res.writeHead(200, {"Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"

                })
                res.end(JSON.stringify({message: "saved"}, console.log(data)))

            })

        })
    }else{
        res.writeHead(404, {"Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"

        })
        res.end("Not found")
    }

})

const server = http.createServer(handleRequest)


server.listen(3022, ()=>{
    console.log("server running");
})
