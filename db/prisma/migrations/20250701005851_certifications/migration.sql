-- CreateTable
CREATE TABLE "Certification" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "src" VARCHAR(510) NOT NULL,
    "alt" VARCHAR(100) NOT NULL,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);
