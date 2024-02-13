import { IconType } from "react-icons";
import {
  RiBellFill,
  RiBookMarkLine,
  RiHashtag,
  RiHome7Fill,
  RiMessage2Fill,
  RiUser2Fill,
} from "react-icons/ri";

type SidebarLink = {
  title: string;
  Icon: IconType;
};

export const sidebarLinks: SidebarLink[] = [
  {
    title: "Home",
    Icon: RiHome7Fill,
  },
  {
    title: "Explore",
    Icon: RiHashtag,
  },
  {
    title: "Notifications",
    Icon: RiBellFill,
  },
  {
    title: "Messages",
    Icon: RiMessage2Fill,
  },
  {
    title: "Bookmarks",
    Icon: RiBookMarkLine,
  },
  {
    title: "Profile",
    Icon: RiUser2Fill,
  },
];
