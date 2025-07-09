const TitleRowData = [
  {
    name: "All Orders",
    onClick: () => {
      console.log("All Orders clicked");
    },
  },
  {
    name: "Pending",
    onClick: () => {
      console.log("Pending clicked");
    },
  },
  {
    name: "Reviewed",
    onClick: () => {
      console.log("Reviewed clicked");
    },
  },
  {
    name: "Arrived",
    onClick: () => {
      console.log("Arrived clicked");
    },
  },
  {
    name: "+",
    onClick: () => {
      console.log("(+) Add new sheet");
    },
  },
];

export default TitleRowData;
