import React from "react";
import ItemTeam from "./item-team";

const Teams = () => {
  return (
    <div className="grid-cols-3 grid gap-8 py-8">
      <ItemTeam />
      <ItemTeam />
      <ItemTeam />
    </div>
  );
};

export default Teams;
