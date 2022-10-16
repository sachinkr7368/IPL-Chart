import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'DashBoard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Statics',
        path: '/dashboard/statics',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Time',
        path: '/dashboard/alltime',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Season',
    path: '/season',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'City',
    path: '/city',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Hyderabad',
        path: '/city/hyderabad',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Chennai',
        path: '/city/chennai',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title:'Mumbai',
        path: '/city/mumbai',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Teams',
    path: '/teams',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'SRH',
        path: '/teams/srh',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title: 'RCB',
        path: '/teams/rcb',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title:'MI',
        path: '/teams/mi',
        icon: <IoIcons.IoMdPeople />
      },
      {
        title:'KKR',
        path: '/teams/kkr',
        icon: <IoIcons.IoMdPeople />
      }
    ]
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <FaIcons.FaEnvelopeOpenText />
  },
  {
    title: 'Help & Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];