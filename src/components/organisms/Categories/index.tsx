import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { ShowCategoryButton, SectionTitle } from '../../atoms';
import { CategoryGroup } from '../../molecules';
import * as S from './styled';
import * as Models from '../../../models';
import { API_URL } from '../../../consts';
import useOutsideClick from '../../../shared/hooks/use-outside-click';

export default function Categories(): ReactElement {
  const [categories, setCategories] = useState<Models.Categories.Category[]>(
    []
  );
  const [showCategories, toggleCategories] = useState<boolean>(false);
  const [childCategoriesOpened, openChildCategories] = useState<
    {
      index: number;
      isOpened: boolean;
    }[]
  >([
    {
      index: 0,
      isOpened: false
    },
    {
      index: 1,
      isOpened: false
    },
    {
      index: 2,
      isOpened: false
    },
    {
      index: 3,
      isOpened: false
    },
    {
      index: 4,
      isOpened: false
    }
  ]);

  useEffect(() => {
    fetch(`${API_URL}/sale/categories`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => setCategories(res))
      .catch(err => console.log(err));
  }, []);

  const categoriesRef = useRef<HTMLSpanElement>(null);
  useOutsideClick(categoriesRef, () => {
    openChildCategories([
      {
        index: 0,
        isOpened: false
      },
      {
        index: 1,
        isOpened: false
      },
      {
        index: 2,
        isOpened: false
      },
      {
        index: 3,
        isOpened: false
      },
      {
        index: 4,
        isOpened: false
      }
    ]);
  });

  function closeAllOtherChildCategories(
    openedIndex: number
  ): { index: number; isOpened: boolean }[] {
    const arr = [
      {
        index: 0,
        isOpened: false
      },
      {
        index: 1,
        isOpened: false
      },
      {
        index: 2,
        isOpened: false
      },
      {
        index: 3,
        isOpened: false
      },
      {
        index: 4,
        isOpened: false
      }
    ];
    arr[openedIndex] = {
      index: openedIndex,
      isOpened: true
    };

    return arr;
  }

  function manageCategoriesOpen(index: number): void {
    openChildCategories(closeAllOtherChildCategories(index));
  }

  return (
    <S.Wrapper>
      <ShowCategoryButton
        handleClick={() => toggleCategories(!showCategories)}
      />
      <span ref={categoriesRef}>
        <S.Categories show={showCategories}>
          <SectionTitle
            text="Kategorie"
            font={{
              size: 's',
              weight: 500,
              variant: 'lighten',
              uppercase: true
            }}
          />
          {categories.length > 0 &&
            categories.map(
              (category: Models.Categories.Category, index: number) => (
                <CategoryGroup
                  title={category.name}
                  key={category.id!}
                  // eslint-disable-next-line react/no-children-prop
                  children={category.children}
                  isOpened={childCategoriesOpened[index].isOpened}
                  manageCategoriesOpen={manageCategoriesOpen}
                  index={index}
                />
              )
            )}
        </S.Categories>
      </span>
    </S.Wrapper>
  );
}
