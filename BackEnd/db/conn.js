import { MongoClient } from 'mongodb'

//! Create a link to the monogodb database

        const uri =  process.env.MONGO_URI || "mongodb+srv://imokha01:born2begreat@cluster0.xjs0gqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri);
        let conn;
        try {
          conn = await client.connect();
        } catch (e) {
          console.error(e);
        }
        let db = conn.db("talk2me");

        export default db