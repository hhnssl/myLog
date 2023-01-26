import { collection, getDocs } from 'firebase/firestore';
import { firestoreDB } from '../firebase_setup/firebase';

// 페이지가 로드되면 파이어베이스에서 모든 포스트 가져오기
const handleLoad = async () => {
  const querySnapshot = await getDocs(collection(firestoreDB, 'posts'));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
    // const data = doc.data();
    // console.log(data.postTitle, data.postContent, data.image);
  });
};

export default handleLoad;
