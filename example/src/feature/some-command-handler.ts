import { CommandResult } from '@nestjs-architects/typed-cqrs';
import { CommandHandler, IInferredCommandHandler } from '@nestjs/cqrs';
import { SomeCommand } from './some-command';

@CommandHandler(SomeCommand)
export class SomeCommandHandler implements IInferredCommandHandler<SomeCommand> {
  async execute(command: SomeCommand): Promise<CommandResult<SomeCommand>> {
    return 'Command result';
  }
}
