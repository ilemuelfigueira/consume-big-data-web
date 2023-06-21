const { createReadStream } = require("fs");
const { createServer } = require("http");
const path = require("path");
const { Readable, Transform } = require("stream");

const csvtojson = require("csvtojson");

const PORT = 3005;

createServer(async (request, response) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  }

  if (request.method === "OPTIONS") {
    response.writeHead(204, headers);
    response.end();
    return;
  }

  let items = 0
  request.on("close", () => { console.log(`Sent ${items} items`) })

  Readable.toWeb(createReadStream(path.resolve(__dirname, "../public/mymoviedb.csv")))
    .pipeThrough(Transform.toWeb(csvtojson()))
    .pipeThrough(new TransformStream({
      transform(chunk, controller) {
        const jsonData = JSON.parse(Buffer.from(chunk))

        const newObject = {
          title: jsonData.Title,
          overview: jsonData.Overview,
          genre: jsonData.Genre,
          url: jsonData.Poster_Url,
        }

        controller.enqueue(JSON.stringify(newObject).concat("\n"))
      }
    }))
    .pipeTo(new WritableStream({
      write(chunk) {
        items++
        response.write(chunk)
      },
      close() {
        response.end();
      }
    }))

  response.writeHead(200, headers);
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));