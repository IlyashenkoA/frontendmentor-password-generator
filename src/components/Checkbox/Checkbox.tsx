import { ChangeEvent } from 'react';
import './Checkbox.scss';

export const Checkbox: React.FC<{ label: string; id: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; }> = ({ label, id, onChange }) => {
  return (
    <label className="checkbox__container">
      <label className="checkbox__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="checkbox__input"
        type="checkbox"
        onChange={onChange}
      />
      <span className="checkbox__checkmark"></span>
    </label>
  );
};