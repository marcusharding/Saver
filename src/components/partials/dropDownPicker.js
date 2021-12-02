// React
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownSelector = ({types, setTypes, type, setType}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={type}
      items={types}
      setOpen={setOpen}
      setValue={setType}
      setItems={setTypes}
    />
  );
};

export default DropDownSelector;
