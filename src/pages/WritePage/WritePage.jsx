// 글을 작성하고 파이어베이스에 글을 전송하는 페이지
import { auth, firestoreDB } from '../../firebase_setup/firebase';
import { collection } from 'firebase/firestore';
import { useState, useRef } from 'react';
import BasicTemplate from '../../template/BasicTemplate';
import handleSubmit from '../../handles/handleSubmit';
// import handleImageUpload from '../../handles/handleFileUpload';
import { useNavigate } from 'react-router-dom';

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
        <form
          className="border-solid border-2 border-indigo-600"
          onSubmit={submitHandler}
        >
          <label htmlFor="postTitle"></label>
          <input
            className="border-solid border-2 border-indigo-600"
            id="postTitle"
            name="postTitle"
            // ref={(elem) => (postInputRef.current[0] = elem)}
            value={postTitle}
            onChange={onChange}
            type="text"
            placeholder="제목을 입력하세요"
          />

          <label htmlFor="postImage"></label>
          <input
            id="postImage"
            name="postImage"
            className="border-solid border-2 border-indigo-600"
            type="file"
            accept="/image/*"
            // ref={(elem) => (postInputRef.current[1] = elem)}
            // value={postImage}
            onChange={handleChangeFile}
          />
          <div>{file && `${file.name} - ${file.type}`}</div>

          <label htmlFor="postContent"></label>
          <textarea
            className="border-solid border-2 border-indigo-600"
            name="postContent"
            id="postContent"
            placeholder="당신의 이야기를 적어보세요..."
            // ref={(elem) => (postInputRef.current[2] = elem)}
            value={postContent}
            onChange={onChange}
          ></textarea>

          <button className="" type="submit">
            저장하기
          </button>
        </form>
      </section>
    </BasicTemplate>
  );
};

export default WritePage;
