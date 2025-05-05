import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC } from "react";

interface GroupInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const GroupInput: FC<GroupInputProps> = ({ label, value, setValue }) => {
  return (
    <div className="group grid grid-cols-12">
      <Label htmlFor={label.trim()} className="text-gray-900 col-span-3">
        {label}
      </Label>
      <Input
        name={label.trim()}
        id={label.trim()}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="col-span-9 rounded-md"
      />
    </div>
  );
};

export default GroupInput;
