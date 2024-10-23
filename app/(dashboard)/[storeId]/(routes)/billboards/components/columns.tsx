"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type BillboardCollumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardCollumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
