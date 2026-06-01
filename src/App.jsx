import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className="min-h-screen flex bg-[#6E95FF]">

      {/* Left */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center text-white px-10">
        <h1 className="text-5xl font-bold mb-3">
          WELCOME TO NODETEAMM
        </h1>

        <p className="text-lg opacity-90">
          Login dan daftar dengan mudah
        </p>
      </div>

      {/* Right */}
      <div className="w-full md:w-[45%] bg-white md:rounded-l-[60px] rounded-t-[50px] md:rounded-t-none flex items-center justify-center p-8">

        <div className="w-full max-w-md space-y-8">
          <LoginForm />
          <SignUpForm />
        </div>

      </div>
    </div>
  );
}

export default App;