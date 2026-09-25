export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-pink-50 p-8 shadow-md">
        
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign Up
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

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              id="first name"
              type="text"
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 
                         outline-none focus:border-blue-500 focus:ring-2 
                         focus:ring-blue-200"
            />
          </div>
 <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              id="Last name"
              type="text"
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 
                         outline-none focus:border-blue-500 focus:ring-2 
                         focus:ring-blue-200"
            />
          </div>
         

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-pink-400 py-2.5 
                       font-medium text-white 
                       hover:bg-pink-500
                       focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>



      </div>
    </div>
  );
}