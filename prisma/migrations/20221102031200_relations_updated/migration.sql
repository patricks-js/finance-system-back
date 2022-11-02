/*
  Warnings:

  - You are about to drop the `balance_category` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[balance_id]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `balance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balance_id` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "balance_category" DROP CONSTRAINT "balance_category_id_balance_fkey";

-- DropForeignKey
ALTER TABLE "balance_category" DROP CONSTRAINT "balance_category_id_category_fkey";

-- AlterTable
ALTER TABLE "balance" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "category" ADD COLUMN     "balance_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "balance_category";

-- CreateIndex
CREATE UNIQUE INDEX "category_balance_id_key" ON "category"("balance_id");

-- AddForeignKey
ALTER TABLE "balance" ADD CONSTRAINT "balance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_balance_id_fkey" FOREIGN KEY ("balance_id") REFERENCES "balance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
