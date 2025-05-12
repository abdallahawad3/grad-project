/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomTable from "@/components/CustomTable/CustomTable";
import SubCategoriesForm from "./SubCategoriesForm";
import useGetSubCategories from "@/api/subcategories/useGetSubCategories";
import DeleteDialog from "@/components/Dialog/DeleteDialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useDeleteSubCategory from "@/api/subcategories/useDeleteSubCategory";
import toast from "react-hot-toast";
const columns = [
  {
    accessor: "_id",
    label: "ID",
  },
  {
    accessor: "name",
    label: "Name",
  },
];
const ManageSubCategories = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { data: subCategories, refetch } = useGetSubCategories();
  const { mutate: deleteSubCategory } = useDeleteSubCategory();

  const handleDelete = (row: any) => {
    setOpen(!open);
    setDeleteId(row._id);
  };

  const handleDeleteConfirm = () => {
    if (deleteId)
      deleteSubCategory(deleteId, {
        onSuccess: () => {
          toast.success("Sub Category Deleted Successfully", {
            duration: 2000,
            position: "top-center",
            style: {
              background: "#333",
              color: "#fff",
            },
            icon: "✔️",
          });
          refetch();
          setDeleteId(null);
          setOpen(false);
        },
      });
  };
  return (
    <>
      <CustomTable
        data={subCategories?.data || []}
        columns={columns}
        title="Add Sub Categories"
        FormComponent={SubCategoriesForm}
        refetch={refetch}
        onDelete={handleDelete}
        onEdit={() => {}}
      />

      <>
        <DeleteDialog
          open={open}
          setOpen={setOpen}
          description="This action cannot be undone. Are you sure you want to delete this sub category?"
          title="Delete Sub Category"
        >
          <div>
            <Button
              onClick={() => {
                setOpen(false);
                setDeleteId(null);
              }}
              variant={"ghost"}
            >
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} variant={"destructive"}>
              Delete
            </Button>
          </div>
        </DeleteDialog>
      </>
    </>
  );
};

export default ManageSubCategories;
