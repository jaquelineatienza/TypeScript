import { IUserRepository, User } from "types/UserTypes";

export class UserRepository implements IUserRepository {
    private users: User[] = [];

    async createUser(user: User): Promise<User> {
        this.users.push(user)
        return user
    }
    async findUser(): Promise<User[]> {
        return this.users;
    }

}