/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { FavouritesAdapter } from './favourites.adapter';
import { Favourite } from '../../root/models';

@Injectable({
  providedIn: 'root',
})
export class FavouritesConnector {
  constructor(protected adapter: FavouritesAdapter) {}

  public getFavourites(): Observable<Favourite[]> {
    return this.adapter.getFavourites();
  }
}
