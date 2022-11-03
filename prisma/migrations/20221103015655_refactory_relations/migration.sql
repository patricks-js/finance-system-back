/*
  Warnings:

  - You are about to drop the column `balance_id` on the `category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category_id]` on the table `balance` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_id` to the `balance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_balance_id_fkey";

-- DropIndex
DROP INDEX "category_balance_id_key";

-- AlterTable
ALTER TABLE "balance" ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "balance_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "balance_category_id_key" ON "balance"("category_id");

-- AddForeignKey
ALTER TABLE "balance" ADD CONSTRAINT "balance_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
