import React, { useEffect, useState } from 'react';
import { AjaxResponse } from 'rxjs/ajax';
import { connect } from 'react-redux';
import * as Form from '../../../../components/Forms';
import * as S from './styled';
import Categories from '../Form/Categories';
import * as Models from '../../../../models';
import * as Typography from '../../../../components/Typography';
import { State } from '../../../../redux/reducers';
import { addOffer } from '../../../../redux/actions/offers/add-offer.action';

type OwnProps = {
  categories: Models.Categories.Category[];
  shippingRates: Models.ShippingRates.ShippingRate[];
  draftCreated: (preOffer: any) => void;
};

type ReduxState = {
  addedOffer: AjaxResponse | undefined;
  addingOffer: boolean;
};

type ReduxDispatch = {
  performAddOffer: (offer: Models.Offers.NewOffer) => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const TitleAndCategory: React.FunctionComponent<Props> = (props: Props) => {
  const { categories, performAddOffer, draftCreated, shippingRates } = props;
  const [preOffer, setPreOffer] = useState<Partial<Models.Offers.NewOffer>>({
    name: '',
    category: {
      id: ''
    }
  });
  const [showCategorySelection, setShowCategorySelection] = useState<boolean>(
    false
  );
  const [selectedCategory, selectCategory] = useState<string>();

  useEffect(() => {
    if (preOffer && preOffer.category && preOffer.category.id) {
      performAddOffer(preOffer as any);
      draftCreated(preOffer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preOffer]);

  const onTitleChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setPreOffer({
      name: ev.currentTarget.value
    });
  };

  const pickCategory = (category: Models.Categories.Category): void => {
    setShowCategorySelection(false);
    selectCategory(category.name);
    setPreOffer({
      ...preOffer,
      category: {
        id: category!.id!
      },
      shippingRate: {
        id: shippingRates[0].id
      }
    });
  };

  return (
    <>
      <Typography.Title
        text="Co chcesz sprzedać?"
        font={{
          size: '2.5rem'
        }}
      />

      <S.Wrapper>
        <Form.Input
          id="title"
          label="Tytuł oferty"
          type="text"
          handleChange={onTitleChange}
        />
        <S.CategoryWrapper>
          <S.CategoryText>Kategoria</S.CategoryText>
          <S.SelectCategory
            onClick={() => setShowCategorySelection(!showCategorySelection)}
          >
            {selectedCategory ? 'Zmień' : 'Wybierz'}
          </S.SelectCategory>
          <S.SelectedCategory>{selectedCategory}</S.SelectedCategory>
        </S.CategoryWrapper>
        {showCategorySelection && (
          <Categories
            categories={categories}
            close={() => setShowCategorySelection(false)}
            selectCategory={pickCategory}
          />
        )}
      </S.Wrapper>
    </>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    addedOffer: state.offers.addOffer.addedOffer,
    addingOffer: state.offers.addOffer.addingOffer
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performAddOffer: addOffer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleAndCategory);
