import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import LessonPrompt from "./components/LessonPrompt";
import TutorCharacter from "./components/TutorCharacter";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>

      {/* This will only show on the /chat page */}
      <Routes>
  <Route
    path="/chat"
    element={
      <div className="p-6 w-full flex flex-row gap-x-6 bg-gray-200">
  <LessonPrompt className="w-1/8 bg-red-200" />
  <ChatBox className="w-7/8 bg-blue-200" />
</div>

    }
  />
</Routes>


      <div className=" bottom-4 z-10 flex justify-between ml-16">
        <TutorCharacter />
      </div>
    </Router>
  );
}

export default App;
