package com.samaritan.wrcapp.spark;


import java.util.ArrayList;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Worker {
	private int id;
	private String firstName;
	private String middleName;
	private Date dateOfBirth;
	private String SSN;
	private ArrayList<Skill> skills;
	private String address1;
	private String address2;
	private String city;
	private String state;
	private String phone;
	private String email;
	private String ethnicity;
	private Boolean jobSeeker;
	private Boolean activeWorker;
}
