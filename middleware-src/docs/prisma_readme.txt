Steps to setup prisma

1) Navigate to you nest project and run "npm install prisma --save-dev"
2) npx prisma
3) npx prisma init

Running init will generate us the prisma schema and a .env file where the database
environment details are stored. Note that, for this to work, you need to install the ConfigModule
https://docs.nestjs.com/techniques/configuration

