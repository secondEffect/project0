import { TextField, Button } from '@mui/material';

export const SignIn = () => {
  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='signin_container'>
        <form className='signin_form' onSubmit={handleSubmit}>
          <p>로그인</p>
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
          <Button type='submit' variant='outlined'>
            로그인
          </Button>
        </form>
      </div>
    </>
  );
};
