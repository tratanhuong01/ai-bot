import { LoaderCircleIcon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-white flex items-center justify-center z-50">
      <div>
        <LoaderCircleIcon className="mx-auto animate-spin" size={70} />
        <p className="text-center tetx-primary text-lg mt-6">Loading</p>
      </div>
    </div>
  );
};

export default Loading;
