import { createColumnHelper } from "@tanstack/react-table";
import type { Data } from "../types";

const columnHelper = createColumnHelper<Data>();

export const columns = [
  columnHelper.group({
    id: "id",
    header: "",
    columns: [
      columnHelper.accessor("id", {
        header: "#",
        cell: (info) => info.getValue(),
        size: 32,
        meta: { showIcon: false },
      }),
    ],
  }),
  columnHelper.group({
    header: "Q3 Financial Overview",
    columns: [
      columnHelper.accessor("jobRequest", {
        header: "Job Request",
        cell: (info) => info.getValue(),
        size: 256,
        meta: { showIcon: true, showArrow: true },
      }),
      columnHelper.accessor("submitted", {
        header: "Submitted",
        cell: (info) => info.getValue(),
        size: 124,
        meta: { showIcon: true, showArrow: true },
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => {
          const status = info.getValue();
          let style = "";

          if (status === "Complete") {
            style += "bg-[#D2F2E2] text-[#0A6D3C]";
          } else if (status === "In-progress") {
            style += "bg-[#FFF3D6] text-[#85640B]";
          } else if (status === "Blocked") {
            style += "bg-[#FFE1DD] text-[#C12119]";
          } else if (status === "Need to start") {
            style += "bg-[#E2E8F0] text-[#475569]";
          }

          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${style}`}
            >
              {status}
            </span>
          );
        },
        size: 124,
        meta: { showIcon: true, showArrow: true },
      }),
      columnHelper.accessor("submitter", {
        header: "Submitter",
        cell: (info) => info.getValue(),
        size: 124,
        meta: { showIcon: true, showArrow: true },
      }),
    ],
  }),
  columnHelper.group({
    id: "url",
    header: "",
    columns: [
      columnHelper.accessor("url", {
        header: "URL",
        cell: (info) => {
          const url = info.getValue();
          return url ? (
            <a
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {url}
            </a>
          ) : (
            ""
          );
        },
        size: 124,
        meta: { showIcon: true, showArrow: true },
      }),
    ],
  }),
  columnHelper.group({
    header: "ABC",
    columns: [
      columnHelper.accessor("assigned", {
        header: "Assigned",
        cell: (info) => info.getValue(),
        size: 140,
        meta: { showIcon: true },
      }),
    ],
    meta: { showIcon: true, showMore: true },
  }),
  columnHelper.group({
    header: "Answer a question",
    columns: [
      columnHelper.accessor("priority", {
        header: "Priority",
        cell: (info) => {
          const value = info.getValue();
          let color = "";

          if (value === "High") {
            color += "text-[#EF4D44]";
          } else if (value === "Medium") {
            color += "text-[#C29210]";
          } else if (value === "Low") {
            color += "text-[#1A8CFF]";
          } else {
            color += "text-gray-500";
          }

          return <span className={`font-semibold ${color}`}>{value}</span>;
        },
        size: 124,
      }),
      columnHelper.accessor("dueDate", {
        header: "Due Date",
        cell: (info) => info.getValue(),
        size: 124,
      }),
    ],
    meta: { showIcon: true, showMore: true },
  }),
  columnHelper.group({
    header: "Extract",
    columns: [
      columnHelper.accessor("estimatedValue", {
        header: "Est. Value",
        cell: (info) => {
          const val = info.getValue();
          return val ? (
            <p>
              {val} <span className="text-[#AFAFAF]"> ₹</span>
            </p>
          ) : (
            ""
          );
        },
        size: 124,
      }),
    ],
    meta: { showIcon: true, showMore: true },
  }),
  columnHelper.group({
    id: "+",
    header: "+",
    columns: [
      columnHelper.display({
        id: "+",
        header: "",
        cell: () => null,
        size: 124,
        enableSorting: false,
      }),
    ],
  }),
];
