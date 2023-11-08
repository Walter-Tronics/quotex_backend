import express from 'express';
import bodyParser from 'body-parser';


//initialize express
const app = express();

//set the view engine
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));

//Let express recognize public folder for media files and style sheet
app.use(express.static("public"));





//set port
const port = 404;

//use remote port if available
const ports = process.env.PORT || port;

//starting server
app.listen(ports, ()=> 
console.log(`
Server started on port http://localhost:${ports}
`));