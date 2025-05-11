import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
interface IProps {
  title: string;
  description: string;
  children: ReactNode;
  open: boolean;
  setOpen: (val: boolean) => void;
}

const DeleteDialog = ({
  open,
  setOpen,
  description,
  title,
  children,
}: IProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description} </DialogDescription>
        </DialogHeader>
        <DialogFooter>{children}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
