import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { IPage } from "@/interface";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SelectItems({ pages }: { pages: IPage[] }) {
  const navigate = useNavigate();

  const handleSelect = (pageURL: string) => {
    navigate(pageURL);
  };

  return (
    <Select
      onValueChange={(value) => {
        const selectedPage = pages.find((page) => page.title === value);
        if (selectedPage) {
          handleSelect(selectedPage.PageURL);
        }
      }}
    >
      <SelectTrigger className="outline-none flex items-center gap-5 py-7 bg-success-400 text-white rounded-none shadow-none focus:border-none focus:ring-0 border-none">
        <Menu />
        <SelectValue
          placeholder="All Category"
          className="placeholder:text-white text-white"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="outline-none border-r-success-50">
          {pages.map((page) => (
            <SelectItem key={page.title} value={page.title}>
              {page.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
