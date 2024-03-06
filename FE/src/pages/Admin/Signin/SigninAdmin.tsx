import { useDispatch } from "react-redux";
import { signin } from "../../../interface/user/signin";
import { useNavigate } from 'react-router-dom';
import { signIn } from "../../../store/actions/actionUser";
import { SubmitHandler, useForm } from "react-hook-form";
import Message from "../../../components/Action/Message/Message";

const SigninAdmin = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<signin>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<signin> = async (data: any) => {
        try {
            console.log(data);

            // Gọi hàm signIn và sử dụng await để đợi kết quả trả về
            await dispatch(signIn(data) as never);
            Message('success', 'Đăng nhập thành công !');
            navigate('/admin');
        } catch (error) {
            Message('error', 'Đăng nhập thất bại !');
        }
    };

    return (
        <div className="font-mono bg-gray-400 mt-20">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover object-contain rounded-l-lg"
                            style={{ backgroundImage: "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')", }}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Welcome Back Admin!</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        {...register('email', {
                                            required: true, pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "The email address is not in the correct format"
                                            }
                                        })}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        placeholder="Email"
                                    />
                                    {errors.email?.type === "required" && <small id="emailHelp" className="text-xs italic text-red-500">Email field is required</small>}
                                    {errors.email?.type === "pattern" && <small id="emailHelp" className="text-xs italic text-red-500">{errors.email.message}</small>}
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        {...register('password', {
                                            required: true, minLength: {
                                                value: 6,
                                                message: "Passwords must be at least 6 characters"
                                            }
                                        })}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                    {errors.password?.type === "required" && <small id="emailHelp" className="text-xs italic text-red-500">Password field is required</small>}
                                    {errors.password?.type === "minLength" && <small id="emailHelp" className="text-xs italic text-red-500">{errors.password.message}</small>}
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit" // Change "button" to "submit"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninAdmin;