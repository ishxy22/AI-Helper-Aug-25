import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, User as UserIcon, MessageSquare, LogOut, Loader2, Send } from 'lucide-react';

// The main App component that handles page navigation
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuth, setIsAuth] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setIsAuth(false);
    setCurrentPage('login');
  };

  const handleLoginSuccess = () => {
    setIsAuth(true);
    setCurrentPage('home');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'profile':
        return <ProfilePage />;
      case 'chat':
        return <ChatInterface />;
      case 'login':
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* Sidebar for navigation */}
      <nav className="hidden md:flex flex-col items-center p-4 bg-white dark:bg-gray-800 shadow-lg space-y-4">
        <div className="flex-1 flex flex-col items-center space-y-4 mt-8">
          <button
            onClick={() => handleNavigation('home')}
            className={`p-3 rounded-full transition-colors ${
              currentPage === 'home'
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <HomeIcon size={24} />
          </button>
          {isAuth && (
            <>
              <button
                onClick={() => handleNavigation('profile')}
                className={`p-3 rounded-full transition-colors ${
                  currentPage === 'profile'
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <UserIcon size={24} />
              </button>
              <button
                onClick={() => handleNavigation('chat')}
                className={`p-3 rounded-full transition-colors ${
                  currentPage === 'chat'
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <MessageSquare size={24} />
              </button>
            </>
          )}
        </div>
        <div className="mt-auto">
          {isAuth ? (
            <button
              onClick={handleLogout}
              className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <LogOut size={24} />
            </button>
          ) : (
            <button
              onClick={() => handleNavigation('login')}
              className={`p-3 rounded-full transition-colors ${
                currentPage === 'login'
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <UserIcon size={24} />
            </button>
          )}
        </div>
      </nav>

      {/* Main content area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {renderContent()}
      </main>

      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="flex justify-around items-center p-2">
          <button
            onClick={() => handleNavigation('home')}
            className={`p-3 rounded-full transition-colors ${
              currentPage === 'home'
                ? 'text-blue-500 bg-blue-100 dark:bg-blue-900'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <HomeIcon size={24} />
          </button>
          {isAuth && (
            <>
              <button
                onClick={() => handleNavigation('profile')}
                className={`p-3 rounded-full transition-colors ${
                  currentPage === 'profile'
                    ? 'text-blue-500 bg-blue-100 dark:bg-blue-900'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <UserIcon size={24} />
              </button>
              <button
                onClick={() => handleNavigation('chat')}
                className={`p-3 rounded-full transition-colors ${
                  currentPage === 'chat'
                    ? 'text-blue-500 bg-blue-100 dark:bg-blue-900'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <MessageSquare size={24} />
              </button>
            </>
          )}
          {isAuth ? (
            <button
              onClick={handleLogout}
              className="p-3 rounded-full text-gray-500 dark:text-gray-400 transition-colors"
            >
              <LogOut size={24} />
            </button>
          ) : (
            <button
              onClick={() => handleNavigation('login')}
              className={`p-3 rounded-full transition-colors ${
                currentPage === 'login'
                  ? 'text-blue-500 bg-blue-100 dark:bg-blue-900'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <UserIcon size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Home Page Component ---
const HomePage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">Welcome to the AI Helper</h1>
    <p className="text-lg text-center text-gray-600 dark:text-gray-400">
      Your personal assistant for everything you need. Navigate through the sidebar to start a new chat or check your profile.
    </p>
    <div className="mt-8 flex justify-center">
      <img
        src="https://placehold.co/600x400/3B82F6/ffffff?text=AI+Helper"
        alt="AI Helper Illustration"
        className="rounded-lg shadow-md"
      />
    </div>
  </div>
);

// --- Profile/Dashboard Page Component ---
const ProfilePage = () => (
  <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
    <div className="flex items-center space-x-6 mb-8">
      <img
        src="https://placehold.co/120x120/E5E7EB/4B5563?text=User"
        alt="User Profile"
        className="rounded-full border-4 border-blue-500"
      />
      <div>
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
        <p className="text-sm text-gray-400 dark:text-gray-500">Member since Jan 2023</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <span className="font-medium">Total Chats</span>
            <span className="text-xl font-bold text-blue-600">42</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <span className="font-medium">Recent Activity</span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li><strong>Email:</strong> john.doe@example.com</li>
          <li><strong>Plan:</strong> Premium</li>
          <li><strong>Last Login:</strong> 2 days ago</li>
        </ul>
      </div>
    </div>
  </div>
);

// --- Auth (Login/Signup) Page Component ---
const AuthPage = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log(isLogin ? 'Attempting to log in...' : 'Attempting to sign up...');
    // Simulate a successful login
    onLoginSuccess();
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center">
          {isLogin ? 'Log In' : 'Sign Up'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={handleToggle} className="ml-1 text-blue-500 hover:underline">
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

// --- Main Chat Interface Component ---
const ChatInterface = () => {
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Hello! How can I help you today?' },
    { role: 'user', text: 'What is the capital of France?' },
    { role: 'ai', text: 'The capital of France is Paris.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newUserMessage = { role: 'user', text: input };
    setChatHistory((prev) => [...prev, newUserMessage]);
    setInput('');
    setLoading(true);

    try {
      const prompt = `You are a helpful AI assistant. The user's question is: "${input}"`;

      // API call to the Gemini API
      let chatHistoryForApi = [];
      chatHistoryForApi.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistoryForApi };
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      let aiResponseText = "I couldn't get a response. Please try again.";

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        aiResponseText = result.candidates[0].content.parts[0].text;
      }
      
      const newAiMessage = { role: 'ai', text: aiResponseText };
      setChatHistory((prev) => [...prev, newAiMessage]);

    } catch (error) {
      console.error('Error fetching AI response:', error);
      setChatHistory((prev) => [
        ...prev,
        { role: 'ai', text: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] max-w-5xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Chat with AI Helper</h1>
      
      {/* Chat messages display area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 rounded-lg bg-gray-50 dark:bg-gray-700 mb-4">
        {chatHistory.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[70%] p-3 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-bl-none'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] p-3 rounded-2xl bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-bl-none flex items-center">
              <Loader2 className="animate-spin mr-2" size={16} />
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="flex items-center p-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent transition-colors"
          disabled={loading}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors disabled:opacity-50"
          disabled={loading}
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;