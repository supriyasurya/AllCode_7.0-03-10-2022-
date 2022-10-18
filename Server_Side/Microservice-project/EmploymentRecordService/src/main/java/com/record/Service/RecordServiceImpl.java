package com.record.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.record.Entity.EmploymentRecord;

@Service
public class RecordServiceImpl implements IRecordService {
	
	// fake list of employment record
	
	List<EmploymentRecord> list = List.of(
			new EmploymentRecord(101L, "wipro", "wiprowi@gmail.com", 5, 1311L),
			new EmploymentRecord(102L, "TCS", "tcsts@gmail.com", 6, 1312L),
			new EmploymentRecord(103L, "Amazon", "amazoni@gmail.com", 8, 1313L),
			new EmploymentRecord(104L, "Google", "google@gmail.com", 7, 1314L),
			new EmploymentRecord(105L, "Cognizant", "cognizant@gmail.com", 4, 1315L),
			new EmploymentRecord(106L, "Deloitte", "deloitte@gmail.com", 3, 1316L),
			new EmploymentRecord(107L, "Dell", "dell@gmail.com", 2, 1317L),
			new EmploymentRecord(108L, "Samsung", "samsung@gmail.com", 0, 1311L)
			);

	@Override
	public List<EmploymentRecord> getRecordOfEmployee(Long empId) {
		return list.stream().filter(employmentRecord -> employmentRecord.getEmpId().equals(empId)).collect(Collectors.toList());
	}

}
