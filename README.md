# @nestjs-architects/typed-cqrs

[![version](https://img.shields.io/npm/v/@nestjs-architects/typed-cqrs.svg)](https://www.npmjs.com/package/@nestjs-architects/typed-cqrs)
[![downloads](https://img.shields.io/npm/dt/@nestjs-architects/typed-cqrs.svg)](https://www.npmjs.com/package/@nestjs-architects/typed-cqrs)

Tired of hand-typing types for NestJS CQRS package? We got you covered!

# ⚠️ This library is now deprecated!
All features provided by `@nestjs-architects/typed-cqrs` are now available natively in [@nestjs/cqrs](https://github.com/nestjs/cqrs) starting from NestJS 11.

This library will no longer be maintained or developed, but it will still work with NestJS@11 and old versions.

## Migration Guide
Migrating to `@nestjs/cqrs` is simple:

- Replace imports from `@nestjs-architects/typed-cqrs` to `@nestjs/cqrs`.
- Drop `Inferred` from `IInferredQueryHandler` and `IInferredCommandHandler` – `IQueryHandler` and `ICommandHandler` now support its extensions.
- Command, Query, CommandResult, and QueryResult are already included in @nestjs/cqrs.
- A quick find & replace in your codebase is all you need!

# Usage

First install base `@nestjs/cqrs` package.

```sh
$ npm i @nestjs/cqrs
```

All you need to do, is to extend your query with type of expected response.

```typescript
import { Query } from '@nestjs-architects/typed-cqrs';

export class GetProfileQuery extends Query<ResultType> {}
```

# Profit

Now, when implementing handler, you get all type completion & safety!

![showcase-handler](typed-handler.gif)

```typescript
import { IInferredQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetProfileQuery)
export class GetProfileHandler implements IInferredQueryHandler<GetProfileQuery> {}
```

As well as, results are correctly typed as well!
![showcase-handler](typed-outcome.gif)
