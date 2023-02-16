import { ChangeEvent } from 'react';
import './Checkbox.scss';

export const Checkbox: React.FC<{ label: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; }> = ({ label, onChange }) => {
  return (
    <label className="checkbox__container">
      <label className="checkbox__label" htmlFor={label}>
        {label}
      </label>

      <input
        id={label}
        className="checkbox__input"
        type="checkbox"
        onChange={onChange}
      />
      <span className="checkbox__checkmark"></span>
    </label>
  );
};