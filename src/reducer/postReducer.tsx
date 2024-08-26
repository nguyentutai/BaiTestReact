import { IPost } from "../types/IPost";

interface State {
  posts: IPost[];
}

type Action =
  | { type: "SET_POST"; payload: IPost[] }
  | { type: "DELETE_POST"; payload: number | string }
  | { type: "ADD_POST"; payload: IPost }
  | { type: "UPDATE_POST"; payload: IPost };

const postReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_POST":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((item: IPost) => item.id != action.payload),
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((item: IPost) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
