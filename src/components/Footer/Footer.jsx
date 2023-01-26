import { GoMarkGithub } from 'react-icons/go';
import { CgCopyright } from 'react-icons/cg';

const Footer = () => {
  return (
    <footer className="my-10 flex flex-col items-center ">
      <p className="mb-4">
        <a
          className="flex items-center"
          href="https://github.com/hhnssl"
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub className=" mr-3" />
          <span>hhnssl.</span>
        </a>
      </p>
      <p className="flex items-center">
        <CgCopyright className=" mr-3" />
        <span>All rigths reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
