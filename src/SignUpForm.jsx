function SignUpForm() {
  return (
    <div className="space-y-4 pt-8">

      <h2 className="text-3xl font-bold text-[#4B72D6]">
        Sign Up
      </h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full bg-gray-100 p-4 rounded-xl outline-none"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full bg-gray-100 p-4 rounded-xl outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full bg-gray-100 p-4 rounded-xl outline-none"
      />

      <button
        className="w-full bg-[#4B72D6] text-white py-4 rounded-xl shadow-lg hover:scale-105 duration-300"
      >
        Register
      </button>
    </div>
  );
}

export default SignUpForm;