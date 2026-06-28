import { createZodDto } from "nestjs-zod";
import { createUserSchema } from "../schema/create-user.schema";

export class CreateUserDto extends createZodDto(createUserSchema) {};


