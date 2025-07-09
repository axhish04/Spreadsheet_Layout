import Topbar from "../components/Topbar";
import Toolbar from "../components/Toolbar";
import DataTable from "../components/DataTable";
import dataJSON from "../data/Tabledata.json";
import type { Data } from "../types";
import TitleRow from "../components/TitleRow";
import React, { useState, useMemo } from "react";
import { columns as defaultColumns } from "../columns/TableColumns";

const Spreadsheet = () => {
  const [selected, setSelected] = useState("All Orders");
  const [search, setSearch] = useState("");
  const [columns, setColumns] = useState(defaultColumns);

  const typedData: Data[] = dataJSON.map((item) => ({
    ...item,
    status: item.status as Data["status"],
    priority: item.priority as Data["priority"],
    estimatedValue: Number(item.estimatedValue),
  }));

  // Filter data based on search value (case-insensitive, any field)
  const filteredData = useMemo(() => {
    if (!search.trim()) return typedData;
    const lower = search.toLowerCase();
    return typedData.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(lower)
      )
    );
  }, [typedData, search]);

  // Toggle hide/show fields
  const [fieldsHidden, setFieldsHidden] = useState(false);
  const handleHideFields = () => {
    if (fieldsHidden) {
      setColumns(defaultColumns);
      setFieldsHidden(false);
    } else {
      setColumns([]);
      setFieldsHidden(true);
    }
  };

  // Sort fields alphabetically by header
  const handleSortFields = () => {
    // Flatten columns, sort by header, then group back if needed
    const flat = columns.flatMap((col: any) => col.columns || [col]);
    const sorted = [...flat].sort((a, b) => {
      const headerA = a.header?.toString().toLowerCase() || "";
      const headerB = b.header?.toString().toLowerCase() || "";
      return headerA.localeCompare(headerB);
    });
    setColumns(sorted);
  };

  // Sort data vertically (by first column, e.g., jobRequest)
  const handleSortData = () => {
    const sorted = [...filteredData].sort((a, b) => {
      // Sort by jobRequest field (or change to any field you want)
      const aVal = a.jobRequest?.toLowerCase() || "";
      const bVal = b.jobRequest?.toLowerCase() || "";
      return aVal.localeCompare(bVal);
    });
    // This will only affect the current render, so store in state
    setSortedData(sorted);
  };

  const [sortedData, setSortedData] = useState<Data[] | null>(null);

  // Use sortedData if available, else filteredData
  const tableData = sortedData || filteredData;

  return (
    <div className="h-full w-full flex flex-col">
      <Topbar />
      <Toolbar
        onHideFields={handleHideFields}
        onSortFields={handleSortFields}
        onSortData={handleSortData}
      />
      <div className="flex-1 overflow-auto">
        <DataTable data={tableData} columns={columns} />
      </div>
      <div className="w-full relative">
        <TitleRow
          selected={selected}
          setSelected={setSelected}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default Spreadsheet;
