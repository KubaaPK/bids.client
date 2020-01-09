import React from 'react';
import { WithLeftSidebarTemplate } from '../../templates';
import { Profile, ProfileNavigation } from '../../organisms';

export default function ShippingRates(): React.ReactElement {
  return (
    <>
      <WithLeftSidebarTemplate sideBar={<ProfileNavigation />}>
        <Profile.ShippingRates />
      </WithLeftSidebarTemplate>
    </>
  );
}
