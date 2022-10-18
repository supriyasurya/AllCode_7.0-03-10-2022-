package com.Employee.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoudException extends RuntimeException {
	
	
	public static final long serialVersionUID = 1L;
	private String resourceName;
	private String fieldName;
	private Integer fieldvalue;
	
	
	public String getResourceName() {
		return resourceName;
	}
	public String getFieldName() {
		return fieldName;
	}
	public Integer getFielvalue() {
		return fieldvalue;
	}
	

   public ResourceNotFoudException(String resourceName, String fieldName, Integer fieldvalue) {
	   super(String.format("%s not found with %s: %s", resourceName, fieldName, fieldvalue));
	   this.resourceName = resourceName;
	   this.fieldName = fieldName;
	   this.fieldvalue = fieldvalue;
	   
   }
    
	
	
}

