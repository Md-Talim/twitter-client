"use client";

import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";

const RightSidebar = () => {
  const handleGoogleLogin = useCallback(
    async (credentialResponse: CredentialResponse) => {
      const googleToken = credentialResponse.credential;
      if (!googleToken) return toast.error("Google token not found!");

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken },
      );

      toast.success("Verifcation success!");

      if (verifyGoogleToken)
        window.localStorage.setItem("__twitter_token", verifyGoogleToken);
    },
    [],
  );

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
