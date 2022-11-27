import { Button, TextField } from '@mui/material';

import { SignupService } from '../service/SignUpService';

export const SignUp = () => {
  const { handleChange, handleSubmit, checkEmail, error } = SignupService();
  return (
    <div className='signup_container'>
      <form className='signup_form' onSubmit={handleSubmit}>
        <p>회원가입</p>
        <div>
          <TextField
            required
            name='email'
            label='email'
            variant='outlined'
            placeholder='user@google.com'
            error={error?.email ? true : false}
            helperText={error?.email}
            onChange={handleChange}
          />
          <Button onClick={checkEmail} variant='outlined'>
            중복확인
          </Button>
        </div>
        <TextField
          required
          type='password'
          name='password'
          label='비밀번호'
          variant='outlined'
          error={error.password ? true : false}
          helperText={error.password}
          onChange={handleChange}
        />
        <TextField
          required
          type='password'
          name='confirmPassword'
          label='비밀번호 확인'
          variant='outlined'
          error={error.confirmPassword ? true : false}
          helperText={error.confirmPassword}
          onChange={handleChange}
        />
        <TextField
          required
          name='username'
          label='이름'
          variant='outlined'
          error={error.username ? true : false}
          helperText={error.username}
          onChange={handleChange}
        />
        <Button type='submit' variant='outlined'>
          가입하기
        </Button>
      </form>
    </div>
  );
};
