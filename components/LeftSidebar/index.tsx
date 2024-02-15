import { sidebarLinks } from "@/constants";
import Logo from "./Logo";

const LeftSidebar = () => (
  <div className="space-y-6 pl-40 pr-20">
    <Logo />

    {/* Navigation / Sidebar Links */}
    <nav className="text-2xl">
      <ul className="flex flex-col gap-y-3">
        {sidebarLinks.map(({ title, Icon }) => (
          <li
            key={title}
            className="flex w-fit cursor-pointer items-center gap-x-4 rounded-full px-4 py-2 hover:bg-gray-800"
          >
            <div>
              <Icon />
            </div>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </nav>

    {/* Post Button */}
    <div>
      <button className="w-full rounded-full bg-blue-500 py-2 text-lg font-semibold">
        Post
      </button>
    </div>
  </div>
);

export default LeftSidebar;
