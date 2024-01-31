import Link from "next/link";
import React from "react";

export default function ChatAbout() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center space-y-5">
        <h1 className="text-3xl font-bold">Welcome to Daily Chat</h1>
        <p className="w-96">
          This is a chat application that power by supabase realtime db. Login
          to send message
        </p>
        <div className="flex items-center justify-center">
          <Link
            href=""
            target="_blank"
            className="text-red-500 rounded-sm border m-2 p-2 underline cursor-pointer "
          >
            Shrey Sadhukhan
          </Link>{" "}
          | Made by ❤️
        </div>
      </div>
    </div>
  );
}
