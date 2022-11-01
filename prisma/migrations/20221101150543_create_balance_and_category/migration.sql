-- CreateTable
CREATE TABLE "balance" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "balance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "expense" BOOLEAN NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);
