import React from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../../interface/user/signin';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IconA, Password } from '../../components/Icon/iconProject';
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/actionUser";
import Message from "../../components/Action/Message/Message";
import { useNavigate } from 'react-router-dom';
import {  GoogleAuthProvider ,signInWithPopup,getAuth  } from "firebase/auth";
import { auth } from "./firebaseConfig";
const Signin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signin>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<signin> = async (data: any) => {
    try {
      // Gọi hàm signUp và sử dụng await để đợi kết quả trả về
      await dispatch(signIn(data) as never);
      Message('success', 'Đăng nhập thành công !');
      navigate('/');
    } catch (error) {
      Message('error', 'Đăng nhập thất bại !');
    }

  }
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
    <div className="h-screen flex flex-col md:flex-row">
      <div className="hidden sm:flex w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Logo"
          className="w-max  object-cover"
        />
      </div>
      <div className="flex w-full sm:w-1/2 justify-center items-center bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
          <img
            src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp"
            alt="Logo"
            className="mb-7 ml-32"
          />
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
            <IconA></IconA>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'This field is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address.',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  className="pl-2 outline-none border-none w-80"
                  type="text"
                  placeholder="Email Address"
                />
              )}
            />

          </div>
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <Password></Password>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: 'This field is required.',
              }}
              render={({ field }) => (
                <input
                  {...field}
                  className="pl-2 outline-none border-none"
                  type="password"
                  placeholder="Password"
                />
              )}
            />
          </div>
          <button className="block w-full bg-indigo-600 mt-8 py-2 rounded-xl text-white font-semibold mb-4 ">Signin</button>
          <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-slate-100 hover:bg-slate-200 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 w-full mb-5" onClick={handleSignInWithGoogle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-3 ml-28"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />
              <path
                fill="#e53935"
                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />
              <path
                fill="#1565c0"
                d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />
            </svg>
            Google
          </button>
          <span className="text-sm ml-20">Don't have an account ?</span>
          <Link to="/signup" className="text-sm ml-2 hover:text-blue-500 cursor-pointer font-bold">Signup</Link>
        </form>
      </div>
    </div>
  );
};


export default Signin