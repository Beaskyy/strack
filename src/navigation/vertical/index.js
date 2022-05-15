import { Settings, Package, Database } from 'react-feather'

export default [
  {
    id: "Home",
    title: "Dashboard",
    icon: <Database size={20} />,
    navLink: "/home"
  },
  {
    id: "Project",
    title: "Project",
    icon: <Package size={20} />,
    navLink: "/project"
  },
  {
    id: "Profile",
    title: "Profile",
    icon: <Settings size={20} />,
    navLink: "/profile"
  }
]
