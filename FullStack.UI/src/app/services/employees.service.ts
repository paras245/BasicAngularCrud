import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  
  baseApiUrl :string=environment.baseApiUrl;
  constructor(private http: HttpClient) { }


  getAllEmployees(): Observable<Employee[]>{
   return this.http.get<Employee[]>('https://localhost:7120/api/Employees');
  }

  addEmployee(addEmployeeRequest: Employee):Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>('https://localhost:7120/api/Employees',
    addEmployeeRequest);
  }
  getEmployee(id:string): Observable<Employee>{
    return this.http.get<Employee>('https://localhost:7120/api/Employees/'+id);
  }

  updateEmployee(id:string,updateEmployeeRequest:Employee):Observable<Employee>
  {
    return this.http.put<Employee>('https://localhost:7120/api/Employees/'+id,
    updateEmployeeRequest)
  }
  deleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>('https://localhost:7120/api/Employees/'+id);
  }
}
