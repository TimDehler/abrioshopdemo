export const getColor = (germanColor) => {
  switch (germanColor) {
    case "Rot":
      return "red";
    case "Blau":
      return "blue";
    case "Grün":
      return "green";
    default:
      return "white";
  }
};
