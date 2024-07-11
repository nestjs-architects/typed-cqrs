import { ICommand } from '@nestjs/cqrs';
import { resultType } from './symbols';

export class Command<T> implements ICommand {
  protected [resultType]!: T;
}

export type CommandResult<CommandT extends Command<unknown>> = CommandT extends Command<
  infer ResultT
>
  ? ResultT
  : never;
