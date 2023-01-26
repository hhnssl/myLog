import BasicTemplate from '../../template/BasicTemplate';

const ViewPage = ({ isAuth, handleSignOutClick }) => {
  return (
    <BasicTemplate
      isAuth={isAuth}
      handleSignOutClick={handleSignOutClick}
    ></BasicTemplate>
  );
};

export default ViewPage;
