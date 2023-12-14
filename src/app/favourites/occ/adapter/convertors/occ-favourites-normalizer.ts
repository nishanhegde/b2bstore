/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';

import {
  Converter,
  ConverterService,
} from '@spartacus/core';

import { Favourite } from 'src/app/favourites/root/models';
import { Occ } from '../../model/occ-favourites.model';


@Injectable({ providedIn: 'root' })
export class OccFavouriteNormalizer implements Converter<Occ.Favourite, Favourite> {
  constructor(private converter: ConverterService) {}

  convert(source: Occ.Favourite, target?: Favourite): Favourite {
    if (target === undefined) {
      target = { ...(source as any) } as Favourite;
    }
    console.log(target);
    return target;
  }
}
