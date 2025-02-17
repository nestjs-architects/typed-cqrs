import { Command } from "@nestjs/cqrs";

export class SomeCommand extends Command<string> {}
