package com.tsfintech.tbp.core.model;

import javax.persistence.*;

@MappedSuperclass
public abstract class BaseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false)
    @Version
    private int version;

    @Column(nullable = false)
    private long upOrgId;

    @Column(nullable = false)
    private long downOrgId;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public long getUpOrgId() {
        return upOrgId;
    }

    public void setUpOrgId(long upOrgId) {
        this.upOrgId = upOrgId;
    }

    public long getDownOrgId() {
        return downOrgId;
    }

    public void setDownOrgId(long downOrgId) {
        this.downOrgId = downOrgId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BaseModel baseModel = (BaseModel) o;

        return id == baseModel.id;

    }

    @Override
    public int hashCode() {
        return (int) (id ^ (id >>> 32));
    }
}
