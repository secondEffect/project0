import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../index';

export const SignupService = () => {
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState({});
  const nav = useNavigate();

  const validateMap = {
    email: (email) => validateEmail(email),
    password: (password) => validatePassword(password),
    confirmPassword: (confirmPassword, password) =>
      validateConfirmPassword(confirmPassword, password),
    username: (username) => validateUsername(username),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let message;
    if (name !== 'confirmPassword') {
      message = validateMap[name]?.(value);
    } else if (name === 'confirmPassword') {
      message = validateMap[name]?.(value, userInfo?.password);
    }
    setUserInfo({ ...userInfo, [name]: value });
    setError({ ...error, [name]: message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isError(error)) return;
    authAPI
      .signUp(userInfo)
      .then((res) => alert(res.message))
      .then(nav('/signin'));
  };

  function checkEmail(e) {
    if (!userInfo.email) return alert('email을 입력 해주세요.');
    authAPI.checkEmail(userInfo.email).then((check) => {
      check.isOverlap
        ? alert('이미 가입된 이메일주소입니다.')
        : alert('사용 가능한 이메일주소입니다');
    });
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9][^!@#$%&*()]+@[a-zA-Z]+\.[a-zA-Z]{2}/;

    if (!emailRegex.test(email)) {
      return '이메일형식에 맞지 않습니다.';
    }
  }

  function validatePassword(password) {
    const passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*]).{8,16}/;

    if (!passwordRegex.test(password)) {
      return '비밀번호는 문자, 숫자, 특수문자를 포함한 8-16글자여야 합니다';
    }
  }

  function validateConfirmPassword(confirmPassword, password) {
    if (confirmPassword !== password) {
      return '비밀번호가 일치하지 않습니다.';
    }
  }

  function validateUsername(username) {
    if (username.trim() === '') {
      return '이름을 정확하게 입력해주세요.';
    }
  }

  function isError(error) {
    const { email, password, confirmPassword, username } = error;
    if (email || password || confirmPassword || username) {
      return true;
    }
    return false;
  }

  return { handleChange, handleSubmit, checkEmail, error };
};
