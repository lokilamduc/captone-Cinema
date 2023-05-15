import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../../slices/userSlice";
import { Navigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//định nghĩa các xác thực cho thừng input
const schema = yup.object({
  taiKhoan: yup.string().required("tài khoản không được để trống"),
  matKhau: yup
    .string()
    .required("mật khẩu không được để trống")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      "Mật khẩu ít nhất 7 kí tự, phải có 1 chữ hoa, 1 chữ thường và 1 số"
    ),
});
function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    //khai báo các giá trị khởi tạo cho các input
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
    //khai báo schema validation bằng yup
    resolver: yupResolver(schema),
  });

  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [SearchParams, setSearchParams] = useSearchParams();
  console.log(SearchParams.get("redirectUrl"));

  const onSubmit = (values) => {
    dispatch(signin(values));
  };

  const onError = (errors) => {
    console.log(errors);
  };

  //kiểm tra nếu có thông tin user => đã đăng nhập => điều hướng về trang Home
  if (user) {
    const url = SearchParams.get("redirectUrl") || "/";
    return <Navigate to={url} />;
  }

  return (
    <div>
      <h1>Đăng Nhập</h1>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input
            type="text"
            placeholder="Tài Khoản"
            {...register("taiKhoan")}

            // {...register("taiKhoan", {
            //   required: {
            //     value: true,
            //     message: "Tài khoản không được để trống",
            //   },
            // })}
          />
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("matKhau")}

            // {...register("matKhau", {
            //   required: {
            //     value: true,
            //     message: "Mật Khẩu không được để trống",
            //   },

            //   pattern: {
            //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            //     message:
            //       "Mật khẩu ít nhất 8 kí tự, phải có 1 chữ hoa, 1 chữ thường và 1 số",
            //   },
            // })}
          />
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>

        {/* hiện thị lỗi server trả về. VD: trường hợp sai tài khoản hoặc mật khẩu */}
        {error && <p>{error}</p>}
        <button disabled={isLoading}>Đăng Nhập</button>
      </form>
    </div>
  );
}

export default Signin;
