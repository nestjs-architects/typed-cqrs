import { ICommand } from '@nestjs/cqrs';

export class Command<T> implements ICommand {
  resultType$e1ca39fa!: T;
}

export type CommandResult<CommandT extends Command<unknown>> = CommandT extends Command<
  infer ResultT
>
  ? ResultT
  : never;
