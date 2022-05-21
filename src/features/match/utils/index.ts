import { getHandByNumber } from "../../hands";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export const getRandomHand = () => {
  const randomNumber = getRandomInt(3);
  return getHandByNumber(randomNumber);
};
