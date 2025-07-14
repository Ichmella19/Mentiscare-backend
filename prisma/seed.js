/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  const existingAdmin = await prisma.user.findFirst({
    where: { email: "admin@mentiscare.com" },
  });
  console.log("Checking for existing admin user...");

  if (!existingAdmin) {
    console.log("No admin user found, creating one...");
    await prisma.user.create({
      data: {
        id: crypto.randomUUID(), // si `@default(uuid())` dans Prisma
        name: "Elcy",
        email: "admin@mentiscare.com",
        password: await bcrypt.hash("Elcy@19", 10),
        role: "admin",
        status: "actif",
        phone: "0157512306",
        emailVerified: true,
      },
    });
    console.log("Admin seeded");
  } else {
    console.log("Admin already exists");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
