package org.prominds.backend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "subjects")
public class SubjectEntity {

    @Id
    @Column(name = "subject_id")
    private Long id;
    @Column(name = "subject_name")
    private String name;

    public String getName() {
        return name;
    }
    public String setName(String name){
        return this.name = name;
    }
}
