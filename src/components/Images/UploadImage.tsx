/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageUploading from "react-images-uploading";
import { Button } from "../ui/button";
interface ImageType {
  images: [];
  onChange: (imageList: any) => void;
  isMultiple: boolean;
}
const UploadImage = ({ images, onChange, isMultiple }: ImageType) => {
  const maxNumber = 69;

  return (
    <div>
      <ImageUploading
        multiple={isMultiple}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="space-y-4 ">
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-dashed border-2"
                type="button"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                {isMultiple ? "Click or Drop Images" : "Click or Drop Image"}
              </Button>
              {imageList.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={onImageRemoveAll}
                >
                  Remove All
                </Button>
              )}
            </div>

            <div
              className={`w-[100%] grid gap-4 ${
                isMultiple
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1 w-full"
              }`}
            >
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-md overflow-hidden border shadow group"
                >
                  <img
                    src={image["data_url"]}
                    alt={`uploaded-${index}`}
                    className="w-full h-[250px]  object-contain"
                  />
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                    <Button
                      size="sm"
                      type="button"
                      variant="secondary"
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </Button>
                    <Button
                      size="sm"
                      type="button"
                      variant="destructive"
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default UploadImage;
