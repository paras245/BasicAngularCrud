import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Employee[] =[];
  constructor(private employeeService: EmployeesService){}

ngOnInit(): void {

  this.employeeService.getAllEmployees()
  .subscribe({
    next:(employee)=>{
     //console.log(employee); 
     this.employee=employee;
    },
    error:(response)=>{
      console.log(response); 
     }
  })
    
  }
}

