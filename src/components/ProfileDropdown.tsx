import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, ArrowRight, Google, LogOut, HelpCircle, MessageSquare, User } from 'lucide-react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { logout } = useContext(AuthContext);

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-10 origin-top-right focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
      <div className="py-1" role="none">
        <Link to="/profile" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex={-1}>
          <User className="mr-3 h-4 w-4 inline-block" />
          Your Profile
        </Link>
        <Link to="/settings" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex={-1}>
          <Settings className="mr-3 h-4 w-4 inline-block" />
          Settings
        </Link>
        <Link to="/help" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex={-1}>
          <HelpCircle className="mr-3 h-4 w-4 inline-block" />
          Help &amp; Support
        </Link>
        <button onClick={logout} className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex={-1}>
          <LogOut className="mr-3 h-4 w-4 inline-block" />
          Logout
        </button>
      </div>
    </div>
  );
};
