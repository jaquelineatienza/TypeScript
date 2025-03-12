
import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/useService";
import { Router } from "express";
import { IUserRepository, User, } from "types/UserTypes";


export const router = Router();
const userRepository: IUserRepository = new UserRepository();
const userService: IUserRepository = new UserService(userRepository);
router.get("/get", async (req, res) => {
    const users = await userService.findUser()
    res.json(users)
})
router.post("/post", async (req, res) => {
    const newUser: User = req.body;

    const result = await userService.createUser(newUser)

    res.status(200).json(result)

})

