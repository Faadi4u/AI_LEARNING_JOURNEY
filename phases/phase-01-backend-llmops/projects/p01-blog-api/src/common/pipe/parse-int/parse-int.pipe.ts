import { ArgumentMetadata, ForbiddenException, Injectable, PipeTransform, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsed = parseInt(value)
    if(isNaN(parsed)) throw new UnauthorizedException(`${parsed} is not a valid number`);
    return parsed;
  }
}
