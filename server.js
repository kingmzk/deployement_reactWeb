import express from 'express';
import dotenv from 'dotenv';
import Connection from './DataBase/db.js';  //js conpulsary
import cors from 'cors';

import Router from './routes/route.js';
import bodyParser from 'body-parser';


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true }))
app.use('/', Router);


const PORT =  process.env.PORT || 8000;
//const PORT = https://beamish-dango-d6ae84.netlify.app;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb+srv://KING:Password123@websitedb.toiwlq0.mongodb.net/form?retryWrites=true&w=majority`;

Connection(URL);

if(process.env.NODE_ENV == 'production')
{
    app.use(express.static('client/build'))
}



app.listen(PORT , () => console.log(`Server is Running successfull on ${PORT}`));  // 2 argument   port no  and callback function