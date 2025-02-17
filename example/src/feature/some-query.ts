import { Query } from "@nestjs/cqrs";

export class SomeQuery extends Query<string> {}
