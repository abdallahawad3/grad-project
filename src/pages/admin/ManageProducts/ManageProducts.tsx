/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomTable from "@/components/CustomTable/CustomTable";
import type { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { GripVerticalIcon, MoreVerticalIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSortable } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/config/axios.config";
import ManageProductsForm from "./Form";

// Columns schema for the table
const schema = z.object({
  id: z.number(),
  name: z.string(),
  photo: z.string(),
  description: z.string(),
  category: z.string(),
});

// Create a separate component for the drag handle
function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({
    id,
  });

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="size-7 text-muted-foreground hover:bg-transparent"
    >
      <GripVerticalIcon className="size-3 text-muted-foreground" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  );
}

const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <div className="flex items-center space-x-2">
          <DragHandle id={id} />
          <span>{row.getValue("name")}</span>
        </div>
      );
    },
  },

  {
    id: "photo",
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <img
            src={row.getValue("photo")}
            alt="Product"
            className="h-10 w-10 rounded-md"
          />
        </div>
      );
    },
  },

  {
    id: "description",
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <span>{row.getValue("description")}</span>
        </div>
      );
    },
  },

  {
    id: "category",
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <span>{row.getValue("category")}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
              size="icon"
            >
              <MoreVerticalIcon />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <ManageProductsForm
              initialValues={{ name: product.name, price: 200 }}
              onSubmit={(data) => {
                console.log("Product ID:", product.id);
                console.log("Form Data:", data);
              }}
            >
              {/* <DropdownMenuItem asChild> */}
              <Button variant={"ghost"} className="w-full text-left">
                Edit
              </Button>
              {/* </DropdownMenuItem> */}
            </ManageProductsForm>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                console.log("Delete product:", product.id);
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const ManageProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from the API and update the table data
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get("/products");
        setData(data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const getImageUrl = (image: string) => {
    const idx = image.lastIndexOf("\\");
    return image.substring(idx);
  };
  return (
    <>
      <CustomTable
        schema={schema}
        columns={columns}
        data={
          data.length > 0
            ? data.map((item: any) => ({
                id: item.id,
                name: item.name,
                photo: getImageUrl(item.images[0]),
                description: item.description,
                category: item.brandName,
              }))
            : []
        }
      />
    </>
  );
};
export default ManageProducts;
