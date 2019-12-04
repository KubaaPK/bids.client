import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { AjaxResponse } from 'rxjs/ajax';
import * as S from './styled';
import * as Form from '../../../components/Forms';
import * as Typography from '../../../components/Typography';
import * as Models from '../../../models';
import Button from '../../../components/Button';
import Main from '../../../components/Layout/Main';
import { State } from '../../../redux/reducers';
import Navigation from '../../../components/Navigation';
import Categories from './Form/Categories';
import Parameters from './Form/Parameters';
import Description from './Form/Description';
import Images from './Form/Images';
import SellingMode from './Form/SellingMode';
import Delivery from './Form/Delivery';
import Fee from './Form/Fee';
import TitleAndCategory from './TitleAndCategory';
import CurrentlySavedDrafts from './CurrentlySavedDrafts';
import { fetchCategories } from '../../../redux/actions/categories/fetch-categories.actions';
import { fetchDrafts } from '../../../redux/actions/offers/fetch-drafts.action';
import { updateDraft } from '../../../redux/actions/offers/update-draft.action';
import { fetchShippingRates } from '../../../redux/actions/shipping-rates/fetch-shipping-rates.action';
import { publishOffer } from '../../../redux/actions/offers/publish-offer.action';

type ReduxState = {
  categories: Models.Categories.Category[];
  offerAdded: AjaxResponse | undefined;
  drafts: Models.Offers.Offer[];
  deletedDraft: AjaxResponse | undefined;
  addedOffer: AjaxResponse | undefined;
  draftUpdated: AjaxResponse | undefined;
  shippingRates: Models.ShippingRates.ShippingRate[];
  offerPublished: AjaxResponse | undefined;
};

type ReduxDispatch = {
  performFetchCategories: () => void;
  performFetchDrafts: () => void;
  performDraftUpdate: (
    id: string,
    updatedDraft: Models.Offers.NewOffer
  ) => void;
  performFetchShippingRates: () => void;
  performPublishOffer: (draftOfferId: string) => void;
};

type Props = ReduxState & ReduxDispatch;

const CreateOffer: React.FunctionComponent<Props> = (props: Props) => {
  const {
    categories,
    performFetchCategories,
    performFetchDrafts,
    performFetchShippingRates,
    drafts,
    deletedDraft,
    offerAdded,
    performDraftUpdate,
    shippingRates,
    performPublishOffer,
    offerPublished
  } = props;
  const [offer, setOffer] = useState<Models.Offers.NewOffer>();
  const [selectedCategory, selectCategory] = useState<string>();
  const [showCategorySelection, setShowCategorySelection] = useState<boolean>(
    false
  );
  const [showDraftSelection, setShowDraftSelection] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    category: {
      message: ''
    }
  });
  const [draftRestored, setDraftRestored] = useState<boolean>(false);
  const [preOfferCreated, setPreOfferCreated] = useState<boolean>(false);
  const [draftId, setDraftId] = useState<string>();
  const [counter, setCounter] = useState<number>(0);
  const { push } = useHistory();

  useEffect(() => {
    performFetchDrafts();
    performFetchShippingRates();
  }, [performFetchDrafts, performFetchShippingRates]);

  useEffect(() => {
    if (categories.length === 0) {
      performFetchCategories();
    }
    if (drafts.length > 0) {
      setShowDraftSelection(true);
    } else {
      setShowDraftSelection(false);
    }

    if (deletedDraft !== undefined) {
      performFetchDrafts();
      setPreOfferCreated(false);
      setShowDraftSelection(false);
    }

    if (preOfferCreated && counter === 0) {
      performFetchDrafts();
      if (offerAdded) {
        const createdDraft = drafts.find(
          el => el.id === offerAdded.response.id
        );
        setOffer(createdDraft as any);
        if (createdDraft) {
          setDraftId(createdDraft!.id);
          setDraftRestored(true);
          setShowDraftSelection(false);
        }
        setShowDraftSelection(false);
      }
    }

    if (draftRestored) {
      if (offer) {
        selectCategory(offer.category.name);
        setDraftId((offer! as any).id);
        setPreOfferCreated(true);
        setShowDraftSelection(false);
      }
    }

    if (offer && counter === 1) {
      performDraftUpdate(draftId!, offer as any);
    }

    if (offerPublished) {
      push(`/oferta/${draftId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    categories,
    performFetchCategories,
    drafts.length,
    deletedDraft,
    performFetchDrafts,
    draftRestored,
    preOfferCreated,
    offer,
    shippingRates,
    offerPublished
  ]);

  useEffect(() => {
    return () => {
      setPreOfferCreated(false);
      setOffer(undefined as any);
    };
  }, []);

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
    performPublishOffer(draftId!);
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setOffer({
      ...offer,
      [ev.currentTarget.id]: ev.currentTarget.value
    } as any);
    setCounter(1);
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
    setCounter(1);
  };

  const handleImages = (images: string[]): void => {
    setOffer({
      ...offer,
      images
    } as any);
    setCounter(1);
  };

  const handleShippingRateChange = (id: string): void => {
    setOffer({
      ...offer,
      shippingRate: {
        id
      }
    } as any);
    setCounter(1);
  };

  const handleSellingModeChange = (
    sellingMode: Models.Offers.NewOffer['sellingMode']
  ): void => {
    setOffer({
      ...offer,
      sellingMode
    } as any);
    setCounter(1);
  };

  const handleStockChange = (stock: Models.Offers.NewOffer['stock']): void => {
    setOffer({
      ...offer,
      stock
    } as any);
    setCounter(1);
  };

  const handleDescriptionChange = (
    description: Models.Offers.NewOffer['description']
  ): void => {
    setOffer({
      ...offer,
      description
    } as any);
    setCounter(1);
  };

  const closeDraftSelection = (): void => {
    setShowDraftSelection(false);
  };

  const handleDraftSelection = (draft: Models.Offers.Offer): void => {
    setOffer(draft as any);
    setShowDraftSelection(false);
    setDraftRestored(true);
  };

  const afterPreOfferCreated = (preOffer: any): void => {
    setOffer({
      category: preOffer.category,
      name: preOffer.name,
      shippingRate: {
        id: shippingRates[0].id
      }
    } as any);
    setPreOfferCreated(true);
  };

  return (
    <>
      <Navigation />
      <Main
        props={{
          desktopDirection: 'column'
        }}
      >
        {!preOfferCreated && (
          <TitleAndCategory
            categories={categories}
            draftCreated={afterPreOfferCreated}
            shippingRates={shippingRates}
            setSelectedCategoryName={pickCategory}
          />
        )}
        {showDraftSelection && (
          <CurrentlySavedDrafts
            drafts={drafts}
            closeDraftSelection={closeDraftSelection}
            handleDraftSelection={handleDraftSelection}
          />
        )}
        {preOfferCreated && (
          <Form.Form handleSubmit={handleSubmit}>
            <Typography.Title
              text="Dodaj ofertę"
              font={{ size: '3rem' }}
              marginFromLeft
            />
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
                defaultValue={offer && offer.name !== null && offer.name}
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
                  onClick={
                    () => setShowCategorySelection(!showCategorySelection)
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
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
                defaultValue={offer && offer.ean && offer.ean}
              />
              {selectedCategory && (
                <Parameters
                  categoryId={offer && offer.category && offer!.category.id}
                  passParameterValue={handleParametersChange}
                  restoredParameters={
                    draftRestored &&
                    offer &&
                    offer.parameters !== null &&
                    offer.parameters
                  }
                />
              )}
            </S.Section>
            <S.Section>
              <Form.Typography.TextSeparator
                text="Zdjęcia i opis"
                font={{ size: '2.2rem', weight: 500 }}
                topBottomMargin="2rem"
              />
              <Images
                handleAddedImages={handleImages}
                restoredImages={offer && offer.images}
              />
              <Description
                onDescriptionChange={handleDescriptionChange}
                restoredDesctiption={
                  offer && offer.description
                    ? offer.description
                    : ({ sections: [] } as any)
                }
              />
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
                restoredSellingMode={offer && offer.sellingMode}
                restoredStock={offer && (offer.stock as any)}
              />
            </S.Section>
            <S.Section>
              <Form.Typography.TextSeparator
                text="Dostawa i płatność"
                font={{ size: '2.2rem', weight: 500 }}
                topBottomMargin="2rem"
              />
              <Delivery
                handleShippingRateChange={handleShippingRateChange}
                restoredShippingRate={
                  offer && offer.shippingRate && (offer.shippingRate.id as any)
                }
              />
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
        )}
      </Main>
    </>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    categories: state.categories.fetchCategories.categories,
    offerAdded: state.offers.addOffer.addedOffer,
    drafts: state.offers.fetchDrafts.fetchedDrafts,
    deletedDraft: state.offers.deleteDraft.draftDeleted,
    addedOffer: state.offers.addOffer.addedOffer,
    draftUpdated: state.offers.updateDraft.updatedDraft,
    shippingRates: state.shippingRates.fetchShippingRates.shippingRates,
    offerPublished: state.offers.publishOffer.offerPublished
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchCategories: fetchCategories,
  performFetchDrafts: fetchDrafts,
  performDraftUpdate: updateDraft,
  performFetchShippingRates: fetchShippingRates,
  performPublishOffer: publishOffer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOffer);
