import { pool } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const dbName = await pool.query("SELECT current_database()");
const host = await pool.query("SELECT inet_server_addr()");

console.log("DB:", dbName.rows);
console.log("Host:", host.rows);
