import { FaXTwitter } from "react-icons/fa6";
import {
  RiBellFill,
  RiBookMarkLine,
  RiHashtag,
  RiHome7Fill,
  RiMessage2Fill,
  RiUser2Fill,
} from "react-icons/ri";

type SidebarButton = {
  title: string;
  icon: React.ReactNode;
};

const sidebarButtons: SidebarButton[] = [
  {
    title: "Home",
    icon: <RiHome7Fill />,
  },
  {
    title: "Explore",
    icon: <RiHashtag />,
  },
  {
    title: "Notifications",
    icon: <RiBellFill />,
  },
  {
    title: "Messages",
    icon: <RiMessage2Fill />,
  },
  {
    title: "Bookmarks",
    icon: <RiBookMarkLine />,
  },
  {
    title: "Profile",
    icon: <RiUser2Fill />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Left sidebar */}
      <div className="col-span-3 pl-40 pr-20 space-y-6">
        {/* Logo */}
        <div className="text-4xl p-4 hover:bg-gray-800 w-fit rounded-full cursor-pointer">
          <FaXTwitter />
        </div>

        {/* List Items */}
        <div className="text-2xl">
          <ul className="flex flex-col gap-y-3">
            {sidebarButtons.map((button) => (
              <li
                key={button.title}
                className="flex gap-x-4 px-4 py-2 items-center hover:bg-gray-800 w-fit rounded-full cursor-pointer"
              >
                <div>{button.icon}</div>
                <p>{button.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Post Button */}
        <div>
          <button className="bg-blue-500 text-lg font-semibold w-full rounded-full py-2">
            Post
          </button>
        </div>
      </div>

      {/* Home Feed */}
      <div className="col-span-6 border-r border-l border-gray-600">
        Home Feed
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3">Right Sidebar</div>
    </div>
  );
}
