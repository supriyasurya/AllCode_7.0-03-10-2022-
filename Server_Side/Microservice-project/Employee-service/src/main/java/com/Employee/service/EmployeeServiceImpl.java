package com.Employee.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Employee.entity.Employee;

@Service
public class EmployeeServiceImpl implements IEmployeeService {

	             List<Employee> list = List.of(new Employee(22111L, "Supriya", "1234567890"),
			new Employee(22112L, "Supriya1", "1234567890"), new Employee(22113L, "Supriya2", "1234567890"),
			new Employee(22114L, "Supriya3", "1234567890"), new Employee(22115L, "Supriya4", "1234567890"),
			new Employee(22116L, "Supriya5", "1234567890"), new Employee(22117L, "Supriya6", "1234567890"),
			new Employee(22118L, "Supriya7", "1234567890"), new Employee(22119L, "Supriya8", "1234567890"));

	@Override
	public Employee getEmployee(Long id) {
		// TODO Auto-generated method stub
		return list.stream().filter(employee -> employee.getEmpId().equals(id)).findAny().get();
	}

}
