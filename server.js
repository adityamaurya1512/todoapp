const express=require('express')
const app=express()
const  connectDB = require('./db/db')
const router = express.Router();
const cors = require('cors');
const {getTasksByDate}=require('./controllers/getTaskByDateController')
const { addTask } = require('./controllers/addTaskController');
const PORT=3000;
app.use(express.json())
app.use(cors());
connectDB()


router.post('/add',addTask)
router.get('/get-task',getTasksByDate)
router.get('/',(req,res)=>{
 res.send('your app is live')
})



app.use('/', router); 
app.listen(PORT,()=>{
    console.log(`app is running on port: ${PORT}`)
})

