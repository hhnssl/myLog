import React from 'react';
import { Link } from 'react-router-dom';

import { HiSearch, HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi';
import { HiPencilSquare } from 'react-icons/hi2';

const Header = ({ isAuth, handleSignOutClick }) => {
  return (
    <header className="flex justify-between items-center text-2xl mb-3 ">
      <div>
        <Link to="/" className="font-extrabold">
          MyLog.
        </Link>
      </div>
      <div className="text-3xl">
        {isAuth ? (
          <ul className="flex justify-between w-20">
            <li className="">
              <button>
                <HiSearch />
              </button>
            </li>
            <li className="">
              <Link to="/write">
                <button>
                  <HiPencilSquare />
                </button>
              </Link>
            </li>
            <li>
              <button onClick={handleSignOutClick}>
                <HiOutlineLogout />
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-between w-20">
            <li>
              <Link to="/login">
                <button>
                  <HiOutlineLogin />
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
