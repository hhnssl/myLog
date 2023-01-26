import BasicTemplate from '../../template/BasicTemplate';
import { auth, provider } from '../../firebase_setup/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = ({ isAuth, setIsAuth }) => {
  // console.log('login');

  const navigate = useNavigate();

  const signWithGoogle = () => {
    // 팝업창으로 로그인 하기
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem('isAuth', true);
      // console.log(auth);
      // 인증 완료로 바꾸기
      setIsAuth(true);
      // 메인페이지로 이동
      navigate('/');
    });
  };

  return (
    <BasicTemplate isAuth={isAuth}>
      {/* {console.log('login return')} */}
      <div>
        <h1>구글 로그인</h1>
        <button onClick={signWithGoogle}>Google 로그인</button>
      </div>
    </BasicTemplate>
  );
};

export default LoginPage;
