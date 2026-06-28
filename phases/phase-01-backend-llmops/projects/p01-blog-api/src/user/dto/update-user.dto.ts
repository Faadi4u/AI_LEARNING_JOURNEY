import { createZodDto } from "nestjs-zod";
import { UpdateUserSchema } from "../schema/update-user.schema";

export class UpdateUserDto extends createZodDto(UpdateUserSchema) {};



