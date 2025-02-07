-- CreateTable
CREATE TABLE "TechStack" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "iconName" VARCHAR(100) NOT NULL,
    "color" VARCHAR(7) NOT NULL,
    "url" VARCHAR(255) NOT NULL,

    CONSTRAINT "TechStack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "githubUrl" VARCHAR(255) NOT NULL,
    "projectUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDescription" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "ProjectDescription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TechStack_name_key" ON "TechStack"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TechStack_iconName_key" ON "TechStack"("iconName");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_name_key" ON "Projects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_githubUrl_key" ON "Projects"("githubUrl");

-- AddForeignKey
ALTER TABLE "ProjectDescription" ADD CONSTRAINT "ProjectDescription_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
