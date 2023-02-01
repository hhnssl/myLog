# MyLog

**🔗 데모 URL : https://mylog-437d4.web.app/**

## 1. 개요
글을 업로드하고 다른 사람의 글을 확인할 수 있는 블로그 서비스입니다. 구글 회원가입 및 로그인으로 서비스를 이용할 수 있어 안정적이고 접근이 용이하도록 구성하였습니다. 로그인, 글 작성, 글 확인 기능을 제공합니다. 백엔드  서비스 구현의 부담을 줄이기 위해 Firebase를 사용하였습니다.


## 2. 기술 스택
- FrontEnd: React, HTML5, Tailwind CSS, JavaScript
- BackEnd: Firebase

## 3. UI 및 기능
**1. 메인 페이지**

![메인 페이지](https://user-images.githubusercontent.com/97442475/215925913-8c6d58bc-fb5b-4f0b-8f0b-bfc657138149.png)
- 업로드 된 포스트가 없을 경우 '포스트가 없습니다.' 라는 메세지가 출력됩니다.
<br>

![image](https://user-images.githubusercontent.com/97442475/215928165-1c5b4ebd-4c16-4f5e-a9e3-56b85f46b906.png)
- 업로드 된 포스트가 있을 경우 모든 포스트를 보여줍니다. 
- 포스트 작성자와 로그인한 사용자가 동일할 때만 삭제 버튼이 표시됩니다.

**2. 로그인 페이지**

![로그인 페이지](https://user-images.githubusercontent.com/97442475/215926116-3f178ded-ff0e-4ed7-97b7-de4e0b8bf6ca.gif)
- Firebase의 Authentication 기능으로 구글 회원가입 및 로그인이 가능합니다.

**3. 포스트 작성 페이지**

![실시간 업로드](https://user-images.githubusercontent.com/97442475/215926127-b1f5c140-97a4-496c-ab5d-14c5330616ab.gif)
- 포스트 업로드 시 Firebase의 Firestore DB와 Stroage에 포스트 내용과 이미지가 각각 실시간으로 업로드 됩니다.

**4. 상세 페이지**

![상세 페이지](https://user-images.githubusercontent.com/97442475/215926141-75af6e31-45de-4f62-8629-33b09767c31d.gif)
- 클릭된 해당 글의 내용이 출력됩니다.

## 4. 폴더 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂Footer
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂Post
 ┃ ┃ ┗ 📜Post.jsx
 ┃ ┗ 📂PostList
 ┃ ┃ ┗ 📜PostList.jsx
 ┣ 📂firebase_setup
 ┃ ┗ 📜firebase.js
 ┣ 📂handles
 ┃ ┗ 📜handleSubmit.js
 ┣ 📂pages
 ┃ ┣ 📂LoginPage
 ┃ ┃ ┗ 📜LoginPage.jsx
 ┃ ┣ 📂MainPage
 ┃ ┃ ┗ 📜MainPage.jsx
 ┃ ┣ 📂ViewPage
 ┃ ┃ ┗ 📜ViewPage.jsx
 ┃ ┗ 📂WritePage
 ┃ ┃ ┗ 📜WritePage.jsx
 ┣ 📂plugins
 ┣ 📂template
 ┃ ┗ 📜BasicTemplate.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜index.js
 ```
