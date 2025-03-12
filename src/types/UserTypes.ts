
export interface User {
    id: number,
    name: string,
}

export interface IUserRepository {
    createUser(user: User): Promise<User>
    findUser(): Promise<User[]>
}