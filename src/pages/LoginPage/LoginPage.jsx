import BasicTemplate from '../../template/BasicTemplate';
import { auth, provider } from '../../firebase_setup/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = ({ isAuth, setIsAuth }) => {
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
      <div class="mt-20 relative text-gray-500 md:px-5 xl:px-20">
        <div class="rounded-xl bg-white shadow-xl">
          <div className="p-6 sm:p-16">
            <h1 class="mb-8 text-center text-2xl font-bold text-cyan-900 underline underline-offset-8">
              Login
            </h1>

            <div className="relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
              <div class="mt-16 grid space-y-4">
                <button
                  className="bg-white group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  onClick={signWithGoogle}
                >
                  <div class="relative flex items-center justify-center space-x-4">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      class="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span class="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicTemplate>
  );
};

export default LoginPage;
