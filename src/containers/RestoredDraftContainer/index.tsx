import React from 'react';
import { connect } from 'react-redux';
import TreeModel from 'tree-model';
import { FeeCalculatorContainer } from '..';
import { API_URL } from '../../consts';
import { useFetch } from '../../hooks';
import * as Models from '../../models';
import { updateDraft } from '../../redux/actions/offers/update-draft.action';
import { CreateOffer } from '../../ui/organisms';
import { publishOffer } from '../../redux/actions/offers/publish-offer.action';

type ReduxDispatch = {
  performDraftUpdate: (id: string, updated: Models.Offers.NewOffer) => void;
  performOfferPublication: (id: string) => void;
};

type OwnProps = {
  draft: Models.Offers.NewOffer;
  categories: Models.Categories.Category[];
};

type Props = OwnProps & ReduxDispatch;

function RestoredDraftContainer(props: Props): React.ReactElement {
  const {
    draft,
    categories,
    performDraftUpdate,
    performOfferPublication
  } = props;
  const { data: parameters, isLoading: isLoadingParameters } = useFetch(
    `${API_URL}/sale/categories/${draft.category.id}/parameters`
  );
  const { data: shippingRates } = useFetch(`${API_URL}/sale/shipping-rates`, {
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`
    })
  });
  const [breadcrumb, setBreadcrumb] = React.useState<string[]>([]);
  const [price, setPrice] = React.useState<string>(
    (draft.sellingMode && draft.sellingMode.price.amount) || '0'
  );

  React.useEffect(() => {
    const tree: TreeModel = new TreeModel();
    // @ts-ignore
    const categoryTreed = tree.parse(categories[0]);

    setBreadcrumb(
      categoryTreed
        .first((node: any) => node.model.id === draft.category.id)
        .getPath()
        .map((el: any) => el.model.name)
    );
  }, []);
  /**
   * Builds selected category broadcrumb.
   * @return {string[]} Array with category breadcrumb. F.e. ["Elektronika", "Telefony", "Smartfony"]
   * for "Smartfony" category.
   */
  function buildCategoriesBreadcrumb(
    parent: Models.Categories.Category,
    category: Models.Categories.Category['children'][0]['children'][0]
  ): void {
    const tree: TreeModel = new TreeModel();
    // @ts-ignore
    const categoryTreed = tree.parse(parent);
    setBreadcrumb(
      categoryTreed
        .first((node: any) => node.model.id === category.id)
        .getPath()
        .map((el: any) => el.model.name)
    );
  }

  function handleDraftUpdate(updated: Partial<Models.Offers.NewOffer>): void {
    if (updated.sellingMode) {
      setPrice(updated.sellingMode.price.amount);
    }
    performDraftUpdate(draft.id!, updated as Models.Offers.NewOffer);
  }

  function handleDraftSubmit(): void {
    performOfferPublication(draft.id!);
  }

  return (
    <>
      <CreateOffer.TitleAndCategory
        name={draft.name}
        categoryBreadcrumb={breadcrumb}
        categories={categories}
        onUpdate={handleDraftUpdate}
        buildCategoriesBreadcrumb={buildCategoriesBreadcrumb}
      />

      {!isLoadingParameters && (
        <CreateOffer.Parameters
          existingParameters={draft.parameters}
          parameters={parameters}
          onUpdate={handleDraftUpdate}
          ean={draft.ean}
        />
      )}
      <CreateOffer.ImagesAndDescription
        currentlySetImages={draft.images}
        onUpdate={handleDraftUpdate}
        currenlySetDescription={
          draft.description && (draft.description as any)[0].items[0].content
        }
      />
      <CreateOffer.SellingMode
        shippingRates={shippingRates}
        currentlySetPrice={
          (draft.sellingMode &&
            draft.sellingMode.price &&
            draft.sellingMode.price.amount) ||
          ''
        }
        currentlySetStock={{
          available:
            draft.stock && draft.stock.available && draft.stock.available,
          unit: draft.stock && draft.stock.unit && draft.stock.unit
        }}
        currentlySetShippingRate={draft.shippingRate}
        onUpdate={handleDraftUpdate}
      />
      <FeeCalculatorContainer
        calculableOfferData={{
          amount: 1,
          category: draft.category.name!,
          sellingMode: {
            price: {
              amount: price,
              currency: 'PLN'
            },
            format: 'BUY_NOW'
          }
        }}
        submitDraft={handleDraftSubmit}
      />
    </>
  );
}

const mapDispatchToProps: ReduxDispatch = {
  performDraftUpdate: updateDraft,
  performOfferPublication: publishOffer
};

export default connect(
  null,
  mapDispatchToProps
)(RestoredDraftContainer);
