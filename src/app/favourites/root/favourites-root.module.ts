/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  provideDefaultConfig,
  provideDefaultConfigFactory,
} from '@spartacus/core';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { FAVOURITES } from './feature-name';


export function defaultFavouritesComponentsConfig() {
  const config = {
    featureModules: {
      [FAVOURITES]: {
        cmsComponents: [
          'FavouritesComponent',
        ],
      },
    },
  };
  return config;
}

@NgModule({

  providers: [
    provideDefaultConfigFactory(defaultFavouritesComponentsConfig),
  ],
})
export class FavouritesRootModule {}
