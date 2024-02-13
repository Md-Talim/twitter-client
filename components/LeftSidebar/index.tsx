import { sidebarLinks } from "@/constants";
import Logo from "./Logo";

const LeftSidebar = () => (
  <div className="col-span-3 pl-40 pr-20 space-y-6">
    <Logo />

    {/* Navigation / Sidebar Links */}
    <nav className="text-2xl">
      <ul className="flex flex-col gap-y-3">
        {sidebarLinks.map(({ title, Icon }) => (
          <li
            key={title}
            className="flex gap-x-4 px-4 py-2 items-center hover:bg-gray-800 w-fit rounded-full cursor-pointer"
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
      <button className="bg-blue-500 text-lg font-semibold w-full rounded-full py-2">
        Post
      </button>
    </div>
  </div>
);

export default LeftSidebar;
