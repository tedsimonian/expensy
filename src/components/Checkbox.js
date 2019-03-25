import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, children }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={() => onCheckboxChange(label)}
        className="form-check-input"
      />
    </label>
    {children}
  </div>
);

export default Checkbox;
