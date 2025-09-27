import { Controller, Get } from '@nestjs/common';

@Controller('hello') // Route /hello
export class HelloController {
  @Get() // GET /hello
  getHello(): string {
    return 'Bonjour je suis baptiste';
  }
}
