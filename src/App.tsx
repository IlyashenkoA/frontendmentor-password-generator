import { passwordStrength } from 'check-password-strength';
import { generate } from 'generate-password-browser';
import { useEffect, useState } from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Slider } from './components/Slider/Slider';

const passwordIncludes = [
  {
    label: 'Include Uppercase Letters',
    type: 'upperCase',

  }, {
    label: 'Include Lowercase Letters',
    type: 'lowerCase',

  }, {
    label: 'Include Numbers',
    type: 'numbers',

  }, {
    label: 'Include Symbols',
    type: 'symbols',
  }
];

const defaultOptions = [
  {
    id: 0,
    value: "Too weak!",
    length: 1
  },
  {
    id: 1,
    value: "Weak",
    length: 2
  },
  {
    id: 2,
    value: "Medium",
    length: 3
  },
  {
    id: 3,
    value: "Strong",
    length: 4
  }
];

const strengthIndicator: { [key: string]: { length: number, class: string; }; } = {
  'Too weak!': {
    length: 1,
    class: 'too-weak'
  },
  'Weak': {
    length: 2,
    class: 'weak'
  },
  'Medium': {
    length: 3,
    class: 'medium'
  },
  'Strong': {
    length: 4,
    class: 'strong'
  },
};

const App = () => {
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [passwordInclude, setPasswordInclude] = useState<Record<string, boolean>>(
    passwordIncludes.reduce((obj, include) => ({ ...obj, [include.type]: false }), {})
  );
  const [password, setPassword] = useState<string>('');
  const [passwordStrengthIndicator, setPasswordStrengthIndicator] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true);
      });
  };

  const generatePassword = () => {
    const password = generate({
      length: passwordLength,
      numbers: passwordInclude.numbers,
      uppercase: passwordInclude.upperCase,
      lowercase: passwordInclude.lowerCase,
      symbols: passwordInclude.symbols,
    });

    if (password) {
      setPassword(password);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    setPasswordStrengthIndicator(
      passwordStrength(password, [{
        id: 0,
        value: "Too weak!",
        minDiversity: 0,
        minLength: 0
      },
      {
        id: 1,
        value: "Weak",
        minDiversity: 2,
        minLength: 6
      },
      {
        id: 2,
        value: "Medium",
        minDiversity: 3,
        minLength: 8
      },
      {
        id: 3,
        value: "Strong",
        minDiversity: 4,
        minLength: 10
      }]).value
    );
  }, [password]);

  return (
    <div className='password__generator'>
      <h1 className='password__generator-title'>
        Password Generator
      </h1>
      <div>
        <div className="password__generator-result">
          <h1 className={
            `result__text 
            ${password === '' || Object.values(passwordInclude).every((include) => include === false)
              ? 'hidden'
              : ''}`
          }>
            {password === '' && passwordLength >= 0 ? 'PTx1F5DaFX' : password}
          </h1>
          <div className='result__copy'>
            <p className={`result__copy-text ${copied ? "copied" : ''}`}>Copied</p>
            <i className='result__copy-icon' onClick={() => copyToClipboard()}>
              <svg
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.909 0.659016L20.341 3.09098C20.763 3.51294 21 4.08523 21 4.68197V17.25C21 18.4926 19.9926 19.5 18.75 19.5H15V21.75C15 22.9926 13.9926 24 12.75 24H2.25C1.00734 24 0 22.9926 0 21.75V6.75C0 5.50734 1.00734 4.5 2.25 4.5H6V2.25C6 1.00734 7.00734 0 8.25 0H16.3181C16.9147 3.12036e-06 17.4871 0.237058 17.909 0.659016ZM2.53126 21.75H12.4687C12.5434 21.75 12.6149 21.7204 12.6677 21.6677C12.7204 21.6149 12.75 21.5434 12.75 21.4687V19.5H8.25C7.00734 19.5 6 18.4926 6 17.25V6.75H2.53126C2.45665 6.75 2.38512 6.77963 2.33238 6.83238C2.27963 6.88512 2.25 6.95665 2.25 7.03126V21.4687C2.25 21.5434 2.27963 21.6149 2.33238 21.6677C2.38512 21.7204 2.45665 21.75 2.53126 21.75ZM18.4687 17.25H8.53126C8.45665 17.25 8.38512 17.2204 8.33238 17.1677C8.27963 17.1149 8.25 17.0434 8.25 16.9687V2.53126C8.25 2.45665 8.27963 2.38512 8.33238 2.33238C8.38512 2.27963 8.45665 2.25 8.53126 2.25H13.5V6.375C13.5 6.99632 14.0036 7.5 14.625 7.5H18.75V16.9687C18.75 17.0434 18.7204 17.1149 18.6677 17.1677C18.6149 17.2204 18.5434 17.25 18.4687 17.25ZM15.75 5.25H18.75V4.7985C18.75 4.76156 18.7427 4.72499 18.7286 4.69086C18.7145 4.65673 18.6937 4.62572 18.6677 4.59961L16.4004 2.33236C16.3476 2.27963 16.2761 2.25 16.2014 2.25H15.75V5.25Z"
                  fill="#A4FFAF" />
              </svg>
            </i>
          </div>
        </div>
        <div className="password__generator-controls">
          <Slider
            passwordLength={passwordLength}
            onChange={setPasswordLength}
          />
          <fieldset className="password__include">
            {passwordIncludes.map((include) => {
              return (
                <Checkbox
                  key={include.type}
                  label={include.label}
                  onChange={(e) =>
                    setPasswordInclude({
                      ...passwordInclude,
                      [include.type]: e.target.checked
                    })
                  }
                />
              );
            })}
          </fieldset>
          <div className="password__generator-strength">
            <h2>Strength</h2>
            <div className="strength__indicator">
              <h2 className='strength__indicator-text'>
                {password.length > 0 && passwordStrengthIndicator}
              </h2>
              {defaultOptions.map((item) => {
                if (password === ''
                  || item.id >= strengthIndicator[passwordStrengthIndicator]?.length
                ) {
                  return (
                    <span key={item.id}></span>
                  );
                }

                return (
                  <span
                    className={`${strengthIndicator[passwordStrengthIndicator]?.class}`}
                    key={item.id}>
                  </span>
                );
              })}
            </div>
          </div>
          <Button onClick={generatePassword} />
        </div>
      </div>
    </div>
  );
};

export default App;
