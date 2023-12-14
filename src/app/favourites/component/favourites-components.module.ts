/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavouritesModule } from './favourites/favourites.module';


@NgModule({
  imports: [
    CommonModule,
    FavouritesModule,
  
  ],
  exports: [
    FavouritesModule,
  ],
})
export class FavouritesComponentsModule {}
