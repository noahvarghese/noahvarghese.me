import express, { Request, Response } from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import User from "../../../models/users";
import validator from "validator";

const router = express.Router();

router.post("/login", passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/" }), (_: Request, res: Response) => {
    res.sendStatus(200);
});

// we dont want signup as it is only i that will use the backend
// router.post("/signup", async (req: Request, res: Response) => {
//     if (validator.isEmail(req.body.email)) {
//         User.findOne(req.body, async (err: any, user: any) => {
//             if (err) {
//                 res.sendStatus(400);
//             }
//             if (user) {
//                 res.status(200);
//                 res.send({ message: "Email already registered." });
//             }
//             else {
//                 const hash = bcrypt.hashSync(req.body.password, 10);
//                 const user = await User.create({ ...req.body, hash });
//                 await user.save();
//                 res.sendStatus(200);
//             }
//         });
//     }
//     else {
//         res.status(400);
//         res.send({ message: "Invalid email." });
//     }
// });

export default router;
