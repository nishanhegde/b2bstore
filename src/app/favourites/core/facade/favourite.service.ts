

import { Injectable, OnDestroy, Optional } from '@angular/core';
import { FavouriteFacade } from '../../root/facade/favourite.facade';
import { Observable } from 'rxjs';
import { Favourite } from '../../root/models';
import { FavouritesConnector } from '../connectors';

@Injectable()
export class FavouriteService implements FavouriteFacade, OnDestroy {
    
    constructor(
        protected favouritesConnector: FavouritesConnector,
      ) {}
    
    getFavourites(): Observable<Favourite[]> {
       return this.favouritesConnector.getFavourites();
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

}