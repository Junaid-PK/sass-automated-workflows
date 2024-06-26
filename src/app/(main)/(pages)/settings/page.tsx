import ProfileForm from "@/components/forms/ProfileForm";
import React from "react";

const Settings = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b">
          <span>Settings</span>
        </h1>
        <div className="flex flex-col gap-10 p-6">
          <div>
            <h2 className="text-2xl font-bold">User Profile</h2>
            <p className="text-base text-white/50">
              Add or Update your profile details
            </p>
          </div>
          <ProfileForm />
        </div>
      </div>
    </>
  );
};

export default Settings;
