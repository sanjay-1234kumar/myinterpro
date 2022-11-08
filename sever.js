
const express = require('express');
const app = express();
const DbConnect = require('./database.js');//database function import
const TaskModel = require('./TaskModel');//TaskModel import
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
DbConnect();//database connection call

app.get('/retrieve', async (req, res, next) => {

    try {
        const result = await TaskModel.find();

        return res.json({ or: true, result });

    } catch (error) {

        return res.status(500).json(error);
    }

});

app.post('/', async (req, res, next) => {

    let { name, days } = req.body;

    if (!name) {
        return res.status(400).json("all feilds are required");
    }
    name = name.toLowerCase();
    days = parseInt(days);

    try {

        const result=await TaskModel.create({name,days});

        return res.json({ or: true, result });
    } catch (error) {

        return res.status(500).json(error);
    }

});

app.put('/:id',async(req,res,next)=>{

    const{id}=req.params;
 
    if (!id) {
        return res.status(400).json("id is not provided");
    }
    let { name, days } = req.body;
    name = name.toLowerCase();
    days = parseInt(days);

    try {
        
        const result=await TaskModel.findByIdAndUpdate(id,{name,days});
        return res.json({ or: true, result });
    } catch (error) {
        return res.status(500).json(error);
    }

});

app.delete('/:id',async(req,res,next)=>{
    const{id}=req.params;
 
    if (!id) {
        return res.status(400).json("id is not provided");
    }

    try {
        const result=await TaskModel.findOneAndDelete(id);
        return res.json({ or: true, result });

    } catch (error) {
        return res.status(500).json(error);
    }
});


app.listen(port, () => {
    console.log(`sever is listening at port ${port}`);

});
