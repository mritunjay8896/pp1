/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Package, Info, MessageSquare } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();

  const menuItems = [
    {
      id: 'home',
      name: 'Home',
      path: '/',
      icon: Home,
    },
    {
      id: 'about',
      name: 'About',
      path: '/about',
      icon: Info,
    },
    {
      id: 'products',
      name: 'Products',
      path: '/products',
      icon: Package,
    },
    {
      id: 'contact',
      name: 'Contact',
      path: '/contact',
      icon: MessageSquare,
    },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      id="qpp-mobile-bottom-nav"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200/60 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom,12px)] pt-2 px-4 transition-all duration-300"
    >
      <div className="max-w-md mx-auto flex justify-between items-center">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          const IconComponent = item.icon;

          return (
            <Link
              key={item.id}
              to={item.path}
              id={`bottom-nav-item-${item.id}`}
              className="relative flex flex-col items-center justify-center py-1 px-3 min-w-[64px] rounded-2xl transition-all duration-200 group"
            >
              {/* Highlight active background pill */}
              {active && (
                <motion.div
                  layoutId="activeBottomTab"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-brand-primary/10 rounded-2xl -z-10"
                />
              )}

              {/* Icon with scaling effect */}
              <div
                className={`relative p-1 transition-transform duration-200 ${
                  active ? 'text-brand-primary scale-110' : 'text-brand-muted group-hover:text-brand-primary group-hover:scale-105'
                }`}
              >
                <IconComponent className="w-[21px] h-[21px] stroke-[2]" />
              </div>

              {/* Text Label */}
              <span
                className={`text-[10px] font-bold tracking-tight transition-colors duration-200 mt-1 ${
                  active ? 'text-brand-heading font-extrabold' : 'text-brand-muted group-hover:text-brand-heading'
                }`}
              >
                {item.name}
              </span>

              {/* Small top active notch dot */}
              {active && (
                <span className="absolute top-0 w-1 h-1 bg-brand-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
