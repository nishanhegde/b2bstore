/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { HttpErrorHandler } from '@spartacus/core';

import { facadeProviders } from './facade/facade-providers';

import { FavouritesConnector } from './connectors';

@NgModule({

  providers: [
    FavouritesConnector,
    ...facadeProviders,
  ],
})
export class FavouritesCoreModule {}
