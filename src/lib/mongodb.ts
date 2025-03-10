import { MongoClient } from "mongodb"

const uri = process.env.MONGO_URI

if (!uri) {
  throw new Error("Please add MONGO_URI to .env")
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

// In development mode, use a global variable to preserve the connection
// across hot-reloads
interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>
}

// Add the custom property to the global object
declare const global: GlobalWithMongo

// Ensure global._mongoClientPromise exists in development mode
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise