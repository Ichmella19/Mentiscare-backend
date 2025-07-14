import { betterAuth } from "better-auth";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
   user: {
    modelName: "User",         // Nom EXACT de ta table Prisma
    id: "id",
    email: "email",
    password: "password",
    role: "role",          // facultatif mais utile dans ton cas
    name: "name",          // facultatif si tu veux l'utiliser dans le token
  },
  emailAndPassword: {  
    enabled: true
  },
});
