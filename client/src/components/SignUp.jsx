import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { authService } from '..';

export const SignUp = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    isError(userInfo);
    authService.signUp().then((data) => console.log(data));
  };

  function checkEmail(email) {
    // data request => checkEmail
    return;
  }

  function isError(userInfo) {
    const { email, password, confirmPassword, username } = userInfo;
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9][^!@#$%&*()]+@[a-zA-Z]+.[a-zA-Z]+/;
    const passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*]).{8,16}/;

    if (!emailRegex.test(email)) {
      errors.email = '이메일 양식이 맞지 안습니다.';
    }
    // TODO:
    // if(checkEmail()){
    // errors.email = '이미 가입된 이메일 입니다'
    // }
    if (password !== confirmPassword) {
      errors.password = '비밀번호가 일치하지 않습니다.';
    }

    if (!passwordRegex.test(password)) {
      errors.password =
        '비밀번호는 문자, 숫자, 특수문자를 포함한 8-16글자여야 합니다';
    }

    return errors;
  }

  return (
    <>
      <div className='signin_container'>
        <form className='signin_form' onSubmit={handleSubmit} action=''>
          <p>회원가입</p>
          <TextField
            required
            name='email'
            autoComplete='username'
            label='email'
            variant='outlined'
            placeholder='user@google.com'
            onChange={handleChange}
          />
          <TextField
            required
            type='password'
            name='password'
            autoComplete='new-password'
            label='비밀번호'
            variant='outlined'
            onChange={handleChange}
          />
          <TextField
            required
            type='password'
            name='confirmPassword'
            autoComplete='new-password'
            label='비밀번호 확인'
            variant='outlined'
            onChange={handleChange}
          />
          <TextField
            required
            name='username'
            label='이름'
            variant='outlined'
            onChange={handleChange}
          />
          <Button type='submit' variant='outlined'>
            가입하기
          </Button>
        </form>
      </div>
    </>
  );
};
