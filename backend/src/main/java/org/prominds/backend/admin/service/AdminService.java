package org.prominds.backend.admin.service;

import org.prominds.backend.admin.entity.AdminEntity;
import org.prominds.backend.admin.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    private final BCryptPasswordEncoder  passwordEncoder;

    @Autowired
    public AdminService(AdminRepository adminRepository, BCryptPasswordEncoder passwordEncoder){
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public AdminEntity register(String email, String password){
        AdminEntity admin = new AdminEntity();
        admin.setEmail(email);
        admin.setPassword(passwordEncoder.encode(password));

        return adminRepository.save(admin);
    }

    public AdminEntity login(String email, String password){
        AdminEntity admin = adminRepository.findByEmail(email);
        if(admin !=null && passwordEncoder.matches(password, admin.getPassword())){
            return admin;
        }
        return null;
    }
}
