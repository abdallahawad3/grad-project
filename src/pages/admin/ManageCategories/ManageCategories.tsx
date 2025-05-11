/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomTable from "@/components/CustomTable/CustomTable";
import { useState } from "react";
import ManageCategoryForm from "./Form";
import useGetAllCategories from "@/api/categories/useGetAllCategories";
import DeleteDialog from "@/components/Dialog/DeleteDialog";
import useDeleteCategory from "@/api/categories/useDeleteCategory";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
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

const ManageCategories = () => {
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Mutations
  const { data: categoryData, refetch } = useGetAllCategories();
  const { mutate: deleteCategory } = useDeleteCategory();
  const handleEdit = () => {
    setOpen(!open);
  };

  const handleDelete = (row: any) => {
    setDeleteDialogOpen(!deleteDialogOpen);
    setDeleteId(row._id);
  };

  const confirmDelete = () => {
    if (deleteId)
      deleteCategory(deleteId, {
        onSuccess: () => {
          toast("Delete Category Done", {
            duration: 2000,
            icon: "✔",
          });
          setDeleteDialogOpen(false);
          setDeleteId(null);
          refetch();
        },
      });
  };

  return (
    <>
      <CustomTable
        columns={columns}
        data={categoryData?.data || []}
        onEdit={handleEdit}
        onDelete={handleDelete}
        FormComponent={ManageCategoryForm}
        refetch={refetch}
      />

      {deleteDialogOpen && (
        <DeleteDialog
          open={deleteDialogOpen}
          setOpen={setDeleteDialogOpen}
          title="Delete Category"
          description="This Action Can't be any thing now"
        >
          <div className="mt-2 flex gap-2">
            <Button
              onClick={() => {
                setDeleteDialogOpen(false);
                setDeleteId(null);
              }}
              variant={"outline"}
            >
              Cancel
            </Button>
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

export default ManageCategories;
