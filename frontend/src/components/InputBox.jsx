import { useState } from "react";

export default function InputBox({ onNewMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onNewMessage(input);  
      setInput("");  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button type="submit" className="ml-2 p-2 bg-primary text-white rounded-lg hover:bg-yellow-500">
        Send
      </button>
    </form>
  );
}

