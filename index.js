const express = require('express');
const app = express();
const port = 9000;
app.use(express.json());

const router = require('./routes/user.route')




  app.get('/api/Users', (req,res)=>{
    res.json({message: 'Hello Twilights'})
});

app.use('/api/Users',router)

// server running port 
app.listen(port,()=>{

    console.log(`Server running at http://localhost: ${port}`);
});
