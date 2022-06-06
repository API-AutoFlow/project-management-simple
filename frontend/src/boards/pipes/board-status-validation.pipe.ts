import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (this.StatusOptions.indexOf(value) === -1) {
      throw new BadRequestException(`${value} is not State`);
    }

    return value;
  }
}
