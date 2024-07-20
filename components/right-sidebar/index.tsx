"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const RightSidebar = () => {
  const handleGoogleLogin = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
  };

  return (
    <aside className="w-full space-y-4 p-4">
      <h1 className="text-2xl font-bold">New to Twitter?</h1>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => console.log("Login failed!")}
      />
    </aside>
  );
};

export default RightSidebar;
