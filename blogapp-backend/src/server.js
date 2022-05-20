import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';


const app = express();
app.use(bodyParser.json());




// app.get('/hello',(req,res) => res.send('Hello!'));
//  app.get('/hello/:name',(req,res) => res.send(`Hello! ${req.params.name}`));
// app.post('/hello',function (req,res) { res.send(`Hello ${req.body.name}`)});

// add data to mongo db
// app.get('/api/addData', async (req,res)=>{
//     const MongoClient = require('mongodb').MongoClient;
// const URL = 'mongodb://localhost:27017';

// MongoClient.connect(URL, (err, client) => {
//   if (err) throw err;

//   const db = client.db('blog-data');
//   let datas = [
//     { name: 'learn-react', upvotes: '0',comments:[] },
//     { name: 'learn-node', upvotes: '0',comments:[]  },
//     { name: 'my-resume', upvotes: '0',comments:[]  }
                
//   ];
//   db.collection('articles').insertMany(datas, (err, result) => {
//     if (err) throw err;
//     console.log(result.insertedCount + ' datas added.');
//     client.close();
//   });

// });
// })



app.get('/api/articles/:name', async (req,res)=>{
    const articleName = req.params.name;

    const MongoClient = require('mongodb').MongoClient;
    const URL = 'mongodb://localhost:27017';

    MongoClient.connect(URL, (err, client) => {
    if (err) res.status(500).json({message:'Error connecting to db',err});

    const db = client.db('blog-data');
    let query = {};
    const articleInfo = db.collection('articles').findOne({'name':articleName}, function(err,obj) { res.json(obj) });
    });
 
})



app.post('/api/articles-list/:name/upvotes', (req,res)=>
{
    const articleName = req.params.name;

    const MongoClient = require('mongodb').MongoClient;
    const URL = 'mongodb://localhost:27017';

    MongoClient.connect(URL, (err, client) => {
    if (err) res.status(500).json({message:'Error connecting to db',err});
    const db = client.db('blog-data');
    var articleInfo;
    db.collection('articles').findOne({'name':articleName}).then(function(doc)
    {
        if(!doc)
            throw new Error('No record');
        db.collection('articles').updateOne({'name':articleName},{
            '$set':{
                upvotes:doc.upvotes+1,
            },
        })
        db.collection('articles').findOne({'name':articleName}, function(err,obj) { res.status(200).json(obj) , client.close() });
    });

});
})



app.post('/api/articles-list/:name/add-comment',(req,res)=>{
    const articleName = req.params.name;
    const {username,text}=req.body;
    const MongoClient = require('mongodb').MongoClient;
    const URL = 'mongodb://localhost:27017';

    MongoClient.connect(URL, (err, client) => {
    if (err) res.status(500).json({message:'Error connecting to db',err});
    const db = client.db('blog-data');
    var articleInfo;
    db.collection('articles').findOne({'name':articleName}).then(function(doc)
    {
        if(!doc)
            throw new Error('No record');
        db.collection('articles').updateOne({'name':articleName},{
            '$set':{
                comments:doc.comments.concat({username,text}),
            },
        })
        db.collection('articles').findOne({'name':articleName}, function(err,obj) { res.status(200).json(obj) , client.close() });
    });

});

})

app.listen(8000,()=>console.log('listening on port 8000'))