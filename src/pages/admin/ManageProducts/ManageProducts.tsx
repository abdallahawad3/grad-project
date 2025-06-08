/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomTable from "@/components/CustomTable/CustomTable";
import { useState } from "react";
import DeleteDialog from "@/components/Dialog/DeleteDialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import useGetAllProducts from "@/api/products/useGetAllProducts";
import ManageProductForm from "./Form";
import useDeleteProduct from "@/api/products/useDeleteProduct";
const columns = [
  { accessor: "_id", label: "ID" },
  { accessor: "title", label: "Title" },
  {
    accessor: "imageCover",
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

const ManageProducts = () => {
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Mutations
  const { data: productsData, refetch } = useGetAllProducts();
  const { mutate: deleteProduct } = useDeleteProduct();
  const handleEdit = () => {
    setOpen(!open);
  };

  const handleDelete = (row: any) => {
    setDeleteDialogOpen(!deleteDialogOpen);
    setDeleteId(row._id);
  };

  const confirmDelete = () => {
    if (deleteId)
      deleteProduct(deleteId, {
        onSuccess: () => {
          toast("Delete Product Done", {
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
        data={productsData?.data || []}
        onEdit={handleEdit}
        onDelete={handleDelete}
        FormComponent={ManageProductForm}
        refetch={refetch}
        title="Add Product"
      />

      {deleteDialogOpen && (
        <DeleteDialog
          open={deleteDialogOpen}
          setOpen={setDeleteDialogOpen}
          title="Delete Product"
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

export default ManageProducts;
