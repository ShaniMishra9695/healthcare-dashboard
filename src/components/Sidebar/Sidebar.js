// File: src/components/Sidebar/Sidebar.js
import React from 'react';
import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarClock,
  BarChart2,
  TestTube,
  MessageSquare,
  LifeBuoy,
  Settings
} from 'lucide-react';

import './Sidebar.css';

const navItems = [
  { icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
  { icon: <History size={18} />, label: 'History' },
  { icon: <Calendar size={18} />, label: 'Calendar' },
  { icon: <CalendarClock size={18} />, label: 'Appointments' },
  { icon: <BarChart2 size={18} />, label: 'Statistics' },
  { icon: <TestTube size={18} />, label: 'Tests' },
  { icon: <MessageSquare size={18} />, label: 'Chat' },
  { icon: <LifeBuoy size={18} />, label: 'Support' },
  { icon: <Settings size={18} />, label: 'Setting' }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href="#">
              {item.icon} <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
