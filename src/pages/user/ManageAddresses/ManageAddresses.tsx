/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomTable from "@/components/CustomTable/CustomTable";
import DeleteDialog from "@/components/Dialog/DeleteDialog";
import { Button } from "@/components/ui/button";
import ManageAddressesForm from "./ManageAddressesForm";
import { useState } from "react";
import useGetAddresses from "@/api/addresses/useGetAddresses";
import useDeleteAddress from "@/api/addresses/useDeleteAddress";
import toast from "react-hot-toast";
const columns = [
  { accessor: "_id", label: "ID" },
  { accessor: "alias", label: "City" },
  { accessor: "details", label: "Details" },
  { accessor: "phone", label: "Phone" },
];
const ManageAddresses = () => {
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { refetch, data } = useGetAddresses();
  const { mutate: deleteAddress } = useDeleteAddress();
  const handleEdit = () => {
    setOpen(!open);
  };

  const handleDelete = (row: any) => {
    setDeleteDialogOpen(!deleteDialogOpen);
    setDeleteId(row._id);
  };

  const confirmDelete = () => {
    if (deleteId)
      deleteAddress(deleteId, {
        onSuccess: () => {
          toast.success("Address deleted successfully");
          setDeleteId(null);
          setDeleteDialogOpen(false);
          refetch();
        },
        onError: () => {},
      });
  };
  return (
    <>
      <CustomTable
        title="Add Address"
        columns={columns}
        data={data?.data || []}
        onEdit={handleEdit}
        onDelete={handleDelete}
        FormComponent={ManageAddressesForm}
        refetch={refetch}
      />

      {deleteDialogOpen && (
        <DeleteDialog
          open={deleteDialogOpen}
          setOpen={setDeleteDialogOpen}
          title="Delete Address"
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

export default ManageAddresses;
