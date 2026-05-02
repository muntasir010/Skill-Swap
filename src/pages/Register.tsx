/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, Camera, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [imageLoading, setImageLoading] = useState(false);
  const navigate = useNavigate();
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const onSubmit = async (data: any) => {
    setImageLoading(true);
    let profileImage = "https://ui-avatars.com/api/?name=" + data.name; // Default image

    try {
      // 1. If user uploaded a photo, upload it to Cloudinary and get the URL
      if (data.photo && data.photo[0]) {
        const formData = new FormData();
        formData.append("file", data.photo[0]);
        formData.append("upload_preset", uploadPreset);// Dynamic upload preset

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            // Dynamic URL
            method: "POST",
            body: formData,
          },
        );

        const imgData = await res.json();
        profileImage = imgData.secure_url;
      }

      // 2. Send data to backend
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        image: profileImage,
      };

      await registerUser(userData).unwrap();
      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (err: any) {
      toast.error(err?.data?.message || "Registration failed");
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mt-2">Join SkillSwap and start sharing</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-indigo-600"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message as string}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-indigo-600"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-indigo-600"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Photo (Optional)
            </label>
            <div className="relative">
              <Camera className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register("photo")}
                type="file"
                accept="image/*"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none file:mr-4 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || imageLoading}
            className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
          >
            {isLoading || imageLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Register Now"
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
