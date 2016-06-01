package com.tsfintech.tbp.core.model;

import java.util.Date;

import javax.persistence.*;

import com.tsfintech.tbp.core.constant.RelationShipType;

@Entity
public class CustomerRelationShip extends BaseModel {

    @Column(length = 10, nullable = false)
    @Enumerated(EnumType.STRING)
    private RelationShipType relationShipType;

    @Column(nullable = false)
    private long fromCustomerId;

    @Column(nullable = false)
    private long toCustomerId;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date endDate;

    public RelationShipType getRelationShipType() {
        return relationShipType;
    }

    public void setRelationShipType(RelationShipType relationShipType) {
        this.relationShipType = relationShipType;
    }

    public long getFromCustomerId() {
        return fromCustomerId;
    }

    public void setFromCustomerId(long fromCustomerId) {
        this.fromCustomerId = fromCustomerId;
    }

    public long getToCustomerId() {
        return toCustomerId;
    }

    public void setToCustomerId(long toCustomerId) {
        this.toCustomerId = toCustomerId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
