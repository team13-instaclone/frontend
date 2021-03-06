import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://withoh.shop/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
});

export const apis = {
  // baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
  // http://localhost:4000/ + 내가 작성한 url 즉 예시로
  // getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
  // get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

  //로그인
  logInAX: (user) => instance.post("/api/user/login", user),
  // logInAX: (user) => instance.post("/signup", user),

  //회원가입
  getAccountAX: (user) => instance.post("/api/user/signup", user),
  // getAccountAX: (user) => instance.post("/signup", user),

  // 회원가입 아이디 중복 체크
  getIdCheckAX: (username) => instance.post("/api/user/redunancy", username),

  //로그아웃
  logOutAX: () => instance.get("/api/user/logout"),
};
