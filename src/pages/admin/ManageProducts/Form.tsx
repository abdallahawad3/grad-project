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
  file: File | null;
};

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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

import { PRODUCT_SCHEMA } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import useGetAllCategories from "@/api/categories/useGetAllCategories";
import { useAddProduct } from "@/api/products/useAddProducts";
import useUpdateProduct from "@/api/products/useUpdateProduct";
import useGetSubCategories from "@/api/subcategories/useGetSubCategories";
import { MySelect } from "@/components/resuable/MySelect";
import useGetBrands from "@/api/brands/useGetBrands";

const ManageProductForm = ({
  open,
  setOpen,
  data,
  mode,
  refetch,
}: FormProps) => {
  const [image, setImage] = useState<ImageType[]>([]);
  const [images, setImages] = useState<ImageType[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const form = useForm<z.infer<typeof PRODUCT_SCHEMA>>({
    resolver: zodResolver(PRODUCT_SCHEMA),
    defaultValues: {
      availableColors: [],
      brand: [],
      title: "",
      category: "",
      description: "",
      quantity: "0",
      price: "0",
      subcategory: [],
    },
  });

  const onChange = (imageList: any) => {
    setImage(imageList);
  };
  const onChangeImages = (imageList: any) => {
    setImages(imageList);
  };

  useEffect(() => {
    if (mode === "edit" && data) {
      let colors: string[] = [];
      const raw = data.availableColors;
      if (Array.isArray(raw)) {
        if (
          typeof raw[0] === "string" &&
          raw.length === 1 &&
          raw[0].startsWith("[")
        )
          try {
            colors = JSON.parse(raw[0]);
          } catch {
            colors = [];
          }
        else colors = raw;
      }
      setEditId(data._id);
      setImage([{ data_url: data.imageCover, file: null }]);
      setImages(
        data.images.map((img: string) => ({ data_url: img, file: null }))
      );
      form.reset({
        title: data.title,
        category: data.category,
        description: data.description,
        quantity: data.quantity.toString(),
        price: data.price.toString(),
        availableColors: colors || [],
        priceAfterDiscount: data.priceAfterDiscount?.toString() || "",
        subcategory: data.subcategory || [],
        brand: data.brand || [],
      });
    }
  }, [data, mode, form]);

  // Api's Functions
  const { mutate: AddNewProduct } = useAddProduct();
  const { mutate: updateProduct } = useUpdateProduct();
  const { data: categoryData } = useGetAllCategories();
  const { data: subCategoryData } = useGetSubCategories();
  const { data: brandsData } = useGetBrands();
  // On Submit Handler //
  const onSubmit = async (data: z.infer<typeof PRODUCT_SCHEMA>) => {
    if (mode === "add") {
      if (image.length === 0) {
        toast("Please Upload Product Cover Image", {
          duration: 2000,
          position: "top-center",
          icon: "❌",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
          removeDelay: 1000,
        });
        return;
      }

      if (images.length === 0) {
        toast("Please Upload Product Additional Images", {
          duration: 2000,
          position: "top-center",
          icon: "❌",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
          removeDelay: 1000,
        });
        return;
      }
      AddNewProduct(
        {
          title: data.title,
          imageCover: image[0].file,
          images: images.map((img) => img.file as File),
          category: data.category,
          description: data.description,
          quantity: data.quantity.toString(),
          price: data.price.toString(),
          priceAfterDiscount: data.priceAfterDiscount?.toString(),
          availableColors: data.availableColors || undefined,
          subcategory: data.subcategory || [],
          brand: data.brand || [],
        },
        {
          onSuccess: () => {
            toast("Product Added Successfully", {
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
              setImage([]);
              setEditId(null);
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
      // Edit Product
      updateProduct(
        {
          id: editId as string,
          data: {
            title: data.title,
            imageCover: image[0].file,
            images: images.map((img) => img.file as File),
            category: data.category,
            description: data.description,
            quantity: data.quantity,
            price: data.price,
            priceAfterDiscount: data.priceAfterDiscount?.toString(),
            availableColors: data.availableColors || undefined,
            subcategory: data.subcategory || [],
            brand: data.brand || [],
          },
        },
        {
          onSuccess: () => {
            toast("Product Updated Successfully", {
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
              setEditId(null);
              setImage([]);
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
    }
  };

  const selectedCategory = form.watch("category");

  // Filter subcategories based on the selected category
  const filteredSubcategories =
    subCategoryData?.data?.filter(
      (subcategory: any) => subcategory.category === selectedCategory
    ) || [];
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        form.reset();
        setEditId(null);
        setImages([]);
        setImage([]);
      }}
    >
      <DialogContent
        className={`md:max-w-[70%] ${
          images.length > 0 ? "h-full" : "h-fit"
        } !overflow-y-scroll`}
      >
        <DialogHeader className="justify-center">
          <DialogTitle>
            {mode === "edit" ? "Edit Product" : "Add Product"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit" ? "Update product details" : "Add a new product"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Product Title"
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <MySelect
                selectLabel="Category"
                control={form.control}
                name="category"
                selectPlaceholder="Select a category"
                isMulti={false}
                data={
                  categoryData?.data?.map((category: any) => ({
                    value: category._id,
                    label: category.name,
                  })) || []
                }
                onValueChange={(value: any) => {
                  form.setValue("category", value);
                }}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="textarea"
                      placeholder="Product Description"
                      {...field}
                      className=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <MySelect
              control={form.control}
              name="subcategory"
              isMulti={true}
              selectLabel="Subcategories"
              selectPlaceholder="Select subcategories"
              data={filteredSubcategories.map((subcategory: any) => ({
                value: subcategory._id,
                label: subcategory.name,
              }))}
              onValueChange={(value: any) => {
                form.setValue("subcategory", value);
              }}
            />
            <MySelect
              control={form.control}
              name="availableColors"
              isMulti={true}
              selectLabel="Available Colors"
              selectPlaceholder="Select available colors"
              data={[
                { value: "#FF6B6B", label: "Coral Red" },
                { value: "#6BCB77", label: "Mint Green" },
                { value: "#4D96FF", label: "Sky Blue" },
                { value: "#FFD93D", label: "Sunny Yellow" },
                { value: "#845EC2", label: "Royal Purple" },
                { value: "#00C9A7", label: "Turquoise Green" },
                { value: "#C34A36", label: "Burnt Orange" },
                { value: "#2C73D2", label: "Ocean Blue" },
                { value: "#D65DB1", label: "Pink Orchid" },
                { value: "#008F7A", label: "Deep Teal" },
              ]}
              onValueChange={(value: any) => {
                form.setValue("availableColors", value);
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Product Price"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priceAfterDiscount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Price After Discount"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <MySelect
              control={form.control}
              name="brand"
              isMulti={true}
              selectLabel="Brand"
              selectPlaceholder="Select a brand"
              data={
                brandsData?.data?.map((brand: any) => ({
                  value: brand._id,
                  label: brand.name,
                })) || []
              }
              onValueChange={(value: any) => {
                form.setValue("brand", value);
              }}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Product Quantity"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <UploadImage
              isMultiple={false}
              images={image as never}
              onChange={onChange}
              title="Product Cover Image"
            />

            <UploadImage
              isMultiple={true}
              images={images as never}
              onChange={onChangeImages}
              title="Product Additional Images"
            />
            <DialogFooter>
              <Button
                type="button"
                onClick={() => {
                  setOpen(false);
                  form.reset();
                  setEditId(null);
                  setImages([]);
                  setImage([]);
                }}
                variant={"outline"}
              >
                Close
              </Button>
              <Button type="submit">
                {mode == "add" ? "Add New Product" : "Edit Product"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ManageProductForm;
