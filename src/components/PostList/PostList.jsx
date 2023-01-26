import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestoreDB } from '../../firebase_setup/firebase';

const PostList = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  // 페이지가 로드되면 파이어베이스에서 모든 포스트 가져오기
  const handleLoad = async () => {
    setLoading(false);
    const data = await getDocs(collection(firestoreDB, 'posts'));
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(true);
  };

  // 포스트 삭제
  const handleDeletePostClick = async (postId) => {
    //  클릭된 포스트 선택
    const postDoc = doc(firestoreDB, 'posts', postId);
    console.log(postDoc);
    await deleteDoc(postDoc);

    // 삭제 후 다시 포스트 로딩
    handleLoad();
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <ul>
        {postList.length === 0 ? (
          <span>포스트가 없습니다.</span>
        ) : (
          postList.map((post) => (
            <li key={post.id}>
              <span>제목: {post.postTitle}</span>
              <img src={post.image} alt="" />
              <p>{post.image}</p>
              <p>{post.postContent}</p>
              <div>{post.author.name}</div>

              {/* 로그인한 작성자의 글일 때만 삭제버튼 띄우기 */}
              {console.log('post.author.id', post.author.id)}
              {console.log('auth.currentUser.uid', auth.currentUser.uid)}
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={() => handleDeletePostClick(post.id)}>
                  삭제
                </button>
              )}
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default PostList;
