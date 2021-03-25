import { Observable } from '@nativescript/core/data/observable';
import * as storeRating from 'nativescript-store-ratings';

export class HomeViewModel extends Observable {

  constructor() {
    super();
  }

  public initStoreRating() {
    storeRating.initRating();
  }
}