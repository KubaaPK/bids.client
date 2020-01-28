import React from 'react';
import { ChevronDown, ChevronUp, Grid } from 'react-feather';
import useOnClickOutside from 'use-onclickoutside';

import * as Models from '../../../models';
import { Link, List, Button } from '../../atoms';
import { IconButton } from '../../molecules';
import * as S from './styled';

type Props = {
  categories: Models.Categories.Category[];
};

export default function Categories(props: Props): React.ReactElement {
  const { categories } = props;
  const [showCategories, setShowCategories] = React.useState<boolean>(false);
  const [
    openedSecondLevelCategories,
    setOpenedSecondLevelCategories
  ] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    if (categories) {
      setOpenedSecondLevelCategories(Array(categories.length).fill(false));
    }
  }, [categories]);

  function closeAllOtherSecondLevelCategories(openedIndex: number): boolean[] {
    const arr: boolean[] = [...openedSecondLevelCategories];
    arr.fill(false);
    arr[openedIndex] = true;
    return arr;
  }

  function manageSecondLevelCategoriesOpenings(index: number): void {
    setOpenedSecondLevelCategories(closeAllOtherSecondLevelCategories(index));
  }

  function closeAllCategories(): void {
    const arr: boolean[] = [...openedSecondLevelCategories];
    arr.fill(false);
    setOpenedSecondLevelCategories(arr);
  }

  const ref = React.useRef(null);
  useOnClickOutside(ref, closeAllCategories);

  return (
    <S.Wrapper>
      <IconButton
        icon={<Grid />}
        text="Kategorie"
        kind="blank"
        type="button"
        variant="default"
        onClick={() => setShowCategories(!showCategories)}
      />
      <S.Categories opened={showCategories} show={showCategories}>
        <span ref={ref}>
          <List type="unordered">
            {openedSecondLevelCategories.length > 0 &&
              categories.map((topCategory, index) => (
                <span
                  onClick={() => manageSecondLevelCategoriesOpenings(index)}
                  onKeyDown={() => manageSecondLevelCategoriesOpenings(index)}
                  tabIndex={0}
                  role="button"
                  key={topCategory.id}
                >
                  <FirstLevelCategory
                    firstLevelCategory={topCategory}
                    isOpened={openedSecondLevelCategories[index]}
                  />
                </span>
              ))}
          </List>
        </span>
      </S.Categories>
    </S.Wrapper>
  );
}

type FirstLevelCategoryProps = {
  firstLevelCategory: Models.Categories.Category;
  isOpened: boolean;
};

function FirstLevelCategory(
  props: FirstLevelCategoryProps
): React.ReactElement {
  const { firstLevelCategory, isOpened } = props;

  return (
    <S.FirstLevelCategory key={firstLevelCategory.id}>
      <Button kind="blank" type="button" variant="default">
        {firstLevelCategory.name}
      </Button>
      {isOpened && (
        <S.SecondLevelCategories>
          {firstLevelCategory.children.map((secondLevelCategory: any) => (
            <SecondLevelCategory
              secondLevelCategory={secondLevelCategory}
              key={secondLevelCategory.id}
            />
          ))}
        </S.SecondLevelCategories>
      )}
    </S.FirstLevelCategory>
  );
}

type SecondLevelCategoryProps = {
  secondLevelCategory: Models.Categories.Category;
};

function SecondLevelCategory(
  props: SecondLevelCategoryProps
): React.ReactElement {
  const { secondLevelCategory } = props;
  const [
    showThirdLevelCategories,
    setShowThirdLevelCategories
  ] = React.useState<boolean>(true);

  return (
    <S.SecondLevelCategory key={secondLevelCategory.id}>
      <IconButton
        icon={showThirdLevelCategories ? <ChevronUp /> : <ChevronDown />}
        left={false}
        text={secondLevelCategory.name}
        kind="blank"
        type="button"
        variant="default"
        onClick={() => setShowThirdLevelCategories(!showThirdLevelCategories)}
      />
      {showThirdLevelCategories && (
        <S.ThirdLevelCategories>
          {secondLevelCategory.children.map(thirdLevelCategory => (
            <S.ThirdLevelCategory key={thirdLevelCategory.id}>
              <Link to={`?category.id=${thirdLevelCategory.id}`}>{thirdLevelCategory.name}</Link>
            </S.ThirdLevelCategory>
          ))}
        </S.ThirdLevelCategories>
      )}
    </S.SecondLevelCategory>
  );
}
