import { Route, Routes } from "react-router-dom";
import ClientLayout from "./layout/ClientLayout";
import HomePage from "./pages/User/Home/HomePage";
import Login from "./pages/User/Auth/Login";
import AdminLayout from "./layout/AdminLayout";
import ListPost from "./pages/Admin/Posts/ListPost";
import PostForm from "./pages/Admin/Posts/PostForm";
import { PostProvider } from "./contexts/PostProvider";
import { LoginProvider } from "./contexts/AuthProvider";
import PrivateRouterAdmin from "./middlewares/PrivateRouterAdmin";

const App = () => {
  return (
    <LoginProvider>
      <PostProvider>
        <Routes>
          <Route element={<ClientLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/admin" element={<PrivateRouterAdmin />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<ListPost />} />
              <Route path="post/add" element={<PostForm />} />
              <Route path="post/edit/:id" element={<PostForm />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </PostProvider>
    </LoginProvider>
  );
};

export default App;
