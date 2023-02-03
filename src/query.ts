import { IQuery } from '@nestjs/cqrs';

export class Query<T> implements IQuery {
  resultType$f9fbca36!: T;
}

export type QueryResult<QueryT extends Query<unknown>> = QueryT extends Query<infer ResultT>
  ? ResultT
  : never;
