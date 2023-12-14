

import { Injectable } from '@angular/core';
import { facadeFactory, User } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Favourite } from '../models';
import { FAVOURITES } from '../feature-name';

@Injectable({
  providedIn: 'root',
  useFactory: () =>
    facadeFactory({
      facade: FavouriteFacade,
      feature: FAVOURITES,
      methods: [
        'getFavourites',
      ],
      async: true,
    }),
})
export abstract class FavouriteFacade {
  /**
   * Returns active cart
   */
  abstract getFavourites(): Observable<Favourite[]>;
}
