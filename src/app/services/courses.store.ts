import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Course, sortCoursesBySeqNo} from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesStore {
  // this is a stateful service
  courses$: Observable<Course[]>;

  constructor() {
  }

  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$
      .pipe(
        map(courses => courses.filter(course => course.category == category)
          .sort(sortCoursesBySeqNo))
      );
  }
}
