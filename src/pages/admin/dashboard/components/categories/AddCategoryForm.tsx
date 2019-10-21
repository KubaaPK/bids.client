import React, { useState, useEffect } from 'react';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { connect } from 'react-redux';
import { InputGroup } from '../../../../../components/Form';
import { InputValue } from '../../../../../components/Form/Input/Input';
import Button from '../../../../../components/Button/Button';
import { ButtonVariant } from '../../../../../components/Button/styled';
import {
  NewCategory,
  addCategory
} from '../../../../../redux/actions/categories/add-category.actions';
import { State } from '../../../../../redux/reducers';
import Notification, {
  NotificationVariant
} from '../../../../../components/Notification/Notification';

type NewCategoryData = {
  [x: string]: string;
};

type Props = {
  categoryIsAdding: boolean;
  categoryAdded: AjaxResponse | undefined;
  addingCategoryFailed: AjaxError | undefined;
};

type Dispatch = {
  addCategory(newCategory: NewCategory): void;
};

type CompProps = Props & Dispatch;

const AddCategoryForm: React.FunctionComponent<CompProps> = (
  props: CompProps
) => {
  const { addCategory, categoryIsAdding, categoryAdded } = props;

  const initialNewCategoryData: NewCategoryData = {
    name: ''
  };

  const [newCategoryData, setNewCategoryData] = useState(
    initialNewCategoryData
  );
  const [pending, setPending] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    variant: NotificationVariant.SUCCESS
  });

  useEffect(() => {
    setPending(categoryIsAdding);
    if (categoryAdded) {
      setNotification({
        show: true,
        variant: NotificationVariant.SUCCESS,
        message: 'Kategoria została dodana.'
      });
    }
  }, [categoryIsAdding, categoryAdded]);

  const setNewCategory = (inputValue: InputValue) => {
    setNewCategoryData((prevState: NewCategoryData) => ({
      ...prevState,
      [inputValue.id]: inputValue.value
    }));
  };

  const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    addCategory({
      name: newCategoryData.name
    });
  };

  const handleNotificationClose = (): void => {
    setNotification({
      show: false,
      variant: NotificationVariant.SUCCESS,
      message: ''
    });
  };

  return (
    <>
      {notification.show ? (
        <Notification
          variant={notification.variant}
          message={notification.message}
          timeout={2000}
          closeHandler={handleNotificationClose}
        />
      ) : null}
      <form onSubmit={handleFormSubmit}>
        <InputGroup
          label={{
            htmlFor: 'name',
            value: 'Nazwa kategorii'
          }}
          input={{
            id: 'name',
            required: true,
            type: 'text',
            placeholder: 'np. Moda'
          }}
          liftInputValue={setNewCategory}
        />
        <Button
          variant={ButtonVariant.CTA}
          text="Dodaj"
          type="submit"
          isPending={pending}
        />
      </form>
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    categoryIsAdding: state.categories.addCategory.categoryIsAdding,
    categoryAdded: state.categories.addCategory.categoryAdded,
    addingCategoryFailed: state.categories.addCategory.addingCategoryFailed
  };
};

const mapDispatchToProps: Dispatch = {
  addCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategoryForm);
