import express from "express";
import dotenv from "dotenv";
import { getUserdetailByID } from "./handler/handler.mjs";
// import userMokup from "./utiliti/userdetails.mjs";

dotenv.config({ path: './.env' });
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    console.log('worked');
    
});

// Get user details by input id
app.get('/api/user/:id', getUserdetailByID);
 
app.listen(port, () =>
    console.log(`localhos: ${port}`)
);