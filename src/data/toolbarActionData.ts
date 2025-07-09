const toolbarActionData = [
  {
    icon: "/icons/Arrow Download.svg",
    name: "Import",
    onClick: () => {
      console.log("Import clicked");
    },
  },
  {
    icon: "/icons/Arrow Upload.svg",
    name: "Export",
    onClick: () => {
      console.log("Export clicked");
    },
  },
  {
    icon: "/icons/Share.svg",
    name: "Share",
    onClick: () => {
      console.log("Share clicked");
    },
  },
  {
    icon: "/icons/Arrow Split.svg",
    name: "New Action",
    onClick: () => {
      console.log("New Action clicked");
    },
  },
];

export default toolbarActionData;
