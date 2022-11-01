-- CreateTable
CREATE TABLE "balance_category" (
    "id" TEXT NOT NULL,
    "id_balance" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "balance_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "balance_category" ADD CONSTRAINT "balance_category_id_balance_fkey" FOREIGN KEY ("id_balance") REFERENCES "balance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "balance_category" ADD CONSTRAINT "balance_category_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
