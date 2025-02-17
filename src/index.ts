import { Query } from './query';
import { ICommandHandler, IQueryHandler } from '@nestjs/cqrs';

export { Command, CommandResult } from './command';
export { Query, QueryResult } from './query';

import * as cqrs from '@nestjs/cqrs';
import { Command } from './command';

declare module '@nestjs/cqrs/dist/query-bus' {
  export interface QueryBus {
    execute<X>(query: Query<X>): Promise<X>;
  }
}

declare module '@nestjs/cqrs/dist/command-bus' {
  export interface CommandBus {
    execute<X>(command: Command<X>): Promise<X>;
  }
}

declare module '@nestjs/cqrs/dist/interfaces/queries/query-bus.interface' {
  export interface IQueryBus {
    execute<X>(query: Query<X>): Promise<X>;
  }
  export type IInferredQueryHandler<QueryType extends Query<unknown>> =
    QueryType extends Query<infer ResultType> ? IQueryHandler<QueryType, ResultType> : never;
}
declare module '@nestjs/cqrs/dist/interfaces/commands/command-bus.interface' {
  export interface ICommandBus {
    execute<X>(command: Command<X>): Promise<X>;
  }
  export type IInferredCommandHandler<CommandType extends Command<unknown>> =
    CommandType extends Command<infer ResultType>
      ? ICommandHandler<CommandType, ResultType>
      : never;
}

export * from '@nestjs/cqrs';
