/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Provider } from '@angular/core';
import { FavouriteFacade } from '../../root/facade/favourite.facade';
import { FavouriteService } from './favourite.service';


export const facadeProviders: Provider[] = [
  FavouriteService,
  {
    provide: FavouriteFacade,
    useExisting: FavouriteService,
  },
  
];
