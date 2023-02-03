import { QueryResult } from '@nestjs-architects/typed-cqrs';
import { QueryHandler, IInferredQueryHandler } from '@nestjs/cqrs';
import { SomeQuery } from './some-query';

@QueryHandler(SomeQuery)
export class SomeHandler implements IInferredQueryHandler<SomeQuery> {
  // try changing to :Promise<number> and return value of number -> error!
  async execute(query: SomeQuery): Promise<QueryResult<SomeQuery>> {
    return 'Hello';
  }
}
