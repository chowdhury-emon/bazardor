import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BAZARDOR_DB_URL as string);
const db = client.db("users");

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: { enabled: true}
});