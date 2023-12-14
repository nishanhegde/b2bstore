/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';

import { FavouritesAdapter } from '../core/connectors';
import { OccFavouritesAdapter } from './adapter';
import { FAVOURITE_NORMALIZER, OccFavouriteNormalizer } from './adapter/convertors';
import { defaultOccFavouriteConfig } from './config/default-occ-favourites-config';

@NgModule({
  imports: [CommonModule],
  providers: [
    provideDefaultConfig(defaultOccFavouriteConfig),
    {
      provide: FavouritesAdapter,
      useClass: OccFavouritesAdapter,
    },
    {
      provide: FAVOURITE_NORMALIZER,
      useExisting: OccFavouriteNormalizer,
      multi: true,
    },
  ],
})
export class FavouritesBaseOccModule {}
