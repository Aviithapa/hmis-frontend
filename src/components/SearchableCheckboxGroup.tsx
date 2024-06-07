import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";

interface CheckboxOption {
  label: string;
  value: string;
}

interface SearchableCheckboxGroupProps {
  options: CheckboxOption[];
  value?: string[];
  onChange?: (checkedValue: any) => void;
  searchTerm: string;
}

const SearchableCheckboxGroup: React.FC<SearchableCheckboxGroupProps> = ({
  options,
  value = [],
  onChange,
  searchTerm,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  // Avoid unnecessary updates by comparing the current value with the state
  useEffect(() => {
    if (value !== selectedValues) {
      setSelectedValues(value || []);

    }
  }, [value]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (checkedValues: string[]) => {
    const newSelectedValues = Array.from(
      new Set([
        ...checkedValues,
        ...selectedValues.filter(
          (v) => !filteredOptions.some((option) => option.value === v)
        ),
      ])
    );
    setSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  return (
    <div>
      <Checkbox.Group
        options={filteredOptions}
        value={selectedValues.filter((v) =>
          filteredOptions.some((option) => option.value === v)
        )}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchableCheckboxGroup;


















