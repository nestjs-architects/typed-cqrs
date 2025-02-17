import { CommandHandler, CommandResult, ICommandHandler } from '@nestjs/cqrs';
import { SomeCommand } from './some-command';

@CommandHandler(SomeCommand)
export class SomeCommandHandler implements ICommandHandler<SomeCommand> {
  async execute(command: SomeCommand): Promise<CommandResult<SomeCommand>> {
    return 'Command result';
  }
}
