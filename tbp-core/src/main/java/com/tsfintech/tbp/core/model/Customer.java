package com.tsfintech.tbp.core.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.tsfintech.tbp.core.constant.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Customer extends BaseModel {

    @Column(length = 25, nullable = false)
    private String name;

    @Column(length = 10, nullable = false)
    @Enumerated(EnumType.STRING)
    private IdType idType;

    @Column(length = 50, nullable = false)
    private String idCode;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private MaritalStatus maritalStatus;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private Education education;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private AcademicDegree degree;

    @Column(length = 25)
    private String telNum;

    @Column(length = 25)
    private String mobileNum;

    @Column(length = 25)
    private String companyTelNum;

    @Column(length = 60)
    private String email;

    @Column(length = 6)
    private String householdAreaCode;

    @Column
    private String householdAddress;

    @Column(length = 12)
    private String householdPostCode;

    @Column(length = 12)
    private String occupation;

    @Column(length = 60)
    private String companyName;

    @Column(length = 6)
    private String industryCode;

    @Column
    private String companyAddress;

    @Column(length = 12)
    private String companyPostCode;

    @Temporal(TemporalType.DATE)
    private Date entryDate;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private JobPosition jobPosition;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private JobLevel jobLevel;

    @Column
    private BigDecimal annualSalary;

    @Column(length = 6)
    private String residenceAreaCode;

    @Column
    private String residenceAddress;

    @Column(length = 12)
    private String residencePostCode;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private ResidenceStatus residenceStatus;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public IdType getIdType() {
        return idType;
    }

    public void setIdType(IdType idType) {
        this.idType = idType;
    }

    public String getIdCode() {
        return idCode;
    }

    public void setIdCode(String idCode) {
        this.idCode = idCode;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public MaritalStatus getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(MaritalStatus maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public Education getEducation() {
        return education;
    }

    public void setEducation(Education education) {
        this.education = education;
    }

    public AcademicDegree getDegree() {
        return degree;
    }

    public void setDegree(AcademicDegree degree) {
        this.degree = degree;
    }

    public String getTelNum() {
        return telNum;
    }

    public void setTelNum(String telNum) {
        this.telNum = telNum;
    }

    public String getMobileNum() {
        return mobileNum;
    }

    public void setMobileNum(String mobileNum) {
        this.mobileNum = mobileNum;
    }

    public String getCompanyTelNum() {
        return companyTelNum;
    }

    public void setCompanyTelNum(String companyTelNum) {
        this.companyTelNum = companyTelNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHouseholdAreaCode() {
        return householdAreaCode;
    }

    public void setHouseholdAreaCode(String householdAreaCode) {
        this.householdAreaCode = householdAreaCode;
    }

    public String getHouseholdAddress() {
        return householdAddress;
    }

    public void setHouseholdAddress(String householdAddress) {
        this.householdAddress = householdAddress;
    }

    public String getHouseholdPostCode() {
        return householdPostCode;
    }

    public void setHouseholdPostCode(String householdPostCode) {
        this.householdPostCode = householdPostCode;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getIndustryCode() {
        return industryCode;
    }

    public void setIndustryCode(String industryCode) {
        this.industryCode = industryCode;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public String getCompanyPostCode() {
        return companyPostCode;
    }

    public void setCompanyPostCode(String companyPostCode) {
        this.companyPostCode = companyPostCode;
    }

    public Date getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(Date entryDate) {
        this.entryDate = entryDate;
    }

    public JobPosition getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(JobPosition jobPosition) {
        this.jobPosition = jobPosition;
    }

    public JobLevel getJobLevel() {
        return jobLevel;
    }

    public void setJobLevel(JobLevel jobLevel) {
        this.jobLevel = jobLevel;
    }

    public BigDecimal getAnnualSalary() {
        return annualSalary;
    }

    public void setAnnualSalary(BigDecimal annualSalary) {
        this.annualSalary = annualSalary;
    }

    public String getResidenceAreaCode() {
        return residenceAreaCode;
    }

    public void setResidenceAreaCode(String residenceAreaCode) {
        this.residenceAreaCode = residenceAreaCode;
    }

    public String getResidenceAddress() {
        return residenceAddress;
    }

    public void setResidenceAddress(String residenceAddress) {
        this.residenceAddress = residenceAddress;
    }

    public String getResidencePostCode() {
        return residencePostCode;
    }

    public void setResidencePostCode(String residencePostCode) {
        this.residencePostCode = residencePostCode;
    }

    public ResidenceStatus getResidenceStatus() {
        return residenceStatus;
    }

    public void setResidenceStatus(ResidenceStatus residenceStatus) {
        this.residenceStatus = residenceStatus;
    }
}
