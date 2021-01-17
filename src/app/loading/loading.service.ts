import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, concatMap, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  // this is class remembers the last value emitted by the subject
  private loadingSubject = new BehaviorSubject<boolean>(false);

  // this ensures proper Encapsulation of the loading$, can't be altered only subscribed to
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {
    console.log('Loading service created ...');
  }

  // this method taps into the observable's life cycle making it more efficient
  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
      // this factory method creates an observable that emits value of null and completes immediately
     return  of(null)
      .pipe(
          tap(() => this.loadingOn()),
          // higher order mapping
          // takes the null and returns the input obs$
          concatMap(() => obs$),
          // here the observable is obs$, and the finalize listens to obs$ for completion of erroring out
          finalize(() => this.loadingOff())
      );
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }
  loadingOff() {
    this.loadingSubject.next(false);
  }
}
