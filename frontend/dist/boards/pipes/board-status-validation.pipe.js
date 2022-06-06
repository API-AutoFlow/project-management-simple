"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const boards_status_enum_1 = require("../boards-status.enum");
class BoardStatusValidationPipe {
    constructor() {
        this.StatusOptions = [boards_status_enum_1.BoardStatus.PRIVATE, boards_status_enum_1.BoardStatus.PUBLIC];
    }
    transform(value) {
        value = value.toUpperCase();
        if (this.StatusOptions.indexOf(value) === -1) {
            throw new common_1.BadRequestException(`${value} is not State`);
        }
        return value;
    }
}
exports.BoardStatusValidationPipe = BoardStatusValidationPipe;
//# sourceMappingURL=board-status-validation.pipe.js.map