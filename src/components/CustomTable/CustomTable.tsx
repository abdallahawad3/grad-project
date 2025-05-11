/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type ComponentType } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { PlusIcon } from "lucide-react";
import Divider from "../ui/Divider";
import { useState } from "react";
type Column = {
  accessor: string;
  label: string;
  render?: (value: any, row: Record<string, any>) => React.ReactNode;
};

type CustomTableProps = {
  columns: Column[];
  data: Record<string, any>[];
  onEdit?: (row: Record<string, any>) => void;
  onDelete?: (row: Record<string, any>) => void;
  refetch: () => void;
  FormComponent: ComponentType<FormComponentProps>;
};

type FormComponentProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: Record<string, any> | null;
  mode: "add" | "edit";
  refetch: () => void;
};

const CustomTable = ({
  columns,
  data,
  onEdit,
  onDelete,
  refetch,
  FormComponent,
}: CustomTableProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Record<string, any> | null>(
    null
  );
  const [mode, setMode] = useState<"add" | "edit">("add");

  const handleAdd = () => {
    setMode("add");
    setSelectedRow(null);
    setDialogOpen(true);
  };

  const handleEdit = (row: Record<string, any>) => {
    setMode("edit");
    setSelectedRow(row);
    setDialogOpen(true);
    onEdit?.(row);
  };

  return (
    <div className="p-4 border shadow-sm rounded-md">
      <div className="text-end mb-2">
        <Button onClick={handleAdd}>
          Add Category <PlusIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <Divider dividerColor="#0A947C" height="2px" />
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.accessor}>{col.label}</TableHead>
            ))}
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col) => (
                <TableCell key={col.accessor}>
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : row[col.accessor]}
                </TableCell>
              ))}
              <TableCell className="text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Button variant="myButton" onClick={() => handleEdit(row)}>
                    Edit
                  </Button>
                  <Button variant="destructive" onClick={() => onDelete?.(row)}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FormComponent
        open={dialogOpen}
        setOpen={setDialogOpen}
        data={selectedRow}
        mode={mode}
        refetch={refetch}
      />
    </div>
  );
};

export default CustomTable;
