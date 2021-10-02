import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/adminDashboard',
    icon: <AiIcons.AiOutlineUser />,
  },
  {
    title: 'User Management',
    path: '#UserManagement',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users List',
        path: '/UserManagement/userlist',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Reports',
        path: '/HotelManagement/reports',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Hotel Management',
    path: '#HotelManagement',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Hotels List',
        path: '/HotelManagement/hotellist',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rooms List',
        path: '/HotelManagement/RoomsList',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports',
        path: '/HotelManagement/reports',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Guide Management',
    path: '#GuideManagement',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Guide List',
        path: '/GuideManagement/guidelist',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Reports',
        path: '/HotelManagement/reports',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];