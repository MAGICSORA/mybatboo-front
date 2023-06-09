import { HttpParams } from '@angular/common/http';

export class ParamsBuilder {
  static from(params: any): HttpParams {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== undefined) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    }

    return httpParams;
  }
}
