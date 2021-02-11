import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  private storage: Storage;

  constructor() {

    this.storage = window.localStorage;

  }

  addItemStorage(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  getItemStorage(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  removeItemStorage(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clearStorage(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
