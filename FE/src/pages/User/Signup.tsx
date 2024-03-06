import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../interface/user/signup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/actionUser";
import Message from "../../components/Action/Message/Message";
import { useNavigate } from 'react-router-dom';
import {  GoogleAuthProvider ,signInWithPopup,getAuth  } from "firebase/auth";
import { auth } from "./firebaseConfig";
type Props = object;
const Signup = (props: Props) => {  
  // Biến state hook để quản lý trường mật khẩu
  const [password, setPassword] = useState("");

  // Biến state hook để quản lý trường xác nhận mật khẩu
  const [confirmPassword, setConfirmPassword] = useState("");

  // Biến state hook để theo dõi xem mật khẩu và xác nhận mật khẩu có khớp nhau không
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<signup>();

  //  xử lý sự kiện để cập nhật trường mật khẩu
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsPasswordMatch(e.target.value === confirmPassword); // Kiểm tra xem mật khẩu có khớp không
  };

  // xử lý sự kiện để cập nhật trường xác nhận mật khẩu
  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setIsPasswordMatch(e.target.value === password); // Kiểm tra xem mật khẩu có khớp không
  };

  //  xử lý khi form được gửi (submit)
  const onSubmit: SubmitHandler<signup> = async (data: signup) => {
    try {
      if (password.length < 6) {
        Message('error', 'Mật khẩu phải có ít nhất 6 ký tự.');
        return;
      }
      if (password !== confirmPassword) {
        Message('error', 'Mật khẩu và xác nhận mật khẩu không khớp.');
        return;
      }
      const formData = {
        ...data,
        image_url: "https://bom.so/vOmSkN",
        password: password,
        confirmPassword: confirmPassword,
      };
      // Gọi hàm signUp và sử dụng await để đợi kết quả trả về
      await dispatch(signUp(formData) as never);
      Message('success', 'Đăng ký thành công !');
      navigate('/signin');
    } catch (error) {
      // Xảy ra lỗi trong quá trình đăng ký
      Message('error', 'Đăng ký thất bại !');
    }
  };
  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
  
      // The user information is available in the result.user property
      const userEmail = result.user.email;
      const userName = result.user.displayName;
      console.log("User Email:", userEmail);
      console.log("User Name:", userName);
  
      // Save user data to localStorage if they are not null
      if (userEmail !== null) {
        localStorage.setItem("userEmail", userEmail);
      }
      if (userName !== null) {
        localStorage.setItem("userName", userName);
      }
  
      // Get the access token from the credential
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      if (accessToken) {
        console.log("Access Token:", accessToken);
  
        // Save the access token to localStorage
        localStorage.setItem("accessToken", accessToken);
      }
  
      // Navigate to the home page
      navigate("/");
    } catch (error) {
      // Handle error if sign-in fails
      console.error("Sign-in error:", error);
    }
  };
  return (
    <div className="h-screen flex">
      <div className="hidden sm:flex w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Logo"
          className="w-max"
        />
      </div>
      <div className="flex w-full sm:w-1/2 justify-center items-center bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
          <img
            src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp"
            alt="Logo"
            className="mb-7 ml-32"
          />
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <svg
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5004 8C15.5004 9.65685 14.1572 11 12.5004 11C10.8435 11 9.50037 9.65685 9.50037 8C9.50037 6.34315 10.8435 5 12.5004 5C13.296 5 14.0591 5.31607 14.6217 5.87868C15.1843 6.44129 15.5004 7.20435 15.5004 8Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.0674 13H9.93336C9.61059 13.0004 9.29016 13.0548 8.98536 13.161C5.47535 14.372 8.81435 19 12.5004 19C16.1864 19 19.5254 14.372 16.0144 13.161C15.7099 13.0549 15.3898 13.0005 15.0674 13Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="name"
              {...register("name", { required: "This field is required." })}
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="Email Address"
              {...register("email", {
                required: "This field is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "This field is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
              })}
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 mb-2">{errors.password.message}</p>
          )}


          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
            />
          </div>
          {!isPasswordMatch && (
            <p className="text-red-500">Passwords do not match.</p>
          )}

          <button className="block w-full bg-indigo-600 mt-8 py-2 rounded-xl text-white font-semibold mb-4">
            Signup
          </button>
         
          <span className="text-sm ml-20">Have an account ?</span>
          <Link
            to="/signin"
            className="text-sm ml-2 hover:text-blue-500 cursor-pointer font-bold"
          >
            Signin
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;