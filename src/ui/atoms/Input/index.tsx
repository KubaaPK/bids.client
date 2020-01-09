import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  type: 'text' | 'number' | 'textarea' | 'password' | 'email';
  onChange?: (
    ev: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  id: string;
  restrictions?: {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
  defaultValue?: string;
  value?: string;
  step?: string;
};

export default function Input(props: Props): ReactElement {
  const {
    type,
    onChange,
    placeholder,
    id,
    defaultValue,
    restrictions,
    value
  } = props;

  const [errorMessage, setErrorMessage] = React.useState<string>('');

  function handleInputRestrictionErrorMessage(
    inputValue: string | number
  ): void {
    switch (true) {
      case restrictions &&
        restrictions!.minLength !== undefined &&
        restrictions!.minLength > (inputValue as string).length:
        setErrorMessage(
          `Pole musi być długości co najmniej ${restrictions!
            .minLength!} znaków.`
        );
        break;
      case restrictions &&
        restrictions!.maxLength !== undefined &&
        restrictions!.maxLength < (inputValue as string).length:
        setErrorMessage(
          `Pole może być długości maksymalnie ${restrictions!
            .maxLength!} znaków.`
        );
        break;
      case restrictions &&
        restrictions!.min !== undefined &&
        Number.parseFloat((restrictions!.min as unknown) as string) >
          inputValue:
        setErrorMessage(
          `Pole musi mieć minimalną wartość: ${restrictions!.min!}.`
        );
        break;
      case restrictions &&
        restrictions!.max !== undefined &&
        Number.parseFloat((restrictions!.max as unknown) as string) <
          inputValue:
        setErrorMessage(
          `Pole może mieć maksymalną wartość: ${restrictions!.max!}.`
        );
        break;
      case restrictions &&
        restrictions!.required !== undefined &&
        restrictions!.required &&
        !inputValue:
        setErrorMessage('Pole jest wymagane.');
        break;
      default:
        setErrorMessage('');
    }
  }

  if (type === 'textarea') {
    return (
      <>
        <S.TextArea
          onChange={(ev: any) => {
            onChange!(ev);
            handleInputRestrictionErrorMessage(ev.currentTarget.value);
          }}
          placeholder={placeholder}
          invalid={errorMessage.length > 0}
          id={id}
          defaultValue={defaultValue}
          required={restrictions !== undefined && restrictions.required}
          minLength={
            restrictions !== undefined ? restrictions.minLength : undefined
          }
          maxLength={
            restrictions !== undefined ? restrictions.maxLength : undefined
          }
          value={value}
        />
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </>
    );
  }
  return (
    <>
      <S.Input
        onChange={(ev: any) => {
          onChange!(ev);
          handleInputRestrictionErrorMessage(ev.currentTarget.value);
        }}
        placeholder={placeholder}
        invalid={errorMessage.length > 0}
        id={id}
        type={type}
        defaultValue={defaultValue}
        required={restrictions !== undefined && restrictions.required}
        min={restrictions !== undefined ? restrictions.min : undefined}
        max={restrictions !== undefined ? restrictions.max : undefined}
        minLength={
          restrictions !== undefined ? restrictions.minLength : undefined
        }
        maxLength={
          restrictions !== undefined ? restrictions.maxLength : undefined
        }
        value={value}
        step="0.01"
      />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </>
  );
}
