import axios from "axios";
import { useEffect, useRef, useState } from "react";
import InputBox from "./InputBox";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [apiKey, setApiKey] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const getAiResponse = async (question) => {
    try {
      const response = await axios.post("http://localhost:5000/api/ai/chat", {
        message: question,
      });

      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return { message: "Failed to fetch AI response" };
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  useEffect(() => {
    
    const storedApiKey = localStorage.getItem("apiKey");
    if (storedApiKey) {
      setApiKey("");
    }
  }, []);

  const handleNewMessage = async (newMessage) => {
    setMessages([...messages, { text: newMessage, sender: "user" }]);

    try {
      const response = await getAiResponse(newMessage);
      const aiResponse = response?.reply || "Sorry, I couldn't understand.";

      setMessages((prevMessages) => [...prevMessages, { text: aiResponse, sender: "ai" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Error fetching AI response. Try again.", sender: "ai" }]);
    }
  };

  // Function to update API key
  const updateApiKey = async () => {
    if (!apiKey) {
      alert("Please enter a valid API key.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/ai/update-api-key", {
        newApiKey: apiKey,
      });

      if (response.data.message) {
        alert("API Key updated successfully!");
        localStorage.setItem("apiKey", apiKey);
        setApiKey(""); 
      }
    } catch (error) {
      console.error("Error updating API key:", error);
      alert("Failed to update API key.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-4 flex flex-col h-96">
      <div className="overflow-auto flex-1 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${msg.sender === "user" ? "bg-primary text-white self-end" : "bg-gray-100 text-black self-start"}`}
            style={{ fontFamily: "Arial, sans-serif", wordWrap: "break-word", maxWidth: "100%", marginBottom: "10px", lineHeight: "1.5", whiteSpace: "pre-wrap", wordBreak: "break-word" }}
          >
            {msg.sender === "ai" ? (
              <div
                style={{
                  backgroundColor: "#f7f7f7",
                  borderRadius: "8px",
                  padding: "15px",
                  fontSize: "16px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  lineHeight: "1.6",
                  borderLeft: "4px solid #4CAF50",
                  whiteSpace: "pre-wrap",
                }}
              >
                <strong>AI:</strong>
                <p>{msg.text}</p>
              </div>
            ) : (
              <div>{msg.text}</div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <InputBox onNewMessage={handleNewMessage} />


      {/* Input for API Key */}
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Enter API Key..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="border p-2 rounded-l-md w-full"
        />
        <button onClick={updateApiKey} className="bg-blue-500 text-white px-3 rounded-r-md">
          Update Key
        </button>
      </div>

      
    </div>
  );
}
