import { collection, addDoc } from 'firebase/firestore';
import { firestoreDB } from '../firebase_setup/firebase';

// collection과 document 만들기
const handleSubmit = async (post, image) => {
  try {
    const docRef = await addDoc(collection(firestoreDB, 'posts'), {
      postTitle: post.postTitle,
      image: image.name,
      postContent: post.postContent,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default handleSubmit;
