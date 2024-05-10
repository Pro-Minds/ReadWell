package org.prominds.backend.admin.repository;

import org.prominds.backend.admin.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<AdminEntity, Long> {
    AdminEntity findByEmail(String email);
}
