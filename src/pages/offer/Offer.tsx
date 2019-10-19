import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import { CircleLoader } from 'react-spinners';
import { State } from '../../redux/reducers';
import { OfferModel } from '../../models/offer';
import { fetchOffer } from '../../redux/actions/offers/fetch-offer.action';
import Navigation from '../../components/Navigation/Navigation';
import { Images, Description, Info, Parameters, Purchase } from './components';
import { ImagesAndInfo, Wrapper, InfoAndPurchaseWrapper } from './styled';

type ReduxProps = {
  isOfferFetching: boolean;
  offerFetched: OfferModel | undefined;
  fetchinOfferFailed: AjaxError | undefined;
  isAuthenticated: boolean;
};

type ReduxDispach = {
  fetchOffer(id: string): void;
};

type Props = ReduxProps & ReduxDispach;

const Offer: React.FunctionComponent<Props> = (props: Props) => {
  const { id } = useParams();
  const {
    fetchOffer: fetchOfferAction,
    isOfferFetching,
    offerFetched: offer,
    isAuthenticated
  } = props;

  useEffect(() => {
    fetchOfferAction(id!);
  }, []);

  return (
    <>
      <Navigation />
      {isOfferFetching === true ? (
        <CircleLoader />
      ) : (
        <Wrapper>
          <ImagesAndInfo>
            <Images images={offer!.images} />
            <InfoAndPurchaseWrapper>
              <Info
                price={offer!.sellingMode.price.amount}
                seller={offer!.seller}
                title={offer!.name}
              />
              <Purchase
                inStock={offer!.stock.available}
                isAuthenticated={isAuthenticated}
              />
            </InfoAndPurchaseWrapper>
          </ImagesAndInfo>
          <Parameters parameters={offer!.parameters} />
          <Description description={offer!.description!} />
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    isOfferFetching: state.offers.fetchOffer.isOfferFetching,
    offerFetched: state.offers.fetchOffer.offerFetched,
    fetchinOfferFailed: state.offers.fetchOffer.offerFetchingFailed,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps: ReduxDispach = {
  fetchOffer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offer);
