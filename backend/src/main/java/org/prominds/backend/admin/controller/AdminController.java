package org.prominds.backend.admin.controller;

import org.prominds.backend.admin.dto.LoginRequest;
import org.prominds.backend.admin.dto.RegistrationRequest;
import org.prominds.backend.admin.entity.AdminEntity;
import org.prominds.backend.admin.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admins")
public class AdminController {
    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService){
        this.adminService = adminService;
    }

    @PostMapping("/register")
    public ResponseEntity<AdminEntity> register(@RequestBody RegistrationRequest request){
        AdminEntity admin = adminService.register(request.getEmail(), request.getPassword());

        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AdminEntity> login(@RequestBody LoginRequest request){
        AdminEntity admin = adminService.login(request.getEmail(),
                request.getPassword());
        if (admin != null) {
            return new ResponseEntity<>(admin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

    }
}
