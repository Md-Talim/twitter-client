"use client";

import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";

const Profile = () => {
  const { user } = useCurrentUser();

  if (!user) return null;

  return (
    <div className="flex items-center gap-x-6">
      <Image
        width={36}
        height={36}
        src={user.profileImageUrl ? user.profileImageUrl : "/avatar.svg"}
        alt="User avatar"
        className="h-9 w-8 rounded-full object-cover"
      />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-200">
          {user.firstName} {user.lastName}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
