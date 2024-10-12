/*
  Warnings:

  - You are about to drop the column `answerType` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `parentAnswerThreadId` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `questionsQuestionId` on the `Answers` table. All the data in the column will be lost.
  - Added the required column `parentThreadId` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `threadEntryType` to the `Answers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_questionsQuestionId_fkey";

-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "answerType",
DROP COLUMN "parentAnswerThreadId",
DROP COLUMN "questionsQuestionId",
ADD COLUMN     "parentThreadId" INTEGER NOT NULL,
ADD COLUMN     "questionsId" INTEGER,
ADD COLUMN     "threadEntryType" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("questionId") ON DELETE SET NULL ON UPDATE CASCADE;
