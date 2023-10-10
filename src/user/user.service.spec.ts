import {Test, TestingModule} from "@nestjs/testing";
import {UserService} from "./user.service";
import {userRepositoryMock} from "../testing/user-repository.mock";
import {CreateUserDto} from "./DTO/create-user.dto";
import {Role} from "../enums/role.enum";
import {UserEntity} from "./entity/user.entity";

const userEntityList: UserEntity[] = [{
    name: 'Leo',
    email: 'leo@gmail.com',
    password: '$2b$10$Fzo.aWDrrbQTxqh2eP809u9k7AgKpieKvrXUt77fRgHkOpfX1DoOu',
    role: Role.Admin,
    birthAt: new Date('2000-01-04'),
    id: 1
}]

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

  describe('Create', () => {
    it('Should create', async () => {\
      const data: CreateUserDto = {
        birthAt: '2002-01-01',
        email: 'joao@gmail.com',
        name: 'Joao',
        password: '123@CincoSeis',
        role: Role.User,
      }

      const result = await userService.create(data)

      expect(result).toEqual()
    })

  })
  describe('Read', () => {})
  describe('Update', () => {})
  describe('Delete', () => {})
})