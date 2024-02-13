import { LeftSidebar } from "@/components/shared";

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <LeftSidebar />

      {/* Home Feed */}
      <div className="col-span-6 border-r border-l border-gray-600">
        Home Feed
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3">Right Sidebar</div>
    </div>
  );
}
