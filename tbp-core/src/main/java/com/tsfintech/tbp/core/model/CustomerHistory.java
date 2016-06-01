package com.tsfintech.tbp.core.model;

import java.util.Date;

import javax.persistence.*;

import com.tsfintech.tbp.core.constant.ChangeReason;
import com.tsfintech.tbp.core.constant.IdType;

@Entity
public class CustomerHistory extends BaseModel {

    @Column(nullable = false)
    private long customerId;

    @Column(length = 25, nullable = false)
    private String name;

    @Column(length = 10, nullable = false)
    @Enumerated(EnumType.STRING)
    private IdType idType;

    @Column(length = 50, nullable = false)
    private String idCode;

    @Lob
    @Column(nullable = false)
    private String customerJson;

    @Temporal(TemporalType.TIMESTAMP)
    private Date startTime;

    @Temporal(TemporalType.TIMESTAMP)
    private Date endTime;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private ChangeReason changeReason;

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

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

    public String getCustomerJson() {
        return customerJson;
    }

    public void setCustomerJson(String customerJson) {
        this.customerJson = customerJson;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public ChangeReason getChangeReason() {
        return changeReason;
    }

    public void setChangeReason(ChangeReason changeReason) {
        this.changeReason = changeReason;
    }
}
