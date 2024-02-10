import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();


// to commit
router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage("email must be valid"),
    body('password')
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage("password must be between 4 and 20 characters")
    ], 
    (req: Request, res: Response) => {
    const { email, password } = req.body;

});


export { router as signupRouter }