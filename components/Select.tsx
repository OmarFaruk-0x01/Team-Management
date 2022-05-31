import { FC } from "react";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import { CountryType } from "../constants/countries";
const { Option } = AntSelect;

interface SelectProps extends AntSelectProps {
  data: CountryType[];
  label: string;
}

const Select: FC<SelectProps> = ({ data, label, ...props }) => {
  return (
    <div className="w-full">
      <label className="font-semibold !text-md md:text-base">{label}</label>
      <AntSelect
        style={{ width: "100%" }}
        className="mt-2 md:text-md "
        placeholder="Select Country"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string).includes(input)
        }
        filterSort={(optionA, optionB) =>
          (optionA!.children as unknown as string)
            .toLowerCase()
            .localeCompare(
              (optionB!.children as unknown as string).toLowerCase()
            )
        }
        {...props}
      >
        {data.map((d) => (
          <Option key={d.code} value={d.code}>
            {d.name}
          </Option>
        ))}
      </AntSelect>
    </div>
  );
};

export default Select;
