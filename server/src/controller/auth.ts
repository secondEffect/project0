import { Request, Response } from 'express';
import * as AuthRepository from '../data/auth';

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await AuthRepository.findByEmail(email);
  res.status(201).json(user);
};

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password, confirmPassword, username } = req.body;
  const user = await AuthRepository.signup({
    email,
    password,
    confirmPassword,
    username,
  });
  res.status(201).json({ user });
};

export const me = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ msg: 'me' });
};
