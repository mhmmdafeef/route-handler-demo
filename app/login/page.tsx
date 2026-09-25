
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8e8eb] px-4">
      <div className="w-full max-w-md rounded-lg bg-rose-100 p-8 shadow-md">
        
        <h1 className="mb-6 text-center text-2xl font-bold text-amber-600">
          Login
        </h1>

        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 
                         outline-none focus:border-blue-500 focus:ring-2 
                         focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 
                         outline-none focus:border-blue-500 focus:ring-2 
                         focus:ring-blue-200"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-amber-600 py-2.5 
                       font-medium text-white 
                       hover:bg-amber-700
                       focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}