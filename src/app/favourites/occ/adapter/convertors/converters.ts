/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { Favourite } from 'src/app/favourites/root/models';


export const FAVOURITE_NORMALIZER = new InjectionToken<Converter<any, Favourite>>(
  'FavouriteNormalizer'
);

