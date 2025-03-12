import { IUserRepository, User } from "types/UserTypes";

export class UserService implements IUserRepository {

    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }


    async createUser(user: User): Promise<User> {
        return this.userRepository.createUser(user)
    }
    findUser(): Promise<User[]> {
        return this.userRepository.findUser()
    }
}