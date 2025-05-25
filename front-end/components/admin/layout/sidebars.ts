interface SidebarItem {
  name: string;
  icon: string;
  path: string;
}

const sidebars: SidebarItem[] = [
  {
    name: "Cars",
    icon: "bx bx-notepad",
    path: "/cars",
  },
  {
    name: "Categories",
    icon: "bx bx-category",
    path: "/categories",
  },
  {
    name: "Blogs",
    icon: "bx bx-phone",
    path: "/blogs",
  },
  {
    name: "Users",
    icon: "bx bx-user",
    path: "/users",
  },
  {
    name: "Booking car",
    icon: "bx bx-book",
    path: "/booking",
  },
];

export default sidebars;
