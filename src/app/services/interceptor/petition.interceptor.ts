import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class PetitionInterceptor implements HttpInterceptor {

  constructor ( public loaderService : LoaderService ) { }
  intercept ( req : HttpRequest < any > , next : HttpHandler ) : Observable < HttpEvent < any >> {
    console.log('intercept')
   this.loaderService.isLoading.next ( true ) ;
    return next.handle( req ).pipe(
    finalize(() =>{
      this.loaderService.isLoading.next(false) ;
    }))
  }
}
