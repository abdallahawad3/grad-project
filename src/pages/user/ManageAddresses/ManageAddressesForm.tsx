/* eslint-disable @typescript-eslint/no-explicit-any */
import useAddAddress from "@/api/addresses/useAddAddress";
import useUpdateAddress from "@/api/addresses/useUpdateData";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ADDRESS_SCHEMA } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { z } from "zod";
interface FormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  mode: "add" | "edit";
  data?: Record<string, any> | null;
  refetch: () => void;
}

const ManageAddressesForm = ({
  mode,
  open,
  refetch,
  setOpen,
  data,
}: FormProps) => {
  const [editId, setEditId] = useState<string | null>(null);
  const form = useForm<z.infer<typeof ADDRESS_SCHEMA>>({
    resolver: zodResolver(ADDRESS_SCHEMA),
    defaultValues: {
      alias: "",
      details: "",
      phone: "",
      postalCode: "",
    },
  });

  // ✔✅✅--------------------------------------------------------------------------------------------------✔✅✅
  // --- Api's Functions Call ---
  const { mutate: addAddress } = useAddAddress();
  const { mutate: updateAddress } = useUpdateAddress();
  // --- SET DATA IN EDIT MODE ---

  // On Submit Handler //
  const onSubmit = async (data: z.infer<typeof ADDRESS_SCHEMA>) => {
    if (mode == "add") {
      addAddress(data, {
        onSuccess: () => {
          toast.success("Address added successfully", {
            duration: 2000,
          });
          refetch();
          setOpen(false);
          form.reset();
        },
        onError: (error) => {
          toast.error(`${error}`);
        },
      });
    } else {
      if (!editId) return;
      updateAddress(
        { data, addressId: editId },
        {
          onSuccess: () => {
            toast.success("Address updated successfully", {
              duration: 2000,
            });
            refetch();
            setOpen(false);
            form.reset();
          },
          onError: (error) => {
            toast.error(`${error}`);
          },
        }
      );
    }
  };

  useEffect(() => {
    if (open && mode === "edit" && data) {
      setEditId(data._id);
      form.reset({
        alias: data.alias || "",
        details: data.details || "",
        phone: data.phone || "",
        postalCode: data.postalCode || "",
      });
    } else if (!open) {
      form.reset();
      setEditId(null);
    }
  }, [open, form, mode, data]);

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        form.reset();
        setEditId(null);
      }}
    >
      <DialogContent className="md:max-w-[40%]">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit Address" : "Add Address"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit" ? "Update Address details" : "Add a new address"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="alias"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Menofia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Details</FormLabel>
                  <FormControl>
                    <Input placeholder="Street, Building, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="12345" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0123456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                onClick={() => {
                  setOpen(false);
                  form.reset();
                  setEditId(null);
                }}
                variant={"outline"}
              >
                Close
              </Button>
              <Button type="submit">
                {mode == "add" ? "Add New Address" : "Edit Address"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ManageAddressesForm;
