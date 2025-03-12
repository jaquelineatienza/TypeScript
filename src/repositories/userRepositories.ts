import { UserModel } from "@models/UserModels";
import { IUserRepository, User } from "types/UserTypes";

export class UserRepository implements IUserRepository {


    async createUser(user: User): Promise<User> {
        const newUser = new UserModel(user)
        return await newUser.save()
    }
    async findUser(): Promise<User[]> {
        return await UserModel.find().exec()
    }
    async updateUSer(id: string, User: Partial<User>): Promise<User | null> {
        return await UserModel.findByIdAndUpdate(id, User, { new: true })
    }
    async deleteUser(id: string): Promise<void> {
        const deleted = await UserModel.findByIdAndDelete(id)
    }
    async findByID(id: string): Promise<User | null> {
        return await UserModel.findById(id).exec()
    }

}