

import { Favourite } from '../../root/models';
import { Observable } from 'rxjs';

export abstract class FavouritesAdapter {
  /**
   * Abstract method used to load all carts
   *
   * @param userId
   */
  abstract getFavourites(): Observable<Favourite[]>;

}
