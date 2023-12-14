import { Component } from '@angular/core';
import { FavouritesConnector } from '../../core/connectors';
import { Observable } from 'rxjs';
import { Favourite } from '../../root/models';
import { FavouriteFacade } from '../../root/facade/favourite.facade';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  favourites$: Observable<Favourite[]> | undefined;

  constructor(
    protected favouriteService: FavouriteFacade,
  ) {}

  ngOnInit() {

    this.favourites$ = this.favouriteService
      .getFavourites();
  }

}
