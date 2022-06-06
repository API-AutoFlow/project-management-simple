import { PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards-status.enum';
export declare class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: BoardStatus[];
    transform(value: any): any;
}
