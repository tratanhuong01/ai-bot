// Avatar.tsx
import React from "react";

const colors = [
  "#f44336", // red
  "#e91e63", // pink
  "#9c27b0", // purple
  "#673ab7", // deep purple
  "#3f51b5", // indigo
  "#2196f3", // blue
  "#03a9f4", // light blue
  "#00bcd4", // cyan
  "#009688", // teal
  "#4caf50", // green
  "#8bc34a", // light green
  "#cddc39", // lime
  "#ffeb3b", // yellow
  "#ffc107", // amber
  "#ff9800", // orange
  "#ff5722", // deep orange
];

function stringToColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

type AvatarProps = {
  name: string;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({ name, size = 40 }) => {
  const initials = getInitials(name);
  const bgColor = stringToColor(name);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: size / 2,
        textTransform: "uppercase",
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
