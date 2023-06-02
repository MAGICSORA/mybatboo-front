import { Observable, of } from 'rxjs';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Preferences } from "@capacitor/preferences";

const globalLocalMemoeryStorage = {};

/**
 * https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea/
 * localStorage를 try-catch로 감싼 이유는 브라우저의 설정에 따라
 * localStorage, sessionStorage를 사용하지 못하게 막혀있을 수 있기 때문입니다.
 * typeof localStorage === 'undefined' 같은 if condition이 들어가는 것조차도
 *
 * SecurityError: Failed to read the 'localStorage' property from 'Window': Access is denied for this doc...
 *
 * 와 같은 에러가 날 수 있기 때문에 if 체크도 하지 않고 바로 try-catch를 했습니다.
 */
@Injectable()
export class StorageService implements IStorageService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
  }

  isReady(): Observable<void> {
    return of(); // localStorage는 바로 사용 가능한 상태
  }

  set<T = string>(key: string, value: T) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        Preferences.set({
          key,
          value: StorageService._toString(value)
        });
        // localStorage.setItem(key, StorageService._toString(value));
      } catch (e) {
        /* do nothing */
      }
    }
    globalLocalMemoeryStorage[key] = value;
  }

  async get<T = string>(key: string, defaultValue?: T): T {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const ret = await Preferences.get({ key });
        return StorageService._fromString(ret.value) || defaultValue
      } catch (e) {
        /* do nothing */
      }
    }
    return globalLocalMemoeryStorage[key] || defaultValue;
  }

  remove(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        Preferences.remove({ key });
      } catch (e) {
        /* do nothing */
      }
    }
    delete globalLocalMemoeryStorage[key];
  }

  static _toString(value: any): string {
    if (typeof value === 'string') {
      return value;
    } else if (value === undefined || value === null) {
      return value;
    } else {
      try {
        return JSON.stringify(value);
      } catch (e) {
        return value;
      }
    }
  }

  static _fromString(value: string | undefined | null): any {
    if (value === undefined || value === null) {
      return value;
    }
    try {
      const object = JSON.parse(value);
      if (typeof object === 'object') {
        return object;
      } else if (Array.isArray(object)) {
        return object;
      } else {
        return value;
      }
    } catch (e) {
      return value;
    }
  }
}

export interface IStorageService {
  isReady(): Observable<void>;

  get<T>(key: string, defaultValue?: T): T;

  set<T>(key: string, value: T): void;

  remove(key: string): void;
}
