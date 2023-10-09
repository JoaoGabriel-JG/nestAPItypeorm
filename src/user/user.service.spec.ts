import {Test, TestingModule} from "@nestjs/testing";
import {UserService} from "./user.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import {getCustomRepositoryToken} from "@nestjs/typeorm";
import {UserEntity} from "./entity/user.entity";
import {userRepositoryMock} from "../testing/user-repository.mock";

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async() => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          UserService,
          userRepositoryMock,
      ]
    }).compile()

    userService = module.get<UserService>(UserService)
  })

  it('Validate the definition of the UserService', () => {
    expect(userService).toBeDefined()
  })

})