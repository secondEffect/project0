type TUser = {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
};
const users: TUser[] = [
  {
    id: 1,
    email: 'test@gmail.com',
    password: 'abcd123!',
    confirmPassword: 'abcd123!',
    username: 'Tester',
  },
  {
    id: 2,
    email: 'test2@gmail.com',
    password: 'abcd123!',
    confirmPassword: 'abcd123!',
    username: 'Tester2',
  },
];

export const findByEmail = (email: any) => {
  const findUser = users.find((user) => user.email === email);

  return findUser;
};

export const signup = (userInfo: any) => {
  const { email, password, confirmPassword, username } = userInfo;
  const user: any = {
    id: 3,
    email,
    password,
    confirmPassword,
    username,
  };
  users.push(user);
  return findByEmail(email);
};
