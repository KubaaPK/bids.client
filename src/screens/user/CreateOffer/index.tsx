import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as S from './styled';
import * as Form from '../../../components/Forms';
import * as Typography from '../../../components/Typography';
import * as Models from '../../../models';
import Button from '../../../components/Button';
import { State } from '../../../redux/reducers';
import Navigation from '../../../components/Navigation';
import Categories from './Categories';
import Parameters from './Parameters';
import Description from './Description';
import Images from './Images';
import SellingMode from './SellingMode';
import Delivery from './Delivery';
import Fee from './Fee';
import { fetchCategories } from '../../../redux/actions/categories/fetch-categories.actions';

type ReduxState = {
  categories: Models.Categories.Category[];
};

type ReduxDispatch = {
  performFetchCategories: () => void;
};

type Props = ReduxState & ReduxDispatch;

const CreateOffer: React.FunctionComponent<Props> = (props: Props) => {
  const { categories, performFetchCategories } = props;
  const [offer, setOffer] = useState<Models.Offers.NewOffer>();
  const [selectedCategory, selectCategory] = useState<string>();
  const [showCategorySelection, setShowCategorySelection] = useState<boolean>(
    false
  );
  const [errors, setErrors] = useState({
    category: {
      message: ''
    }
  });

  useEffect(() => {
    if (categories.length === 0) {
      performFetchCategories();
    }
  }, [categories, performFetchCategories]);

  const pickCategory = (category: Models.Categories.Category): void => {
    setShowCategorySelection(false);
    selectCategory(category.name);
    setOffer({
      ...offer,
      category: {
        id: category.id
      }
    } as Models.Offers.NewOffer);
    setErrors({
      ...errors,
      category: {
        message: ''
      }
    });
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    if (!selectedCategory) {
      setErrors({
        ...errors,
        category: {
          message: 'Nie wybrano kategorii.'
        }
      });
    }
    console.log(offer);
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setOffer({
      ...offer,
      [ev.currentTarget.id]: ev.currentTarget.value
    } as any);
  };

  const handleParametersChange = (
    parameter: Models.Offers.NewOffer['parameters'][0]
  ): void => {
    const parameters = offer!.parameters || [];
    const updatedParameters = [...parameters];

    const parameterIndex: number = parameters.findIndex(
      el => el.id === parameter.id
    );

    if (parameterIndex === -1) {
      updatedParameters.push(parameter);
    } else {
      updatedParameters[parameterIndex] = parameter;
    }

    setOffer({
      ...offer,
      parameters: updatedParameters
    } as any);
  };

  const handleImages = (images: string[]): void => {
    setOffer({
      ...offer,
      images
    } as any);
  };

  const handleShippingRateChange = (id: string): void => {
    setOffer({
      ...offer,
      shippingRate: {
        id
      }
    } as any);
  };

  const handleSellingModeChange = (
    sellingMode: Models.Offers.NewOffer['sellingMode']
  ): void => {
    setOffer({
      ...offer,
      sellingMode
    } as any);
  };

  const handleStockChange = (stock: Models.Offers.NewOffer['stock']): void => {
    setOffer({
      ...offer,
      stock
    } as any);
  };

  const handleDescriptionChange = (
    description: Models.Offers.NewOffer['description']
  ): void => {
    setOffer({
      ...offer,
      description
    } as any);
  };

  return (
    <>
      <Navigation />
      <S.Main>
        <Form.Form handleSubmit={handleSubmit}>
          <Typography.Title text="Dodaj ofertę" font={{ size: '3rem' }} />
          <S.Section>
            <Form.Typography.TextSeparator
              text="Nazwa i kategoria"
              topBottomMargin="2rem"
              font={{
                size: '2.2rem',
                weight: 500
              }}
            />
            <Form.Input
              id="name"
              label="Tytuł oferty"
              type="text"
              restrictions={{ required: true }}
              handleChange={handleInputChange}
            />
            {showCategorySelection && (
              <Categories
                categories={categories}
                close={() => setShowCategorySelection(false)}
                selectCategory={pickCategory}
              />
            )}
            <S.CategoryWrapper>
              <S.CategoryText>Kategoria</S.CategoryText>
              <S.SelectCategory
                onClick={() => setShowCategorySelection(!showCategorySelection)}
              >
                {selectedCategory ? 'Zmień' : 'Wybierz'}
              </S.SelectCategory>
              <S.SelectedCategory>{selectedCategory}</S.SelectedCategory>
              <S.ErrorMessage>{errors.category.message}</S.ErrorMessage>
            </S.CategoryWrapper>
          </S.Section>
          <S.Section>
            <Form.Typography.TextSeparator
              text="Cechy oferty"
              topBottomMargin="2rem"
              font={{
                size: '2.2rem',
                weight: 500
              }}
            />
            <Form.Input
              id="ean"
              label="EAN (opcjonalnie)"
              type="text"
              handleChange={handleInputChange}
            />
            {selectedCategory && (
              <Parameters
                categoryId={offer!.category.id}
                passParameterValue={handleParametersChange}
              />
            )}
          </S.Section>
          <S.Section>
            <Form.Typography.TextSeparator
              text="Zdjęcia i opis"
              font={{ size: '2.2rem', weight: 500 }}
              topBottomMargin="2rem"
            />
            <Images handleAddedImages={handleImages} />
            <Description onDescriptionChange={handleDescriptionChange} />
          </S.Section>
          <S.Section>
            <Form.Typography.TextSeparator
              text="Format sprzedaży"
              font={{ size: '2.2rem', weight: 500 }}
              topBottomMargin="2rem"
            />
            <SellingMode
              onSellingModeChange={handleSellingModeChange}
              onStockChange={handleStockChange}
            />
          </S.Section>
          <S.Section>
            <Form.Typography.TextSeparator
              text="Dostawa i płatność"
              font={{ size: '2.2rem', weight: 500 }}
              topBottomMargin="2rem"
            />
            <Delivery handleShippingRateChange={handleShippingRateChange} />
          </S.Section>
          <S.Section>
            <Form.Typography.TextSeparator
              text="Podsumowanie"
              font={{ size: '2.2rem', weight: 500 }}
              topBottomMargin="2rem"
            />
            <Fee
              categoryName={selectedCategory}
              sellingMode={offer && offer.sellingMode}
            />
          </S.Section>
          <S.Section>
            <Button type="submit" variant="full" text="Dodaj ofertę" />
          </S.Section>
        </Form.Form>
      </S.Main>
    </>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    categories: state.categories.fetchCategories.categories
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchCategories: fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOffer);
