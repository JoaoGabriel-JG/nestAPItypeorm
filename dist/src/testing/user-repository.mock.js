"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryMock = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entity/user.entity");
exports.userRepositoryMock = {
    provide: (0, typeorm_1.getRepositoryToken)(user_entity_1.UserEntity),
    useValue: {
        exist: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        find: jest.fn(),
        findOneBy: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    }
};
//# sourceMappingURL=user-repository.mock.js.map