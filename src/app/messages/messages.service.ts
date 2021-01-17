import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { filter } from 'rxjs/operators';

// we dont make this a global singleton as it could have multiple instances
@Injectable()
export class MessagesService {

  private subject = new BehaviorSubject<string[]>([]);
  // we can emit values directly with errors$
  errors$: Observable<string[]> = this.subject.asObservable()
    .pipe(
      filter(messages => messages && messages.length > 0)
    );

  constructor() {
  }

  showErrors(...errors: string[]) {
    this.subject.next(errors);
  }
}
