# MyLog

**🔗 데모 URL : https://mylog-437d4.web.app/**

## 1. 개요
글을 업로드하고 다른 사람의 글을 확인할 수 있는 블로그 서비스입니다. 구글 회원가입 및 로그인으로 서비스를 이용할 수 있어 안정적이고 접근이 용이하도록 구성하였습니다. 로그인, 글 작성, 글 확인 기능을 제공합니다. 백엔드  서비스 구현의 부담을 줄이기 위해 Firebase를 사용하였습니다.


## 2. 기술 스택
- FrontEnd: React, HTML5, Tailwind CSS, JavaScript
- BackEnd: Firebase

## 3. UI 및 기능
**1. 메인 페이지**
<table>
    <tbody>
        <tr>
         <td>업로드 된 포스트가 없을 경우</td>
         <td>업로드 된 포스트가 있을 경우</td>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/97442475/215925913-8c6d58bc-fb5b-4f0b-8f0b-bfc657138149.png"></td>
            <td><img src="https://user-images.githubusercontent.com/97442475/215928165-1c5b4ebd-4c16-4f5e-a9e3-56b85f46b906.png"></td>
        </tr>
        <tr>
            <td>'포스트가 없습니다.' 라는 메세지가 출력됩니다.</td>
            <td>모든 포스트를 출력하고 포스트 작성자와 로그인한 사용자가 동일할 때 삭제 버튼이 표시됩니다.</td>
        </tr>
    </tbody>
</table>

<br>
<br>

**2. 로그인 페이지**
<table>
    <tbody>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/97442475/215926116-3f178ded-ff0e-4ed7-97b7-de4e0b8bf6ca.gif"></td>
        </tr>
        <tr>
            <td>Firebase의 Authentication 기능으로 구글 회원가입 및 로그인이 가능합니다.</td>
        </tr>
    </tbody>
</table>

<br>
<br>

**3. 포스트 작성 페이지**
<table>
    <tbody>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/97442475/215926127-b1f5c140-97a4-496c-ab5d-14c5330616ab.gif"></td>
        </tr>
        <tr>
            <td>포스트 업로드 시 Firebase의 Firestore DB와 Stroage에 포스트 내용과 이미지가 각각 실시간으로 업로드 됩니다.</td>
        </tr>
    </tbody>
</table>

<br>
<br>

**4. 상세 페이지**
<table>
    <tbody>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/97442475/215926141-75af6e31-45de-4f62-8629-33b09767c31d.gif"></td>
        </tr>
        <tr>
            <td>클릭된 해당 글의 내용이 출력됩니다.</td>
        </tr>
    </tbody>
</table>

<br>
<br>

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
 
 ----
 ## 5. 트러블 슈팅
 
 **1. 로그인 하지 않고 수동으로 '/write' 페이지로 이동하여 글 작성이 가능한 오류 발생**
 <br>
 <img src="https://user-images.githubusercontent.com/97442475/216506676-d68d3782-88e2-47ce-b997-fe85d0b14780.png  width="500" height="100%">
   <br>
  * 해결: useEffect 훅 함수를 이용하여 첫 렌더링에 로그인 여부를 담고 있는 state인 isAuth가 false 일 때, login 페이지로 이동하도록 수정함
```js
  useEffect(() => {
    if (!isAuth) navigate('/login');
  }, []);
```


 
