/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { PromotionsModule } from '@spartacus/storefront';

import { FavouritesComponent } from './favourites.component';

@NgModule({
  imports: [

  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        FavouritesListingComponent: {
          component: FavouritesComponent,
        },
      },
    }),
  ],
  declarations: [FavouritesComponent],
  exports: [FavouritesComponent],
})
export class FavouritesModule {}