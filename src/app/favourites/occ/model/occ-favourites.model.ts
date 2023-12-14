// Define a TypeScript model for the JSON structure
export declare namespace Occ {
export interface Favourite {
    dateOfCreation: string;
    id: string;
    name: string;
    productCount: number;
  }
  
export interface FavoritesResponse {
    favourites: Favourite[];
  }
}