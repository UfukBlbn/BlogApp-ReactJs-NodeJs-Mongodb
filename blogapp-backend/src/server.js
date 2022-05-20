import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';


const app = express();
app.use(bodyParser.json());




// app.get('/hello',(req,res) => res.send('Hello!'));
//  app.get('/hello/:name',(req,res) => res.send(`Hello! ${req.params.name}`));
// app.post('/hello',function (req,res) { res.send(`Hello ${req.body.name}`)});

app.get('/api/articles/:name', async (req,res)=>{
    try{
    const articleName=req.params.name;

    const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true});
    const db = client.db('my-blog');
    const articlesInfo = await db.collection('articles').findAll({name:articleName})

    res.status(200).json(articlesInfo);
    client.close();
    }
    catch(error)
    {
        res.status(500).json({message:'Error connecting to db',error});
    }
})

app.post('/api/articles-list/:name/upvotes',(req,res)=>
{
    const articleName = req.params.name;
    articlesInfo[articleName].upvotes +=1;
    res.status(200).send(`${articleName} has ${articlesInfo[articleName].upvotes} upvote`);
})

app.post('/api/articles-list/:name/add-comment',(req,res)=>{
    const {username,text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username,text});
    res.status(200).send(articlesInfo[articleName]);

})

app.listen(8000,()=>console.log('listening on port 8000'))