/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CartAdapter } from '@spartacus/cart/base/core';
import {
  CART_NORMALIZER,
  Cart,
  SaveCartResult,
} from '@spartacus/cart/base/root';
import {
  ConverterService,
  InterceptorUtil,
  LoggerService,
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  USE_CLIENT_TOKEN,
  normalizeHttpError,
} from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FavouritesAdapter } from '../../core/connectors/favourites.adapter';
import { FAVOURITE_NORMALIZER } from './convertors/converters';
import { Favourite } from '../../root/models';
import { Occ } from '../model/occ-favourites.model';
@Injectable()
export class OccFavouritesAdapter implements FavouritesAdapter {
  protected logger = inject(LoggerService);
  constructor(
    protected http: HttpClient,
    protected occEndpointsService: OccEndpointsService,
    protected converterService: ConverterService
  ) {}

  public getFavourites(): Observable<Favourite[]> {

     return this.http
      .get<Occ.FavoritesResponse>(
        this.occEndpointsService.buildUrl('favourites', {})
      )
      .pipe(  
        map((favouriteList) => favouriteList.favourites ?? []),
      this.converterService.pipeableMany(FAVOURITE_NORMALIZER)
      );
  }
  
}
