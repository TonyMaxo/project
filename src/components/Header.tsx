import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Settings, User, Bot, ArrowRight, Google, LogOut, HelpCircle, MessageSquare, Search } from 'lucide-react';
import { ProfileDropdown } from './ProfileDropdown';
import { AuthContext } from '../context/AuthContext';

export function Header() {
  const location = useLocation();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const { isLoggedIn, isPublisher } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');


  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Marketplace', href: '/browse', icon: Layout },
    isPublisher ? { name: 'My Agents', href: '/agents', icon: Bot } : null,
  ].filter(Boolean);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileButtonRef.current && !profileButtonRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileButtonRef]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Ideally, you would want to trigger a search or filtering action here
    // For now, we'll just update the state
    console.log('Search Query:', searchQuery);
  };


  return (
    <header className="bg-surface shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Bot size={32} className="text-accent" />
                <span className="text-xl font-bold text-primary">Bolt AI Marketplace</span>
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                if (!item) return null; // Skip rendering null navigation items
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                      isActive
                        ? 'border-accent text-primary'
                        : 'border-transparent text-secondary hover:border-border hover:text-primary'
                    }`}
                  >
                    <Icon size={16} className="mr-2 text-secondary" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex sm:ml-6 sm:items-center">
             <div className="relative mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search AI Agents..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none sm:w-64"
              />
            </div>
            <div className="relative" ref={profileButtonRef}>
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileMenu}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary hover:text-accent focus:outline-none"
                  >
                    <User size={16} className="mr-2" />
                    Profile
                  </button>
                  <ProfileDropdown isOpen={isProfileMenuOpen} onClose={setProfileMenuOpen} />
                </div>
              ) : (
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
