import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { getHeaderClass } from "../utils/getHeaderClass";
import type { Data } from "../types";
import { handleAddRow } from "../utils/actions";

type Props = {
  data: Data[];
  columns: any[];
};

const DataTable = ({ data, columns }: Props) => {
  const [selectedCellId, setSelectedCellId] = useState<string | null>(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-auto bg-white">
      <table className="w-full table-fixed text-xs border-collapse">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{
                    width: header.getSize(),
                    maxWidth: header.getSize(),
                  }}
                  onClick={() => {
                    if (header.column.columnDef.header === "+") {
                      handleAddRow();
                    }
                  }}
                  className={`px-2 text-left border-1 font-semibold ${getHeaderClass(
                    header.column.columnDef.header
                  )}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex items-center w-full gap-2 overflow-hidden
                      ${(header.column.columnDef.header === "ABC" || header.column.columnDef.header === "Answer a question" || header.column.columnDef.header === "Extract") && "justify-center"}
                      `}
                    >
                      {header.column.columnDef.header ===
                      "Q3 Financial Overview" ? (
                        <>
                          <div className="flex gap-1 font-normal rounded p-1 bg-[#EEEEEE]">
                            <img
                              src="icons/Link.svg"
                              alt="Link icon"
                              className="w-4 h-4 flex-shrink-0"
                            />
                            {!header.isPlaceholder && (
                              <div className="truncate ">
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </div>
                            )}
                          </div>
                          <img
                            src="/icons/Arrow Sync.svg"
                            alt="Sync Icon"
                            className="w-4 h-4 flex-shrink-0"
                          />
                        </>
                      ) : (
                        <>
                          {header.column.columnDef.meta?.showIcon && (
                            <img
                              src={`/icons/${header.column.id}.svg`}
                              alt={`${header.column.id} icon`}
                              className="w-4 h-4 flex-shrink-0"
                            />
                          )}
                          {!header.isPlaceholder && (
                            <div
                              className={`truncate  ${header.column.columnDef.header === "+" && "w-full"}`}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </div>
                          )}
                          {header.column.columnDef.meta?.showMore && (
                            <img
                              src="/icons/More.svg"
                              alt="More icon"
                              className="w-4 h-4 flex-shrink-0"
                            />
                          )}
                        </>
                      )}
                    </div>
                    {header.column.columnDef.meta?.showArrow && (
                      <img
                        src="/icons/Chevron.svg"
                        alt="Chevron icon"
                        className="w-4 h-4 rotate-90 flex-shrink-0"
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-white border border-gray-200">
              {row.getVisibleCells().map((cell) => {
                const isSelected = selectedCellId === cell.id;
                return (
                  <td
                    key={cell.id}
                    onClick={() => setSelectedCellId(cell.id)}
                    style={{
                      width: cell.column.getSize(),
                      maxWidth: cell.column.getSize(),
                    }}
                    className={`border cursor-cell
                      ${isSelected && "border-2 border-blue-500"}
                      ${cell.column.columnDef.header === "#" ? "p-1 text-center max-w-fit" : "px-4 py-2"}
                      ${cell.column.columnDef.id === "+" ? "border-x-3 border-dashed border-[#CBCBCB]" : ""}
                      ${
                        (cell.column.columnDef.header === "Status" ||
                          cell.column.columnDef.header === "Priority") &&
                        "text-center"
                      } ${
                        (cell.column.columnDef.header === "Submitted" ||
                          cell.column.columnDef.header === "Due Date" ||
                          cell.column.columnDef.header === "Est. Value") &&
                        "text-right"
                      }`}
                  >
                    <div className="overflow-hidden truncate">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;