/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomTable from "@/components/CustomTable/CustomTable";
import ManageBrandsForm from "./ManageBrandsForm";
import { useState } from "react";
import DeleteDialog from "@/components/Dialog/DeleteDialog";
import { Button } from "@/components/ui/button";
import useGetBrands from "@/api/brands/useGetBrands";
import useDeleteBrand from "@/api/brands/useDeleteBrand";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import type { ApiErrorResponse } from "@/interface";
const columns = [
  { accessor: "_id", label: "ID" },
  { accessor: "name", label: "Name" },
  {
    accessor: "image",
    label: "photo",
    render: (value: any) => (
      <img
        src={value}
        alt={`avatar -${value}`}
        className="h-10 w-10 rounded-full"
      />
    ),
  },
];
const ManageBrands = () => {
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: BrandData, refetch } = useGetBrands();
  const { mutate: deleteBrand } = useDeleteBrand();
  const handleEdit = () => {
    setOpen(!open);
  };

  const handleDelete = (row: any) => {
    setDeleteDialogOpen(!deleteDialogOpen);
    setDeleteId(row._id);
  };

  const confirmDelete = () => {
    if (deleteId)
      deleteBrand(deleteId, {
        onSuccess: () => {
          setDeleteDialogOpen(false);
          setDeleteId(null);
          refetch();
          toast.success("Brand deleted successfully", {
            duration: 2000,
            position: "top-center",
            icon: "👏",
          });
        },
        onError: (error) => {
          const axiosError = error as AxiosError<ApiErrorResponse>;
          toast.error(`${axiosError.response?.data.message}`, {
            duration: 2000,
            position: "top-center",
            icon: "😢",
          });
        },
      });
  };
  return (
    <>
      <CustomTable
        title="Add Brand"
        columns={columns}
        data={BrandData?.data || []}
        onEdit={handleEdit}
        onDelete={handleDelete}
        FormComponent={ManageBrandsForm}
        refetch={refetch}
      />

      {deleteDialogOpen && (
        <DeleteDialog
          open={deleteDialogOpen}
          setOpen={setDeleteDialogOpen}
          title="Delete Brand"
          description="This Action Can't be any thing now"
        >
          <div className="mt-2 flex gap-2">
            <Button variant={"outline"}>Cancel</Button>
            <Button
              onClick={() => {
                confirmDelete();
              }}
              variant={"destructive"}
            >
              Delete
            </Button>
          </div>
        </DeleteDialog>
      )}
    </>
  );
};

export default ManageBrands;
