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
      <h2 className="sr-only">포스트 목록</h2>
      <ul className="flex flex-wrap">
        {postList.length === 0 ? (
          <li>포스트가 없습니다.</li>
        ) : (
          postList.map((post) => (
            <li className="w-1/4 p-3 " key={post.id}>
              <div className="h-[400px] w-full rounded-lg shadow-md lg:max-w-sm bg-white overflow-hidden relative ">
                <img
                  className="mb-4 object-cover w-full h-48"
                  src="https://firebasestorage.googleapis.com/v0/b/mylog-437d4.appspot.com/o/files%2F%EC%A6%9D%EB%AA%85-removebg-preview.png?alt=media&token=f39f25f7-9fda-4706-9e50-6059b3947c9b"
                  alt=""
                />
                <div className=" p-4 flex flex-col justify-between">
                  <strong className="mb-2 truncate block text-xl font-semibold ">
                    {post.postTitle}
                  </strong>
                  <p className="break-words line-clamp-3 mb-2 leading-normal text-zinc-500 text-sm">
                    {post.postContent}
                  </p>
                  {/* <div className=" flex absolute bottom-0 left-0"> */}
                  <span className="text-xs absolute bottom-0 left-0 m-4 pb-3">
                    by {post.author.name}.
                  </span>
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow  absolute bottom-0 right-0 m-4"
                      onClick={() => handleDeletePostClick(post.id)}
                    >
                      삭제
                    </button>
                  )}
                  {/* </div> */}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default PostList;
