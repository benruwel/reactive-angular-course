import { Course } from "./../model/course";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  // shareReplay operator stores the http res in memory and serves it to all the subscribes
  // thus there is only one http req made

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses").pipe(
      map((res) => res["payload"]),
      shareReplay()
    );
  }
}
