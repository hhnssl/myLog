// 페이지의 공통 요소 템플릿
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const BasicTemplate = ({ children, isAuth, handleSignOutClick }) => {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <section className="mt-5 mb-5 border-b-2 border-stone-300/50 font-mono ">
        <Header isAuth={isAuth} handleSignOutClick={handleSignOutClick} />
      </section>

      <main>{children}</main>

      <section className="font-serif">
        <Footer />
      </section>
    </div>
  );
};

export default BasicTemplate;
