import React, { useState } from "react";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import UserCard from "./UserCard";
import UserModal from "./UserModal";

const Button: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("");

  const renderComponent = () => {
    switch (activeComponent) {
      case "PostCard":
        return <PostCard />;
      case "PostModal":
        return <PostModal />;
      case "UserCard":
        return <UserCard />;
      case "UserModal":
        return <UserModal />;
      default:
        return <p className="text-center mt-10 font-semibold text-white">Select a feature to view its content</p>;
    }
  };

  return (
    <div className="text-center">
      <div className="space-x-4 mb-4">
        <button
          onClick={() => setActiveComponent("PostCard")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          PostCard
        </button>
        <button
          onClick={() => setActiveComponent("PostModal")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          PostModal
        </button>
        <button
          onClick={() => setActiveComponent("UserCard")}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          UserCard
        </button>
        <button
          onClick={() => setActiveComponent("UserModal")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          UserModal
        </button>
      </div>
      <div className="mt-4">{renderComponent()}</div>
    </div>
  );
};

export default Button;
