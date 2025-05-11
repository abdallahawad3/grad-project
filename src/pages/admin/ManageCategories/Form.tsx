/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  mode: "add" | "edit";
  data?: Record<string, any> | null;
  refetch: () => void;
}
type ImageType = {
  data_url: string;
  file: File;
};
import { useAddCategory } from "@/api/categories";
import UploadImage from "@/components/Images/UploadImage";
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
import toast from "react-hot-toast";

import { CATEGORY_SCHEMA } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import useUpdateCategory from "@/api/categories/useUpdateCategory";

const ManageCategoryForm = ({
  open,
  setOpen,
  data,
  mode,
  refetch,
}: FormProps) => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const form = useForm<z.infer<typeof CATEGORY_SCHEMA>>({
    resolver: zodResolver(CATEGORY_SCHEMA),
    defaultValues: {
      name: "",
    },
  });

  const onChange = (imageList: any) => {
    setImages(imageList);
  };
  // Api's Functions
  const { mutate: AddNewCategory } = useAddCategory();
  const { mutate: UpdateCategory } = useUpdateCategory();
  // If There are data
  useEffect(() => {
    if (mode === "edit" && data) {
      form.setValue("name", data.name);
      if (data.image) {
        setImages([{ data_url: data.image, file: null as unknown as File }]);
      }
      setEditId(data._id);
    }
  }, [form, mode, data]);

  // On Submit Handler //
  const onSubmit = async (data: z.infer<typeof CATEGORY_SCHEMA>) => {
    if (mode === "add") {
      AddNewCategory(
        { name: data.name, image: images[0].file },
        {
          onSuccess: () => {
            toast("Category Added Successfully", {
              duration: 2000,
              position: "top-center",
              icon: "✅",
              iconTheme: {
                primary: "#000",
                secondary: "#fff",
              },
              removeDelay: 1000,
            });
            setTimeout(() => {
              form.reset();
              setImages([]);
              setOpen(false);
            }, 1000);
            refetch();
          },
          onError: (error) => {
            toast(`${error.response?.data.message}`, {
              duration: 2000,
              position: "top-center",
              icon: "❌",
              iconTheme: {
                primary: "#000",
                secondary: "#fff",
              },
              removeDelay: 1000,
            });
          },
        }
      );
    } else {
      UpdateCategory(
        {
          data: {
            image: images[0].file,
            name: data.name,
          },
          id: editId as string,
        },
        {
          onSuccess: () => {
            toast("Category Updated Successfully", {
              duration: 2000,
              position: "top-center",
              icon: "✅",
              iconTheme: {
                primary: "#000",
                secondary: "#fff",
              },
              removeDelay: 1000,
            });
            refetch();
            setEditId(null);
            setOpen(false);
            form.reset();
          },
        }
      );
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        form.reset();
        setEditId(null);
        setImages([]);
      }}
    >
      <DialogContent className="md:max-w-[40%]">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit Category" : "Add Category"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit" ? "Update category details" : "Add a new category"}
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
                    <Input placeholder="Electronics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="">
              <UploadImage
                isMultiple={false}
                images={images as never}
                onChange={onChange}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={() => {
                  setOpen(false);
                  form.reset();
                  setEditId(null);
                  setImages([]);
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

export default ManageCategoryForm;
