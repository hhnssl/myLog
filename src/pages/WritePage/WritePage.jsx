// 글을 작성하고 파이어베이스에 글을 전송하는 페이지
import { auth, firestoreDB } from '../../firebase_setup/firebase';
import { collection } from 'firebase/firestore';
import { useState, useRef } from 'react';
import BasicTemplate from '../../template/BasicTemplate';
import handleSubmit from '../../handles/handleSubmit';
// import handleImageUpload from '../../handles/handleFileUpload';
import { useNavigate } from 'react-router-dom';
import { HiPhotograph } from 'react-icons/hi';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase_setup/firebase';

const WritePage = ({ isAuth, handleSignOutClick }) => {
  const navigate = useNavigate();

  // const postInputRef = useRef([]);
  const [file, setFile] = useState();
  const [postInputState, setPostInputState] = useState({
    postTitle: '',
    postContent: '',
  });

  const { postTitle, postContent } = postInputState;

  const onChange = (e) => {
    const { value, name } = e.target;

    setPostInputState({
      ...postInputState,
      [name]: value,
    });
  };

  // 파일 업로드 전 보관
  const handleChangeFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const uploadToFirebase = () => {
    //
    const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
    //
  };

  const submitHandler = (e) => {
    e.preventDefault();
    uploadToFirebase();

    handleSubmit(postInputState, file, navigate);

    // postInputRef.current.forEach((e) => (e.value = ''));
  };

  return (
    <BasicTemplate isAuth={isAuth} handleSignOutClick={handleSignOutClick}>
      <section>
        <form className="flex flex-col items-center" onSubmit={submitHandler}>
          <label className="sr-only" htmlFor="postTitle">
            글 제목
          </label>
          <input
            className="p-3 mb-4 w-full rounded-lg border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"
            id="postTitle"
            name="postTitle"
            // ref={(elem) => (postInputRef.current[0] = elem)}
            value={postTitle}
            onChange={onChange}
            type="text"
            placeholder="제목을 입력하세요"
          />
          <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
            <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
              <label
                className="flex items-center text-3xl text-slate-600"
                htmlFor="postImage"
              >
                <HiPhotograph />
                <span className="text-sm ml-2">사진 첨부하기</span>
              </label>
              <input
                id="postImage"
                name="postImage"
                className="hidden"
                type="file"
                accept="/image/*"
                // ref={(elem) => (postInputRef.current[1] = elem)}
                // value={postImage}
                onChange={handleChangeFile}
              />
            </div>
            {/* <div>{file && `${file.name} - ${file.type}`}</div> */}

            <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
              <label className="sr-only" htmlFor="postContent">
                게시글 작성하기
              </label>
              <textarea
                className="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                rows="20"
                name="postContent"
                id="postContent"
                placeholder="당신의 이야기를 적어보세요..."
                // ref={(elem) => (postInputRef.current[2] = elem)}
                value={postContent}
                onChange={onChange}
              ></textarea>
            </div>
          </div>

          <button
            className="mt-5 px-5 py-2.5 text-sm font-medium  text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            type="submit"
          >
            저장하기
          </button>
        </form>
      </section>
    </BasicTemplate>
  );
};

export default WritePage;
