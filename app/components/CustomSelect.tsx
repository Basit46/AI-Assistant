import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CustomSelect({
  value,
  setValue,
  placeholder,
  data,
}: {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  data: { label: string; value: string }[];
}) {
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder={value || placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((item, i) => (
          <SelectItem key={i} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
