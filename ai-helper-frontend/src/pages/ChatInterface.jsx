import React, { useState } from 'react';
import { Send, Plus, User } from 'lucide-react';

// This component represents the main chat interface page
const ChatInterface = ({ onNavigateToProfile }) => {
  // State for managing the chat history
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Hello! I am ready to assist you. What can I help you with?' },
  ]);
  // State for the user's input message
  const [input, setInput] = useState('');
  // State to manage the currently selected chat
  const [selectedChat, setSelectedChat] = useState(0);

  // Function for sending a message
  const handleSendMessage = () => {
    if (input.trim() !== '') {
      // Add the user's message to the chat history
      const newUserMessage = { role: 'user', text: input };
      setChatHistory((prev) => [...prev, newUserMessage]);
      setInput(''); // Clear the input field
      // Logic for an AI response would go here
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Function to clear the chat and start a new one
  const handleNewChat = () => {
    setChatHistory([
      { role: 'ai', text: 'Hello! I am ready to assist you. What can I help you with?' },
    ]);
    setInput('');
    // Optionally, you might want to reset the selected chat index
    setSelectedChat(0);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-950 text-gray-200 font-sans p-2">
      <style>
        {`
        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937; /* A dark gray that matches the sidebar */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563; /* A lighter gray for the thumb */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280; /* A slightly lighter gray on hover */
        }
        `}
      </style>
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-xl mb-2">
        <h1 className="text-xl font-bold text-gray-100">AI Helper</h1>
        <div className="flex space-x-4">
          <button className="py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 transition-colors">Chat</button>
          <button className="py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 transition-colors">Roadmap</button>
          <button className="py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 transition-colors">Flowchart</button>
        </div>
        {/* Profile Button with Circular Icon */}
        <button
          onClick={onNavigateToProfile}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md"
        >
          <User size={20} />
        </button>
      </div>

      {/* Main Content Area: Left Sidebar, Chat Area, Right Sidebar */}
      <div className="flex flex-1 overflow-hidden space-x-2">
        
        {/* Left Sidebar: New/Previous Chats */}
        <div className="w-64 bg-gray-800 rounded-lg p-4 flex flex-col space-y-2">
          {/* Refined New Chat Button */}
          <button
            onClick={handleNewChat}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-colors transform hover:scale-105 mb-4"
          >
            <Plus size={20} />
            <span>New Chat</span>
          </button>
          
          <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
            {/* Placeholder for previous chats */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setSelectedChat(index)}
                className={`w-full py-3 px-4 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === index
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Previous chat {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section: Chat Area */}
        <div className="flex-1 bg-gray-800 rounded-lg flex flex-col p-4">
          
          {/* Chat messages display area */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-700 text-gray-100 rounded-bl-none'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message input area */}
          <div className="flex items-center space-x-2 mt-4 p-2 bg-gray-700 rounded-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none outline-none text-gray-100 placeholder-gray-400 pl-3"
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        
        {/* Right Sidebar: Research Cards */}
        <div className="w-64 bg-gray-800 rounded-lg p-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-100">Research / Project Display</h2>
          <div className="bg-gray-700 rounded-lg p-4 text-center w-full">
            <p className="text-gray-400">Placeholder for research cards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
