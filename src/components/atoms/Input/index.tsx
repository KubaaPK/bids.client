import * as React from 'react';
import * as S from './styled';

type Props = {
  id: string;
  type: 'email' | 'number' | 'text' | 'password';
  placeholder?: string;
  restrictions?: {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
  handleChange: (ev: React.FormEvent<HTMLInputElement>) => void;
  defaultValue?: any;
};

export default function Input(props: Props): React.ReactElement {
  const {
    id,
    type,
    defaultValue,
    restrictions,
    placeholder,
    handleChange
  } = props;
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  function handleErrorMessage(value: string | number): void {
    switch (true) {
      case restrictions &&
        restrictions!.minLength !== undefined &&
        restrictions!.minLength > (value as string).length:
        setErrorMessage(
          `Pole musi być długości co najmniej ${restrictions!
            .minLength!} znaków.`
        );
        break;
      case restrictions &&
        restrictions!.maxLength !== undefined &&
        restrictions!.maxLength < (value as string).length:
        setErrorMessage(
          `Pole może być długości maksymalnie ${restrictions!
            .maxLength!} znaków.`
        );
        break;
      case restrictions &&
        restrictions!.min !== undefined &&
        restrictions!.min > value:
        setErrorMessage(
          `Pole musi mieć minimalną wartość: ${restrictions!.min!}.`
        );
        break;
      case restrictions &&
        restrictions!.max !== undefined &&
        restrictions!.max < value:
        setErrorMessage(
          `Pole może mieć maksymalną wartość: ${restrictions!.max!}.`
        );
        break;
      case restrictions &&
        restrictions!.required !== undefined &&
        restrictions!.required &&
        !value:
        setErrorMessage('Pole jest wymagane.');
        break;
      default:
        setErrorMessage('');
    }
  }

  return (
    <>
      <S.Input
        id={id}
        type={type}
        defaultValue={defaultValue && defaultValue}
        placeholder={placeholder}
        onChange={ev => {
          handleChange(ev);
          handleErrorMessage(ev.currentTarget.value);
        }}
        required={restrictions !== undefined && restrictions.required}
        min={restrictions !== undefined ? restrictions.min : undefined}
        max={restrictions !== undefined ? restrictions.max : undefined}
        minLength={
          restrictions !== undefined ? restrictions.minLength : undefined
        }
        maxLength={
          restrictions !== undefined ? restrictions.maxLength : undefined
        }
        hasError={errorMessage.length > 0}
      />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </>
  );
}
