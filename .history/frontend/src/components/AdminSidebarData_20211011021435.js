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
    title: 'Rent Vehicle Management',
    path: '#UserManagement',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Rent Vehicle List',
        path: '/vehicle',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Vehicle Booking List',
        path: '/vbookings',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Payment Management',
    path: '#PaymentManagement',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Cards List',
        path: '/PaymentManagement/cardslist',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Booking Details',
        path: '/PaymentManagement/HotelRoomBookingpayment',
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
    title: 'Adventure Management',
    path: '#GuideManagement',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Adventure List',
        path: '/Adventure',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Bookings',
        path: '/adminbooking',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  {
    title: 'Destination Management',
    path: '#DestinationManagement',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Destination List',
        path: '/FFMM1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Destination Map',
        path: '/Map_admin',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Reports',
        path: '/Reports',
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


