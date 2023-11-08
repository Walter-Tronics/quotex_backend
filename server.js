import express from 'express';
import bodyParser from 'body-parser';


//initialize express
const app = express();

//set the view engine
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));

//Let express recognize public folder for media files and style sheet
app.use(express.static("public"));



//Quotes to be sent back
const quotes = [
    {
        quote: 'To live is the rarest thing in the world; most people exist, that is all.', 
        author: 'Oscar Wilde'
    },
    {
        quote: 'Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.', 
        author: 'Marilyn Monroe'
    }, 
    {
        quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.', 
        author: 'Bill Keane'
    },
    {
        quote: 'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.', 
        author: 'Albert Einstein'
    },
    {
        quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.', 
        author: 'Helen Keller'
    },
    {
        quote: 'You can\'t live your life for other people. You\'ve got to do what\'s right for you, even if it hurts some people you love.', 
        author: 'Nicholas Sparks'
    },
    {
        quote: 'Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.', 
        author: 'Roy T. Bennett'
    },
    {
        quote: 'Our lives begin to end the day we become silent about the things that matter.', 
        author: 'Martin Luther King Jr.'
    },
    {
        quote: 'If you\'re reading this...\nCongratulations, you\'re alive. If that\'s not something to smile about, then i don\'t know what is.', 
        author: 'Chad Sugg'
    },
    {
        quote: 'Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.', 
        author: 'Paulo Coelho'
    },
    {
        quote: 'And, when you want something, all the universe conspires in helping you to achieve it.', 
        author: 'Paulo Coelho'
    }
];




//set port
const port = 404;

//use remote port if available
const ports = process.env.PORT || port;

//starting server
app.listen(ports, ()=> 
console.log(`
Server started on port http://localhost:${ports}
`));