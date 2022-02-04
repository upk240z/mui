import path from 'path'
import express from 'express'
import { Command } from "commander"

const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use((req, res, next) => {
  if (req.url != '/') {
    return res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  }
  next()
})

const program = new Command()
program.option('--port <number>', 'listen port')
program.parse(process.argv)

const options = program.opts()
let port = 3000
if (options.port) {
    port = options.port
}

app.listen(port);
console.log('http://localhost:' + port + '/');
