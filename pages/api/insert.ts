import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";



export default async function handler(req:NextApiRequest, res:NextApiResponse) {
const client = await clientPromise;
const db = client.db("nextTest");
const collection = db.collection("test");
const result = await collection.insertOne({ name: "item1" });
console.log(result)
    res.status(200).send(result)
  }