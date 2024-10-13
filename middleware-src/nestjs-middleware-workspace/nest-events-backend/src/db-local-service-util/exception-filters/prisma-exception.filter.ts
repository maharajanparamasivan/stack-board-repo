import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Prisma } from '@prisma/client';
  import { Request, Response } from 'express';
  
  @Catch(Prisma.PrismaClientKnownRequestError)
  export class PrismaClientExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
      console.log("");
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message = 'Something went wrong';
  
      // Handle Prisma-specific errors
      if (exception.code === 'P2002') {
        status = HttpStatus.BAD_REQUEST;
        message = `Unique constraint failed on the field: ${exception.meta.target}`;
      }
  
      response.status(status).json({
        statusCode: status,
        message: message,
        error: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }