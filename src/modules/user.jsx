const SET_USER = "user/SET_USER";
const DEL_USER = "user/DEL_USER";

export const setUser = (token, name, id, email, description) => ({ type : SET_USER, token: token, name: name, id: id, email: email, description: description });
export const delUser = () => ({ type : DEL_USER })

// 초기값
const initialState = {
  token: "",
  name: "",
  id: 0,
  email: "",
  description: "",
  isLogin: false
};

export default function user(state = initialState, action) {
    switch(action.type) {
      case SET_USER :
        return {
          token: action.token,
          name: action.name,
          id: action.id,
          email: action.email,
          description: action.description,
          isLogin: true,
        };
      case DEL_USER :
        return {
          token: "",
          name: "",
          id: 0,
          isLogin: false,
        };
      default:
        return state;
    }
  }