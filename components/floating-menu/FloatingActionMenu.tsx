'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  enguireIcon,
  phoneIcon,
  whatsappIcon,
  mapPinIcon,
  quillChatIcon,
  menuPlusIcon,
} from '@/constants/assets';

interface ActionButton {
  id: string;
  label: string;
  icon: any;
  onClick: () => void;
}

const FloatingActionMenu: React.FC = () => {
  const pathname = usePathname();
  const isHiddenOnRoutes = ["/", "/launch"];
  if (isHiddenOnRoutes.includes(pathname)) return null;
  const [isOpen, setIsOpen] = useState(false);

  const actionButtons: ActionButton[] = [
    {
      id: 'schedule',
      label: 'Schedule',
      icon: mapPinIcon,
      onClick: () => console.log('Schedule clicked')
    },
    {
      id: 'whatsapp',
      label: 'Whatsapp',
      icon: whatsappIcon,
      onClick: () => console.log('WhatsApp clicked')
    },
    {
      id: 'chat',
      label: 'Chat',
      icon: quillChatIcon,
      onClick: () => console.log('Chat clicked')
    },
    {
      id: 'call',
      label: 'Call',
      icon: phoneIcon,
      onClick: () => console.log('Call clicked')
    },
    {
      id: 'enquire',
      label: 'Enquire',
      icon: enguireIcon,
      onClick: () => console.log('Enquire clicked')
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleActionClick = (action: ActionButton) => {
    action.onClick();
    setIsOpen(false); 
  };

  return (
    // Mobile only - hidden on md and above
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      {/* Action Buttons */}
      <div className="flex flex-col items-center space-y-3 mb-4">
        {actionButtons.map((action, index) => (
          <button
            key={action.id}
            onClick={() => handleActionClick(action)}
            className={`
              w-20 h-20 bg-white rounded-full shadow-lg 
              flex flex-col items-center justify-center
              hover:shadow-xl transform hover:scale-105
              transition-all duration-300 ease-out
              border border-gray-100/50 space-y-1
              ${isOpen 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
              }
            `}
            style={{
              transitionDelay: isOpen ? `${index * 60}ms` : `${(actionButtons.length - index - 1) * 40}ms`
            }}
          >
            <Image
              src={action.icon}
              width={25}
              height={25}
              alt={action.label.toLowerCase()}
              className="object-contain"
            />
            <span className="text-xs font-medium text-gray-800">
              {action.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main FAB Button */}
      <button
        onClick={toggleMenu}
        className={`
          w-[54px] h-[54px] rounded-full shadow-lg
          flex items-center justify-center
          transition-all duration-300 ease-out transform
          hover:shadow-xl hover:scale-105 ml-[10px]
          ${isOpen 
            ? 'bg-[#B5B5B5]  rotate-45' 
            : 'bg-[#FFFFFF]'
          }
        `}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
           <Image
              src={menuPlusIcon}
              width={20}
              height={20}
              alt={"Cancel"}
              className="object-contain"
            />        ) : (
          <Image
              src={menuPlusIcon}
              width={20}
              height={20}
              alt={"Plus"}
              className="object-contain"
            />

        )}
      </button>
    </div>
  );
};

export default FloatingActionMenu;