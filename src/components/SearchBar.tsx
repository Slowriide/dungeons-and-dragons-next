import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface Props {
  placeholder?: string;
}

export const SearchBar = ({ placeholder }: Props) => {
  return (
    <div className="relative w-full items-center justify-center max-w-xl  mr-2">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input className="pl-10" placeholder={placeholder} />
    </div>
  );
};
