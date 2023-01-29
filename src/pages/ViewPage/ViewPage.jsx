import BasicTemplate from '../../template/BasicTemplate';
import { useLocation } from 'react-router-dom';
import Post from '../../components/Post/Post';

const ViewPage = ({ isAuth, handleSignOutClick }) => {
  const location = useLocation();

  return (
    <BasicTemplate isAuth={isAuth} handleSignOutClick={handleSignOutClick}>
      <Post post={location.state.post} />
    </BasicTemplate>
  );
};

export default ViewPage;
