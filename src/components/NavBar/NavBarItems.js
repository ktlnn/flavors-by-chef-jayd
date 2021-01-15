import * as RiIcons from "react-icons/ri";

export const NavBarItems = [
  {
    title: "Home",
    path: "/",
    classname: "nav-text",
  },
  {
    title: "Meet the Team",
    path: "/team",
  },
  {
    title: "Lunch",
    path: "/lunch",
    classname: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "French",
        path: "/lunch",
      },
      {
        title: "Asian",
        path: "/lunch",
      },
    ],
  },
  {
    title: "Dinner",
    path: "/dinner",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "French",
        path: "/dinner",
      },
    ],
  },
  {
    title: "Takeout & Delivery",
    path: "/takeout",
  },
  {
    title: "Catering & Private Events",
    path: "/catering",
  },
];
