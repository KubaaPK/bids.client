import React, { ReactElement } from 'react';
import * as S from './styled';
import * as Models from '../../../models';
import { SidebarLink } from '../../atoms';

type Props = {
  title: string;
  children: Models.Categories.Category['children'];
  isOpened: boolean;
  manageCategoriesOpen: (index: number, isOpened: boolean) => void;
  index: number;
};

export default function CategoryGroup(props: Props): ReactElement {
  const { title, children, isOpened, manageCategoriesOpen, index } = props;

  function manageChildCategoriesOpen() {
    if (!isOpened) {
      manageCategoriesOpen(index, true);
    } else {
      manageCategoriesOpen(index, false);
    }
  }

  return (
    <S.CategoryGroup>
      <span
        onClick={() => manageChildCategoriesOpen()}
        role="button"
        tabIndex={0}
        onKeyPress={() => manageChildCategoriesOpen()}
      >
        <SidebarLink text={title} type="paragraph" />
      </span>
      {isOpened && (
        <S.Children>
          {children.map(child => (
            <S.ChildrenGroup key={child.id}>
              <S.SubCategory numberOfChildren={children.length}>
                <S.SubCategoryName>{child.name}</S.SubCategoryName>
                {child.children.map(subChild => (
                  <S.LeafCategory to="/" key={subChild.id}>
                    {subChild.name}
                  </S.LeafCategory>
                ))}
              </S.SubCategory>
            </S.ChildrenGroup>
          ))}
        </S.Children>
      )}
    </S.CategoryGroup>
  );
}
