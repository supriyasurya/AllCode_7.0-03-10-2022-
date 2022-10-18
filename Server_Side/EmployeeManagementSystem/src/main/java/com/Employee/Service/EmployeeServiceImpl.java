package com.Employee.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Employee.Entity.Employee;
import com.Employee.Exception.ResourceNotFoudException;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	
	
	
  @Autowired
	IEmployeeRepo employeeRepo;
	
	@Override
	public Integer saveEmployee(Employee employee) {
		Employee savedEmployee = employeeRepo.save(employee);
		return savedEmployee.getId();
	}

	@Override
	public List<Employee> getAllEmployees() {
		
		return employeeRepo.findAll();
	}

	@Override
	public Optional<Employee> getEmployee(Integer id) {
		
		return employeeRepo.findById(id);
	}

	@Override
	public void deleteEmployee(Integer id) {
		employeeRepo.deleteById(id);
		
	}

	@Override
	public Employee updateEmployee(Employee employee, Integer id) {
		// we will check if an employee exists from a given id or not
		
		Employee existingEmployee = employeeRepo.findById(id).orElseThrow(
				()-> new ResourceNotFoudException("Employee", "id", id));
		existingEmployee.setName(employee.getName());
		existingEmployee.setEmp_position(employee.getEmp_position());
		existingEmployee.setSalary(employee.getSalary());
		existingEmployee.setQualification(employee.getQualification());
		 
		employeeRepo.save(existingEmployee);
		
		return existingEmployee;
	}

 /*	@Override
	public Employee updateEmployee(Employee employee, Integer id) {
		// we will check if an employee exists from a given id or not
		Employee exsitingEmployee = employeeRepo.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Employee", "id", id));
		
		existingEmployee.setName(employee.getName());
		existingEmployee.setEmp_position(employee.getEmp_position());
		existingEmployee.setEmp_position(employee.getEmp_position());
		existingEmployee.setEmp_position(employee.getEmp_position());
		
		return null;
	}
	*/
	
	
	

}
