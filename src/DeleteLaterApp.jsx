import { useState } from 'react';
import { storage } from './firebase_setup/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function DeleteLaterApp() {
  // State to store uploaded file
  const [file, setFile] = useState(''); // progress

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
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
  };
  return (
    <div>
      <input type="file" onChange={handleChange} accept="/image/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
    </div>
  );
}
export default DeleteLaterApp;
