/*
  Warnings:

  - Added the required column `emailVerified` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" BOOLEAN NOT NULL,
ADD COLUMN     "image" TEXT,
ALTER COLUMN "status" SET DEFAULT 'actif',
ALTER COLUMN "role" SET DEFAULT 'admin',
ALTER COLUMN "phone" SET DEFAULT '+33157512306';

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(6),
    "refreshTokenExpiresAt" TIMESTAMP(6),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(6) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(6) NOT NULL,
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
