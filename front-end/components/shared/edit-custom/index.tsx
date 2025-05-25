"use client";

import "react-quill/dist/quill.snow.css";
import { modules } from "./editor";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import { useMemo } from "react";

type EditorCustomProps = {
  value: string;
  setValue: (value: string) => void;
  label?: string;
  error?: string;
  className?: string;
};

const EditorCustom = ({
  value,
  setValue,
  label,
  error,
  className = "",
}: EditorCustomProps) => {
  //
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill-new"), { ssr: false }),
    []
  );
  return (
    <div className="w-full flex flex-col editor gap-2 h-full">
      <Label className="font-bold">{label}</Label>
      <div className={`w-full rounded-sm bg-white ${className}`.trim()}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
        />
      </div>
      {!!error && <p className="text-red-500 text-sm pt-1">{error}</p>}
    </div>
  );
};

export default EditorCustom;
