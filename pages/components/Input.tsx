import { DetailsHTMLAttributes, FC } from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";
interface InputProps extends AntInputProps {
  _inputContainerProps?: DetailsHTMLAttributes<HTMLDivElement>;
  _inputLabelProps?: DetailsHTMLAttributes<HTMLLabelElement>;
  label: string;
}

const Input: FC<InputProps> = ({
  label,
  _inputContainerProps,
  _inputLabelProps,
  ...props
}) => {
  return (
    <div className="w-full" {..._inputContainerProps}>
      <label
        className="font-semibold !text-md md:text-base"
        {..._inputLabelProps}
      >
        {label}
      </label>
      <AntInput className="mt-2 rounded-md md:text-lg" {...props} />
    </div>
  );
};

export default Input;
