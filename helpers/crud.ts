import clientPromise from '../lib/mongodb'

export const createItem = async () => {
    const client = await clientPromise;
    const db = client.db("mydb");
    const collection = db.collection("items");
    const result = await collection.insertOne({ name: "item1" });
    console.log(result);
}