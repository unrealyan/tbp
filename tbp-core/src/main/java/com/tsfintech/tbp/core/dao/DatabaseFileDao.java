package com.tsfintech.tbp.core.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tsfintech.tbp.core.model.DatabaseFile;

public interface DatabaseFileDao extends JpaRepository<DatabaseFile, Long> {
}
