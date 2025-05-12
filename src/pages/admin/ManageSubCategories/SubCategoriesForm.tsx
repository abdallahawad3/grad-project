/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  mode: "add" | "edit";
  data?: Record<string, any> | null;
  refetch: () => void;
}

import useGetAllCategories from "@/api/categories/useGetAllCategories";
import useAddSubCategory from "@/api/subcategories/useAddSubCategory";
import useUpdateSubCategory from "@/api/subcategories/useUpdateSubCategory";
import { MySelect } from "@/components/resuable/MySelect";
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

import { SUB_CATEGORY_SCHEMA } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { z } from "zod";

const SubCategoriesForm = ({
  open,
  setOpen,
  data,
  mode,
  refetch,
}: FormProps) => {
  const [editId, setEditId] = useState<string | null>(null);
  const form = useForm<z.infer<typeof SUB_CATEGORY_SCHEMA>>({
    resolver: zodResolver(SUB_CATEGORY_SCHEMA),
    defaultValues: {
      name: "",
      category: "",
    },
  });
  // Get All Categories //
  const { data: allCategories } = useGetAllCategories();
  const { mutate: addSubCategory } = useAddSubCategory();
  const { mutate: editSubCategory } = useUpdateSubCategory();
  // On Submit Handler //
  const onSubmit = async (data: z.infer<typeof SUB_CATEGORY_SCHEMA>) => {
    if (mode == "add") {
      addSubCategory(
        {
          name: data.name,
          category: data.category,
        },
        {
          onSuccess: () => {
            toast.success("Sub Category Added Successfully", {
              duration: 2000,
              position: "top-center",
              style: {
                background: "#333",
                color: "#fff",
              },
              icon: "✔️",
            });
            setOpen(false);
            form.reset();
            refetch();
          },
          onError: (error) => {
            toast.error(`${error.response?.data.message}`, {
              duration: 2000,
              position: "top-center",
              style: {
                background: "#333",
                color: "#fff",
              },
              icon: "❌",
            });
          },
        }
      );
    } else {
      editSubCategory(
        {
          name: data.name,
          category: data.category,
          id: editId as string,
        },
        {
          onSuccess: () => {
            toast.success("Sub Category Updated Successfully", {
              duration: 2000,
              position: "top-center",
              style: {
                background: "#333",
                color: "#fff",
              },
              icon: "✔️",
            });
            setOpen(false);
            form.reset();
            refetch();
          },
          onError: (error) => {
            toast.error(`${error.response?.data.message}`, {
              duration: 2000,
              position: "top-center",
              style: {
                background: "#333",
                color: "#fff",
              },
              icon: "❌",
            });
          },
        }
      );
    }
  };

  useEffect(() => {
    if (open && mode === "edit" && data) {
      form.setValue("name", data.name);
      form.setValue("category", data.category);
      setEditId(data._id);
      setEditId(data._id);
    } else if (!open) {
      form.reset();
      setEditId(null);
    }
  }, [form, data, mode, open]);

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
            {mode === "edit" ? "Edit SubCategory" : "Add Sub Category"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit"
              ? "Update sub category details"
              : "Add a new sub category"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Sub-Category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full">
              <MySelect
                onValueChange={(value) => {
                  form.setValue("category", value);
                }}
                control={form.control}
                name="category"
                data={
                  allCategories?.data.map((item) => {
                    return {
                      value: item._id,
                      label: item.name,
                    };
                  }) || []
                }
                selectLabel="Select Category"
                selectPlaceholder="Select Category"
              />
            </div>

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
                {mode == "add" ? "Add New Category" : "Edit Category"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SubCategoriesForm;
