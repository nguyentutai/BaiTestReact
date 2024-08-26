import { useForm } from "react-hook-form";
import { IUser } from "../../../types/IUser";
import { instance } from "../../../services/apiUrl";
import { useAuth } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm<IUser>();
  const nav = useNavigate();
  const { login } = useAuth();
  const onSubmit = async (user: IUser) => {
    const { data } = await instance.post("/auth/login", user);
    if (data) {
      alert("Đăng nhập thành công");
      nav("/admin");
      localStorage.setItem("accessToken", data.accessToken);
      login(data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    }
  };
  return (
    <>
      <div className="container-main">
        <div className="py-14">
          <img src="../public/logo.png" alt="" />
        </div>
        <div className="w-[407px] mx-auto">
          <h3 className="text-[64px] text-center py-10">Sign In</h3>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block pb-3">Username</label>
              <input
                type="text"
                className="block w-full border border-black outline-none py-2 px-4 rounded-md"
                placeholder="Nhập username "
                {...register("username")}
              />
              <button className="bg-[#9059DB] w-full rounded-xl py-1.5 mt-4 text-white">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
