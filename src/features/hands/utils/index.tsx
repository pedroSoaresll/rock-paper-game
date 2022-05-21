import React from "react";
import { PaperSelector, RockSelector, ScissorsSelector } from "../components";
import { Hands } from "../shared";

export const renderHandBySelection = (hand: Hands) => {
  const structure: Record<Hands, JSX.Element> = {
    paper: <PaperSelector />,
    rock: <RockSelector />,
    scissors: <ScissorsSelector />,
  };

  return structure[hand];
};
