package com.record.Service;

import java.util.List;

import com.record.Entity.EmploymentRecord;

public interface IRecordService {
	
	public List<EmploymentRecord> getRecordOfEmployee(Long empId);

}
