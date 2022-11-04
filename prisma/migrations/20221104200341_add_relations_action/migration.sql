-- DropForeignKey
ALTER TABLE "balance" DROP CONSTRAINT "balance_category_id_fkey";

-- DropForeignKey
ALTER TABLE "balance" DROP CONSTRAINT "balance_user_id_fkey";

-- AddForeignKey
ALTER TABLE "balance" ADD CONSTRAINT "balance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "balance" ADD CONSTRAINT "balance_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
