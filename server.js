import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'



//initialize express
const app = express();

//set the view engine
app.set('view engine', 'ejs');


// # 👇️ your domain below, e.g. http://localhost:3000
// Access-Control-Allow-Origin: http://example.com

// Access-Control-Allow-Methods: POST, PUT, PATCH, GET, DELETE, OPTIONS

// Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization


// Enable cors at the server side. 
// const cors = require('cors');
// const corsOption = {
//     origin: ['http://localhost:3000'],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }
// app.use(cors(corsOption));



const allowedOrigins = [
    "http://localhost:5173",
    "https://walt-quotex.netlify.app",
    "https://walt-quotex.netlify.app/",
    "walt-quotex.netlify.app",
  ];
  
  
    app.use(
        cors({
            origin: function (origin, callback) {
                console.log("Request Origin:", origin);
        
                if (!origin) {
                // Requests with no origin (e.g., same-origin requests) are allowed
                return callback(null, true);
                }
        
                if (allowedOrigins.indexOf(origin) === -1) {
                const message ="The CORS policy for this site does not allow access from the specified origin.";
                return callback(new Error(message), false);
                }
        
                return callback(null, true);
            },
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Specify the methods you want to allow
            credentials: true,
            optionsSuccessStatus: 204, // Handle preflight requests
        })
    );



app.use(bodyParser.urlencoded({extended: true}));


//use static folder
app.use(express.static("public"));



//Quotes to be sent back
const quotes = [
    {
        id: 0,
        quote: 'To live is the rarest thing in the world; most people exist, that is all.', 
        author: 'Oscar Wilde'
    },
    {
        id: 1,
        quote: 'Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.', 
        author: 'Marilyn Monroe'
    }, 
    {
        id: 2,
        quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.', 
        author: 'Bill Keane'
    },
    {
        id: 3,
        quote: 'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.', 
        author: 'Albert Einstein'
    },
    {
        id: 4,
        quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.', 
        author: 'Helen Keller'
    },
    {
        id: 5,
        quote: 'You can\'t live your life for other people. You\'ve got to do what\'s right for you, even if it hurts some people you love.', 
        author: 'Nicholas Sparks'
    },
    {
        id: 6,
        quote: 'Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.', 
        author: 'Roy T. Bennett'
    },
    {
        id: 7,
        quote: 'Our lives begin to end the day we become silent about the things that matter.', 
        author: 'Martin Luther King Jr.'
    },
    {
        id: 8,
        quote: 'If you\'re reading this...\nCongratulations, you\'re alive. If that\'s not something to smile about, then i don\'t know what is.', 
        author: 'Chad Sugg'
    },
    {
        id: 9,
        quote: 'Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.', 
        author: 'Paulo Coelho'
    },
    {
        id: 10,
        quote: 'And, when you want something, all the universe conspires in helping you to achieve it.', 
        author: 'Paulo Coelho'
    },
    {
        id: 11,
        quote: 'I work 16hours a day and people still calling me Lucky.', 
        author: 'Elon Musk'
    }
];



//quotes route to get the quotes object
app.get("/:routes", (req, res) => {

    if (req.params.routes === 'quotes') {
        //send the status code and quotes array.
        res.status(200)
        .json(quotes);
    } else {
        res.status(404).send({error: "The route you're looking for doesn't exist"});
    }
});




//set port
const port = 4040;

//use remote port if available
const ports = process.env.PORT || port;

//starting server
app.listen(ports, ()=> 
console.log(`
Server started on port http://localhost:${ports}
`));