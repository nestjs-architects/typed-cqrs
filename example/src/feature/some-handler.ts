import { IQueryHandler, QueryHandler, QueryResult } from '@nestjs/cqrs';
import { SomeQuery } from './some-query';

@QueryHandler(SomeQuery)
export class SomeHandler implements IQueryHandler<SomeQuery> {
  // try changing to :Promise<number> and return value of number -> error!
  async execute(query: SomeQuery): Promise<QueryResult<SomeQuery>> {
    return 'Hello';
  }
}
