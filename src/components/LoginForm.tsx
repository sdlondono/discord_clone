function LoginForm() {
  return (
    <div className="bg-[#313338] w-1/2 p-5 rounded-md">
      <div className="text-center">
        <h1 className="text-lg text-[#F2F3F5] font-bold">Welcome back!</h1>
        <h3 className="text-sm text-[#B5BAC1]">
          We're so excited to see you again!
        </h3>
      </div>
      <div className="my-5">
        <label
          className="block text-[#B5BAC1] text-xs mb-2 font-bold uppercase"
          htmlFor="email"
        >
          Email or phone number
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 bg-[#1E1F22] rounded-sm text-white"
        />
      </div>
      <div>
        <label
          className="block text-[#B5BAC1] text-xs mb-2 font-bold uppercase"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 bg-[#1E1F22] rounded-sm text-white"
        />
      </div>
      <div className="mb-3">
        <a href="#" className="text-[#00A8FC] text-sm">
          Forgot your password?
        </a>
      </div>
      <button className="w-full bg-[#5865f2] text-white font-bold p-2 rounded-sm">
        Log in
      </button>
      <div className="text-[#B5BAC1] text-sm">
        Need an account?{' '}
        <a href="#" className="text-[#00A8FC]">
          Register
        </a>
      </div>
    </div>
  )
}

export default LoginForm
