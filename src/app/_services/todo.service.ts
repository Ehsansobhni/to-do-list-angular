import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments";

@Injectable({ providedIn: "root" })
export class TodoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTodo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTodo(todo: { name: string; completed: boolean }) {
    return this.http.post(this.apiUrl, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateTodo(id: number, update: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, update);
  }
}
