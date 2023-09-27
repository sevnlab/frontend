import React from 'react';
import { Link } from "react-router-dom";
import './App.css';



function App() {
  return (
      <div>
          <h1>MainPage</h1>
          <nav>
              {/*Link 태그의 to 속성은 index.js에서 설정해둔 url의 component가 보여지게 한다.*/}
              {/*to 속성에 index.js에서 설정한 path값을 넣어주면 됨*/}
              <Link to="/signIn">로그인</Link> |{" "}
              <Link to="/signUp">회원가입</Link>
          </nav>
      </div>
  );
}

export default App;
