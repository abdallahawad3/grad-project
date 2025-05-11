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
import useAddBrand from "@/api/brands/useAddBrand";
import useUpdateBrand from "@/api/brands/useUpdateBrand";
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
import type { ApiErrorResponse } from "@/interface";

import { BRAND_SCHEMA } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { z } from "zod";

const ManageBrandsForm = ({
  open,
  setOpen,
  data,
  mode,
  refetch,
}: FormProps) => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const form = useForm<z.infer<typeof BRAND_SCHEMA>>({
    resolver: zodResolver(BRAND_SCHEMA),
    defaultValues: {
      name: "",
    },
  });

  const onChange = (imageList: any) => {
    setImages(imageList);
  };
  // ✔✅✅--------------------------------------------------------------------------------------------------✔✅✅
  // --- Api's Functions Call ---
  const { mutate: addBrand } = useAddBrand();
  const { mutate: updateBrand } = useUpdateBrand();
  // --- SET DATA IN EDIT MODE ---

  // On Submit Handler //
  const onSubmit = async (data: z.infer<typeof BRAND_SCHEMA>) => {
    if (mode == "add") {
      addBrand(
        {
          name: data.name,
          image: images[0].file,
        },
        {
          onSuccess: () => {
            toast.success("Brand Added Successfully", {
              duration: 2000,
              icon: "👏",
              position: "top-center",
              style: {
                backgroundColor: "#4caf50",
                color: "#fff",
              },
            });
            refetch();
            setOpen(false);
            form.reset();
            setEditId(null);
            setImages([]);
          },
          onError: (error) => {
            toast.error(`${error.response?.data.message}`, {
              duration: 2000,
              icon: "😢",
              position: "top-center",
              style: {
                backgroundColor: "#f44336",
                color: "#fff",
              },
            });
          },
        }
      );
    } else {
      updateBrand(
        {
          brandData: {
            name: data.name,
            image: images[0].file,
          },
          brandId: editId as string,
        },
        {
          onSuccess: () => {
            toast.success("Brand Updated Successfully", {
              duration: 2000,
              icon: "👏",
              position: "top-center",
              style: {
                backgroundColor: "#4caf50",
                color: "#fff",
              },
            });
            refetch();
            setOpen(false);
            form.reset();
            setEditId(null);
            setImages([]);
          },
          onError: (error) => {
            const axiosError = error as AxiosError<ApiErrorResponse>;
            toast.error(`${axiosError.response?.data.message}`, {
              duration: 2000,
              icon: "😢",
              position: "top-center",
              style: {
                backgroundColor: "#f44336",
                color: "#fff",
              },
            });
          },
        }
      );
    }
  };

  useEffect(() => {
    if (open && mode === "edit" && data) {
      form.setValue("name", data.name);
      if (data.image) {
        setImages([{ data_url: data.image, file: null as unknown as File }]);
      }
      setEditId(data._id);
    } else if (!open) {
      form.reset();
      setEditId(null);
      setImages([]);
    }
  }, [open, form, mode, data]);

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
            {mode === "edit" ? "Edit Brand" : "Add Brand"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit" ? "Update brand details" : "Add a new brand"}
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
                    <Input placeholder="Zara" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
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
                {mode == "add" ? "Add New Brand" : "Edit Brand"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ManageBrandsForm;
