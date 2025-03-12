
export interface User {
    id: string,
    name: string,
}

export interface IUserRepository {
    createUser(user: User): Promise<User>
    findUser(): Promise<User[]>
    findByID(id: string): Promise<User | null>
    updateUSer(id: string, User: Partial<User>): Promise<User | null>;
    deleteUser(id: string): Promise<void>
}