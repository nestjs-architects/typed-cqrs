import { IQuery } from '@nestjs/cqrs';
import { resultType } from './symbols';

export class Query<T> implements IQuery {
  protected [resultType]!: T;
}

export type QueryResult<QueryT extends Query<unknown>> =
  QueryT extends Query<infer ResultT> ? ResultT : never;
