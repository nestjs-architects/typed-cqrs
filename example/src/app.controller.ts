import { CommandResult, QueryResult } from '@nestjs-architects/typed-cqrs';
import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SomeCommand, SomeQuery } from './feature';

@Controller()
export class AppController {
  constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

  @Get()
  async getHello(): Promise<QueryResult<SomeQuery>> {
    const result: CommandResult<SomeCommand> = await this.commandBus.execute(new SomeCommand());
    console.log(result);

    return this.queryBus.execute(new SomeQuery());
  }
}
