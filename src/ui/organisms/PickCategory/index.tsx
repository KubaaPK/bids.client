import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import * as Models from '../../../models';
import { Button, List } from '../../atoms';
import * as S from './styled';
import { IconButton } from '../../molecules';

type Props = {
  categories: Models.Categories.Category[];
  pickCategory: (
    parent: Models.Categories.Category,
    category: Models.Categories.Category['children'][0]['children'][0]
  ) => void;
};

export default function PickCategory(props: Props): React.ReactElement {
  const { categories, pickCategory } = props;
  const [
    showSecondLevelCategories,
    setShowSecondLevelCategories
  ] = React.useState<boolean>(false);
  const [secondLevelCategories, setSecondLevelCategories] = React.useState<
    Models.Categories.Category['children']
  >([]);
  const [topCategory, setTopCategory] = React.useState<
    Models.Categories.Category
  >();

  function selectTopCategory(
    top: Models.Categories.Category,
    children: Models.Categories.Category['children']
  ): void {
    setTopCategory(top);
    setShowSecondLevelCategories(true);
    setSecondLevelCategories(children);
  }

  function goBackToTopCategories(): void {
    setShowSecondLevelCategories(false);
    setSecondLevelCategories([]);
  }

  function handleCategorySelection(
    category: Models.Categories.Category['children'][0]['children'][0]
  ): void {
    pickCategory(topCategory!, category);
  }

  return (
    <>
      {showSecondLevelCategories && (
        <SecondLevelCategories
          secondLevelCategories={secondLevelCategories}
          goBack={goBackToTopCategories}
          pickCategory={handleCategorySelection}
        />
      )}
      {!showSecondLevelCategories && (
        <S.Wrapper>
          <List type="unordered">
            {categories.map(topLevelCategory => (
              <S.Category key={topLevelCategory.id}>
                <IconButton
                  icon={<ChevronRight />}
                  kind="blank"
                  type="button"
                  variant="default"
                  text={topLevelCategory.name}
                  left={false}
                  onClick={
                    () =>
                      selectTopCategory(
                        topLevelCategory,
                        topLevelCategory.children
                      )
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                />
              </S.Category>
            ))}
          </List>
        </S.Wrapper>
      )}
    </>
  );
}

type SecondLevelCategoriesProps = {
  secondLevelCategories: Models.Categories.Category['children'];
  goBack: () => void;
  pickCategory: (
    category: Models.Categories.Category['children'][0]['children'][0]
  ) => void;
};

function SecondLevelCategories(
  props: SecondLevelCategoriesProps
): React.ReactElement {
  const { secondLevelCategories, goBack, pickCategory } = props;
  const [
    showThirdLevelCategories,
    setShowThirdLevelCategories
  ] = React.useState<boolean>(false);
  const [thirdLevelCategories, setThirdLevelCategories] = React.useState<
    Models.Categories.Category['children'][0]['children']
  >([]);

  function goBackToSecondaryCategories(): void {
    setShowThirdLevelCategories(false);
    setThirdLevelCategories([]);
  }

  function selectSecondLevelCategory(
    children: Models.Categories.Category['children']
  ): void {
    setShowThirdLevelCategories(true);
    setThirdLevelCategories(children);
  }

  return (
    <>
      {showThirdLevelCategories && (
        <ThirdLevelCategories
          thirdLevelCategories={thirdLevelCategories}
          goBack={goBackToSecondaryCategories}
          pickCategory={pickCategory}
        />
      )}
      {!showThirdLevelCategories && (
        <S.Wrapper>
          <List type="unordered">
            <S.SecondLevelCategory>
              <IconButton
                icon={<ChevronLeft />}
                kind="blank"
                variant="danger"
                text="Wróć"
                type="button"
                onClick={goBack}
              />
            </S.SecondLevelCategory>
            {secondLevelCategories.map(secondLevelCategory => (
              <S.SecondLevelCategory key={secondLevelCategory.id}>
                <IconButton
                  icon={<ChevronRight />}
                  kind="blank"
                  variant="default"
                  text={secondLevelCategory.name}
                  left={false}
                  type="button"
                  onClick={
                    () =>
                      selectSecondLevelCategory(
                        secondLevelCategory.children as any
                      )
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                />
              </S.SecondLevelCategory>
            ))}
          </List>
        </S.Wrapper>
      )}
    </>
  );
}

type ThirdLevelCategoriesProps = {
  thirdLevelCategories: Models.Categories.Category['children'][0]['children'];
  goBack: () => void;
  pickCategory: (
    category: Models.Categories.Category['children'][0]['children'][0]
  ) => void;
};

function ThirdLevelCategories(
  props: ThirdLevelCategoriesProps
): React.ReactElement {
  const { thirdLevelCategories, goBack, pickCategory } = props;

  return (
    <S.Wrapper>
      <List type="unordered">
        <S.SecondLevelCategory>
          <IconButton
            icon={<ChevronLeft />}
            kind="blank"
            variant="danger"
            text="Wróć"
            type="button"
            onClick={goBack}
          />
        </S.SecondLevelCategory>
        {thirdLevelCategories.map(thirdLevelCategory => (
          <S.SecondLevelCategory key={thirdLevelCategory.id}>
            <Button
              kind="blank"
              variant="default"
              type="button"
              onClick={() => pickCategory(thirdLevelCategory)}
            >
              {thirdLevelCategory.name}
            </Button>
          </S.SecondLevelCategory>
        ))}
      </List>
    </S.Wrapper>
  );
}
