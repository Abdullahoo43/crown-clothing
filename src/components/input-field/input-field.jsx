import { Group, InputLabel, Input } from "./input-field.styles.jsx";

const InputField = ({ label, groupClassName, ...otherProps }) => {
  return (
    <Group className={groupClassName}>
      {label && <InputLabel>{label}</InputLabel>}
      <Input {...otherProps} />
    </Group>
  );
};

export default InputField;
