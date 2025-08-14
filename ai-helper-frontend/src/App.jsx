import React, { useState } from 'react';
import { Home as HomeIcon, User as UserIcon, MessageSquare, LogOut } from 'lucide-react';
import HomePage from './HomePage.jsx';
import ProfilePage from './ProfilePage.jsx';
import AuthPage from './AuthPage.jsx';
import ChatInterface from './ChatInterface.jsx';

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
        // Pass the navigation function as a prop to ChatInterface
        return <ChatInterface onNavigateToProfile={() => handleNavigation('profile')} />;
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

export default App;
