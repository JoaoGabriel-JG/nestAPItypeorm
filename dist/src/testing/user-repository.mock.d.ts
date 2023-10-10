/// <reference types="jest" />
export declare const userRepositoryMock: {
    provide: string | Function;
    useValue: {
        exist: jest.Mock<any, any, any>;
        create: jest.Mock<any, any, any>;
        save: jest.Mock<any, any, any>;
        find: jest.Mock<any, any, any>;
        findOneBy: jest.Mock<any, any, any>;
        update: jest.Mock<any, any, any>;
        delete: jest.Mock<any, any, any>;
    };
};
