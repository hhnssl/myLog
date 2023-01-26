import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestoreDB } from '../../firebase_setup/firebase';

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  // 페이지가 로드되면 파이어베이스에서 모든 포스트 가져오기
  const handleLoad = async () => {
    setLoading(false);
    const data = await getDocs(collection(firestoreDB, 'posts'));
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(true);
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
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default PostList;
