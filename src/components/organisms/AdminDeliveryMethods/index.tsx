import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Plus } from 'react-feather';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';
import * as S from './styled';
import { SectionTitle } from '../../atoms';
import { State } from '../../../redux/reducers';
import { fetchDeliveryMethods } from '../../../redux/actions/deliery-methods/fetch-delivery-methods.action';
import useOutsideClick from '../../../shared/hooks/use-outside-click';
import { AdminDashboardDelivery } from '../../molecules';

type ReduxState = {
  fetchingDeliveryMethods: boolean;
  deliveryMethods: Models.DeliveryMethods.DeliveryMethod[];
  fetchingDeliveryMethodsFailed: AjaxError | undefined;
  deliveryMethodAdded: AjaxResponse | undefined;
  deliveryMethodDeleted: AjaxResponse | undefined;
};

type ReduxDispatch = {
  performFetchDeliveryMethods: () => void;
};

type Props = ReduxState & ReduxDispatch;

const DeliveryMethods: React.FunctionComponent<Props> = (props: Props) => {
  const {
    deliveryMethods,
    deliveryMethodAdded,
    performFetchDeliveryMethods,
    deliveryMethodDeleted
  } = props;

  const [showAddDeliveryMethodForm, setShowAddDeliveryMethodForm] = useState<
    boolean
  >(false);

  useEffect(() => {
    performFetchDeliveryMethods();
  }, [deliveryMethodAdded, performFetchDeliveryMethods, deliveryMethodDeleted]);

  const addDeliveryMethodFormRef = useRef<HTMLSpanElement>(null);

  useOutsideClick(addDeliveryMethodFormRef, () => {
    if (showAddDeliveryMethodForm) setShowAddDeliveryMethodForm(false);
  });

  return (
    <S.Wrapper>
      {showAddDeliveryMethodForm && (
        <S.Outline>
          {/* <span ref={addDeliveryMethodFormRef}>
            <AddDeliveryMethodForm
              closeForm={() => setShowAddDeliveryMethodForm(false)}
            />
          </span> */}
        </S.Outline>
      )}
      <SectionTitle
        text="Metody dostaw"
        font={{
          size: 's',
          weight: 500,
          uppercase: true,
          variant: 'lighten'
        }}
      />
      <S.List>
        {deliveryMethods.map(deliveryMethod => (
          <AdminDashboardDelivery
            deliveryMethod={deliveryMethod}
            key={deliveryMethod.id}
          />
        ))}
      </S.List>
      <S.ShowAddCategoryFormButton
        onClick={() => setShowAddDeliveryMethodForm(!showAddDeliveryMethodForm)}
      >
        <Plus />
      </S.ShowAddCategoryFormButton>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    deliveryMethods:
      state.deliveryMethods.fetchDeliveryMethods.fetchedDeliveryMethods,
    fetchingDeliveryMethods:
      state.deliveryMethods.fetchDeliveryMethods.fetchingDeliveryMethods,
    fetchingDeliveryMethodsFailed:
      state.deliveryMethods.fetchDeliveryMethods.fetchingDeliveryMethodsFailed,
    deliveryMethodAdded:
      state.deliveryMethods.addDeliveryMethod.addedDeliveryMethod,
    deliveryMethodDeleted:
      state.deliveryMethods.deleteDeliveryMethod.deliveryMethodDeleted
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchDeliveryMethods: fetchDeliveryMethods
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryMethods);
