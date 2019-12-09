import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Models from '../../../../models';
import * as S from './styled';
import Accordion from '../../../../components/Accordion';
import { State } from '../../../../redux/reducers';

type ReduxState = {
  reviewRequests: Models.Reviews.ReviewRequest[];
};

type Props = ReduxState;

const Options: React.FunctionComponent<Props> = (props: Props) => {
  const { reviewRequests } = props;

  const sellingOptions = () => {
    return (
      <S.Option>
        <Link to="/moje-konto/moje-cenniki">Cenniki dostaw</Link>
      </S.Option>
    );
  };

  const salesOptions = () => {
    return (
      <S.Option>
        <Link to="/moje-konto/moja-sprzedaz/sprzedane">Sprzedane</Link>
      </S.Option>
    );
  };

  const buyingsOptions = () => {
    return (
      <S.Option>
        <Link to="/moje-konto/moje-zakupy/kupione">Kupione</Link>
      </S.Option>
    );
  };

  const pricingOptions = () => {
    return (
      <S.Option>
        <Link to="/moje-konto/rachunki/rozliczenia">Rozliczenia</Link>
      </S.Option>
    );
  };

  const reviewsOptions = () => {
    return (
      <>
        <S.Option>
          {reviewRequests && (reviewRequests as any).length > 0 && (
            <S.NotificationBubble>
              {(reviewRequests as any).length}
            </S.NotificationBubble>
          )}
          <Link to="/oceny/wystaw">Wystaw</Link>
        </S.Option>
        <S.Option>
          <Link to="/oceny/wystawione">Wystawione</Link>
        </S.Option>
        <S.Option>
          <Link to="/">Otrzymane</Link>
        </S.Option>
      </>
    );
  };

  return (
    <S.Options>
      <Accordion title="Moja sprzedaż" content={salesOptions()} />
      <Accordion title="Ustawienia sprzedaży" content={sellingOptions()} />
      <Accordion title="Moje zakupy" content={buyingsOptions()} />
      <Accordion title="Rachunki" content={pricingOptions()} />
      <Accordion
        title={`Ocena sprzedaży ${
          (reviewRequests as any).length > 0
            ? `(${(reviewRequests as any).length})`
            : ''
        }`}
        content={reviewsOptions()}
      />
    </S.Options>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    reviewRequests: state.reviews.fetchReviewRequests.fetchedReviewRequests
  };
};

export default connect(
  mapStateToProps,
  {}
)(Options);
