import BasicTemplate from '../../template/BasicTemplate';
import PostList from '../../components/PostList/PostList';

const MainPage = ({ isAuth, handleSignOutClick }) => {
  return (
    <BasicTemplate isAuth={isAuth} handleSignOutClick={handleSignOutClick}>
      <PostList />
      {/* <div>메인페이지</div> */}
    </BasicTemplate>
  );
};

export default MainPage;
