import { ReactNode, createContext, useReducer } from "react";
import { IPost } from "../types/IPost";
import postReducer from "../reducer/postReducer";

interface Props {
  children: ReactNode;
}

export interface PostContextTypes {
  state: { posts: IPost[] };
  dispathPost: any;
}

export const PostContext = createContext({} as PostContextTypes);

export const PostProvider = (props: Props) => {
  const [state, dispathPost] = useReducer(postReducer, { posts: [] });

  return (
    <PostContext.Provider
      value={{
        state,
        dispathPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
