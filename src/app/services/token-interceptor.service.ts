import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SharedserviceService } from './sharedservice.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; },next: { handle: (arg0: any) => any; }){
    let sharedservice = this.injector.get(SharedserviceService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${sharedservice.gettoken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}