
const express = require('express');
const { connectToDatabase, getDatabase } = require('./database');
const cors=require ('cors')
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const db = getDatabase(); 
    const collections = await db.listCollections().toArray();
    res.json({ collections });
  } catch (error) {
    console.error('Error fetching collections', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/Home', async (req, res) => {
  try {
    const db = getDatabase();  
    const collection = db.collection('Home');  
    const Home = await collection.find().toArray(); 
    res.json(Home); 
  } catch (err) {
    console.log('Failed to fetch places', err);
    res.status(500).json({ error: 'Failed to fetch Home data' });
  }
});

// app.get('/api/Home',async (req,res)=>{
//   try{
//   const db=getDatabase();
//   const collection=db.collection("Home");
//   const Home=collection.find().toArray();
//   res.json(Home)
//   }catch(err){
//    console.log("eundshs fioy fy feyifw ",err)
//   }
// })


app.get('/api/Restorents', async (req, res) => {
    try {
      const db = getDatabase();  
      const collection = db.collection('Restorents'); 
      const Restorents = await collection.find().toArray();  
      res.json(Restorents);  
    } catch (err) {
      console.log('Failed to fetch places', err);
      res.status(500).json({ error: 'Failed to fetch Home data' });
    }
  });

app.get('/api/Hostels', async (req, res) => {
    try {
      const db = getDatabase();
      const collection = db.collection('Hostels');
      const Hostels = await collection.find().toArray(); 
      res.json(Hostels);  
    } catch (err) {
      console.log('Failed to fetch places', err);
      res.status(500).json({ error: 'Failed to fetch Home data' });
    }
  });


connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
