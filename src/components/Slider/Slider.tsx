import { Dispatch, SetStateAction } from 'react';
import './Slider.scss';

interface ISliderProps {
  passwordLength: number;
  onChange: Dispatch<SetStateAction<number>>;
}

export const Slider = ({ passwordLength, onChange }: ISliderProps) => {
  return (
    <div className="password__length">
      <div className="password__info">
        <label className="password__label">Character Length</label>
        <span className="password__length-text">{passwordLength}</span>
      </div>
      <input
        className="password__slider"
        type='range'
        min='0'
        max='20'
        value={passwordLength}
        onChange={(e) => {
          const progressBar =
            ((+e.target.value - +e.target.min)
              / (+e.target.max - +e.target.min)) * 100;

          document.documentElement.style.setProperty('--progress-bar-percent', `${progressBar}%`);
          onChange(+e.target.value);
        }}
      />
    </div>
  );
};