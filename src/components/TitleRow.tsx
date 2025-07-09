import React from "react";
import data from "../data/TitleRowData";

type TitleRowDataItem = {
  name: string;
  onClick: () => void;
};

type TitleRowProps = {
  selected: string;
  setSelected: (name: string) => void;
  search: string;
  setSearch: (val: string) => void;
};

const TitleRow = ({ selected, setSelected, search, setSearch }: TitleRowProps) => {
  return (
    <div className="w-full h-11 bg-white pl-8 pr-4 pt-1 border-t-2 text-base font-semibold border-[#F6F6F6] absolute bottom-0 flex items-center gap-2 justify-between">
      <div className="flex gap-2">
        {data.map((val: TitleRowDataItem) => (
          <button
            key={val.name}
            onClick={() => {
              setSelected(val.name);
              val.onClick();
            }}
            className={`px-4 py-1 text-[#757575] rounded transition-colors duration-150 ${
              selected === val.name ? "text-[#3E5741] bg-[#E8F0E9] border-t-2 border-[#3E5741]" : ""
            }`}
          >
            {val.name}
          </button>
        ))}
      </div>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E5741]"
        style={{ minWidth: 120 }}
      />
    </div>
  );
};

export default TitleRow;
