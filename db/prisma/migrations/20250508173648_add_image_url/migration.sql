/*
  Warnings:

  - Added the required column `imageUrl` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "imageUrl" VARCHAR(255) NOT NULL,
ALTER COLUMN "githubUrl" DROP NOT NULL;
