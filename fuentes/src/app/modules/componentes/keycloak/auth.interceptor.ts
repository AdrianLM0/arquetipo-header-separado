import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(
		req: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		return new Observable((observer) => {
			this.authService
				.getToken()
				.then((token) => {
					if (token) {
						const authReq = req.clone({
							headers: req.headers.set('Authorization', `Bearer ${token}`),
						});
						next.handle(authReq).subscribe({
							next: (event) => observer.next(event),
							error: (err) => observer.error(err),
							complete: () => observer.complete(),
						});
					} else {
						// Si no hay token, simplemente continúa con la petición original
						next.handle(req).subscribe({
							next: (event) => observer.next(event),
							error: (err) => observer.error(err),
							complete: () => observer.complete(),
						});
					}
				})
				.catch((error) => {
					observer.error(error);
				});
		});
	}
}
