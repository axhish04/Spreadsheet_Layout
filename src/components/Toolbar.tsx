import toolbarActionData from "../data/toolbarActionData.ts";

type ToolbarItem = {
  icon: string;
  name: string;
  onClick?: () => void;
};

type ToolbarProps = {
  onHideFields: () => void;
  onSortFields: () => void;
  onSortData: () => void;
};

const Toolbar = ({ onHideFields, onSortFields, onSortData }: ToolbarProps) => {
  const toolbarData: ToolbarItem[] = [
    {
      icon: "/icons/Eye.svg",
      name: "Hide fields",
      onClick: onHideFields,
    },
    {
      icon: "/icons/Arrow Sort.svg",
      name: "Sort Fields",
      // Remove onClick to disable the feature
    },
    {
      icon: "/icons/Arrow Sort.svg",
      name: "Sort Data",
      // Remove onClick to disable the feature
    },
    {
      icon: "/icons/Filter.svg",
      name: "Filter",
      onClick: () => {
        console.log("Filter clicked");
      },
    },
    {
      icon: "/icons/Arrow Autofit.svg",
      name: "Cell view",
      onClick: () => {
        console.log("Cell view clicked");
      },
    },
  ];

  return (
    <div className="text-base font-normal leading-tight px-2 py-1.5 flex items-center justify-between border-b-[1px] border-[#AFAFAF]">
      <div className="flex items-center gap-2 text-[#121212]">
        <div className="flex items-center gap-1 p-2">
          <p>ToolBar</p>
          <img src="/icons/Chevron Double.svg" alt="Tool Bar icon" />
        </div>

        <div className="w-[1px] h-6 bg-red-500" />

        <div className="flex gap-1">
          {toolbarData.map((item: ToolbarItem) => (
            <button
              type="button"
              key={item.name}
              className="flex items-center gap-1 p-2 pr-3 cursor-pointer"
              onClick={item.onClick}
            >
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
              <p>{item.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {toolbarActionData.map((item: ToolbarItem) => (
          <button
            type="button"
            key={item.name}
            onClick={item.onClick}
            className={`text-sm flex items-center rounded-md border border-[#EEEEEE] gap-1 p-2 pr-3 cursor-pointer ${item.name === "New Action" ? "bg-[#4B6A4F] text-white pl-6 pr-6 font-medium" : "text-[#545454]"}`}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <p>{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
