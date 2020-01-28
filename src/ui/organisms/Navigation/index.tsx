import React, { ReactElement, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import useOnClickOutside from 'use-onclickoutside';
import * as S from './styled';
import { Logo } from '../../atoms';
import { IconButton, Menu } from '../../molecules';

type Props = {
  isUserAuthenticated: boolean;
  isUserAdmin: boolean;
};

export default function Navigation(props: Props): ReactElement {
  const { isUserAuthenticated, isUserAdmin } = props;

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const ref: any = useRef(null);
  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <S.Navigation>
      <Logo type="link" />
      <IconButton
        icon={showMenu ? <ChevronUp /> : <ChevronDown />}
        disabled={false}
        kind="blank"
        type="button"
        variant="default"
        text="Moje konto"
        onClick={() => setShowMenu(!showMenu)}
      />
      <S.Menu ref={ref}>
        {showMenu && (
          <Menu
            isUserAuthenticated={isUserAuthenticated}
            isUserAdmin={isUserAdmin}
          />
        )}
      </S.Menu>
    </S.Navigation>
  );
}
