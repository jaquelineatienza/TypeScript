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
    updateUSer(id: string, User: Partial<User>): Promise<User | null> {
        return this.userRepository.updateUSer(id, User)
    }
    deleteUser(id: string): Promise<void> {
        return this.userRepository.deleteUser(id)
    }
    findByID(id: string): Promise<User | null> {
        return this.userRepository.findByID(id)
    }
}