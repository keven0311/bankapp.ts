import express from 'express';
import router from './api/index'

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello TypeScript!");
})

app.use('/api', router)

app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`)
})