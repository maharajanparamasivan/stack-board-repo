-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "emailId" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "StackExchange" (
    "stackExchangeId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "published" BOOLEAN DEFAULT false,

    CONSTRAINT "StackExchange_pkey" PRIMARY KEY ("stackExchangeId")
);

-- CreateTable
CREATE TABLE "StackBoard" (
    "stackBoardId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdByUserId" INTEGER,
    "stackExchangeId" INTEGER,

    CONSTRAINT "StackBoard_pkey" PRIMARY KEY ("stackBoardId")
);

-- CreateTable
CREATE TABLE "StackBoardMembership" (
    "stackBoardMembershipId" SERIAL NOT NULL,
    "memberRole" TEXT NOT NULL,
    "userId" INTEGER,
    "stackBoardId" INTEGER NOT NULL,

    CONSTRAINT "StackBoardMembership_pkey" PRIMARY KEY ("stackBoardMembershipId")
);

-- CreateTable
CREATE TABLE "Questions" (
    "questionId" SERIAL NOT NULL,
    "questionTitle" TEXT,
    "questionDescription" TEXT,
    "upVote" INTEGER NOT NULL,
    "downVote" INTEGER NOT NULL,
    "questionStatus" TEXT NOT NULL,
    "stackBoardId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("questionId")
);

-- CreateTable
CREATE TABLE "Answers" (
    "answerId" SERIAL NOT NULL,
    "answerDescription" TEXT,
    "answerType" TEXT NOT NULL,
    "parentAnswerThreadId" INTEGER NOT NULL,
    "questionsQuestionId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("answerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_emailId_key" ON "User"("emailId");

-- AddForeignKey
ALTER TABLE "StackBoard" ADD CONSTRAINT "StackBoard_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StackBoard" ADD CONSTRAINT "StackBoard_stackExchangeId_fkey" FOREIGN KEY ("stackExchangeId") REFERENCES "StackExchange"("stackExchangeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StackBoardMembership" ADD CONSTRAINT "StackBoardMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StackBoardMembership" ADD CONSTRAINT "StackBoardMembership_stackBoardId_fkey" FOREIGN KEY ("stackBoardId") REFERENCES "StackBoard"("stackBoardId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_stackBoardId_fkey" FOREIGN KEY ("stackBoardId") REFERENCES "StackBoard"("stackBoardId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsQuestionId_fkey" FOREIGN KEY ("questionsQuestionId") REFERENCES "Questions"("questionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
