import { useEffect, useState } from 'react';
// import handleLoad from '../../handles/handleLoad';

import { collection, getDocs } from 'firebase/firestore';
import { firestoreDB } from '../../firebase_setup/firebase';

const PostList = () => {
  const [postList, setPostList] = useState([{}]);

  useEffect(() => {
    // 페이지가 로드되면 파이어베이스에서 모든 포스트 가져오기
    const handleLoad = async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, 'posts'));
      // const temp = querySnapshot.docs.map((doc) => {
      //   const post = {
      //     image: doc.image,
      //     postTitle: doc.postTitle,
      //     postContent: doc.postContent,
      //   };

      //   return post;
      // });
      // setPostList(temp);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        const data = doc.data();
        setPostList((prevState) => [
          ...prevState,
          {
            image: data.image,
            postTitle: data.postTitle,
            postContent: data.postContent,
          },
        ]);
      });
    };

    handleLoad();
    console.log(postList);
    console.log(postList);
  }, []);

  return (
    <>
      <div>
        {postList.map((e) => (
          <div>
            <div>제목: {e.postTitle}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
