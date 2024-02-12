import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Left sidebar */}
      <div className="col-span-3 pl-32">
        {/* Logo */}
        <div className="text-4xl p-4">
          <FaXTwitter />
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
