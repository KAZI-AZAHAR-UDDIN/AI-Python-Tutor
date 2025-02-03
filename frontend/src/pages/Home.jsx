import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white text-center px-6">
      <h1 className="text-5xl font-extrabold font-playful text-yellow-300 drop-shadow-lg">
        🎉 Welcome to AI Python Tutor! 🐍
      </h1>
      
      <p className="mt-6 text-xl font-semibold max-w-3xl bg-white text-black px-6 py-3 rounded-lg shadow-md">
        🚀 Learn Python in the most fun and interactive way! Our friendly AI tutor is here to 
        guide you with exciting lessons, cool examples, and magical coding powers! ✨💡
      </p>
      
      <p className="mt-4 text-lg font-medium max-w-2xl bg-white text-black px-5 py-3 rounded-lg shadow-md">
        🧑‍💻 Type your questions, and our AI will help you understand Python step by step.  
        🎨 Enjoy a colorful and easy-to-use design made just for kids!
      </p>
      
      <Link 
        to="/chat" 
        className="mt-8 px-8 py-4 bg-yellow-400 text-black text-xl font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
      >
        🚀 Start Learning Now! 🎯
      </Link>

      <div className="mt-10 flex space-x-6">
        <img src="/python.png" alt="Python Logo" className="w-16 h-16 animate-bounce" />
        <img src="/robot.jpg" alt="AI Robot" className="w-16 h-16 animate-spin-slow" />
        <img src="/rocket.png" alt="Rocket" className="w-16 h-16 animate-pulse" />
      </div>
    </div>
  );
}
