"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatchUserDto = void 0;
const create_user_dto_1 = require("./create-user.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdatePatchUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdatePatchUserDto = UpdatePatchUserDto;
//# sourceMappingURL=update-patch-user.dto.js.map