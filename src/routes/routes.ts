
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

// router.put("/put",async(req,res)=>{
//     const updateUSer:User = req.body;

//     const result = await userService.updateUSer()

router.get("/get:id", async (req, res) => {
    const users = await userService.findByID(req.params.id)
    res.json(users)
})

router.delete("/delete:id", async (req, res) => {
    const userDelete = await userService.deleteUser(req.params.id)

    if (!res.status(200)) {
        res.json({ msg: 'user not deleted' })
    }

    res.status(200).json(userDelete)
})

router.put("/put:id", async (req, res) => {
    const user = await userService.updateUSer(req.params.id, req.body)
    res.json(user)
})