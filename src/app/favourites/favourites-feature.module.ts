/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';

import { FavouritesBaseOccModule } from './occ/favourites-base-occ.module';
import { FavouritesComponentsModule } from './component/favourites-components.module';
import { FavouritesRootModule } from './root/favourites-root.module';
import { FavouritesCoreModule } from './core/favourites-core.module';

@NgModule({
  imports: [FavouritesComponentsModule,FavouritesRootModule,FavouritesCoreModule,FavouritesBaseOccModule],
})
export class FavouritesFeatureModule {}
