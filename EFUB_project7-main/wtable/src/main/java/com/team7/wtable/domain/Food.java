package com.team7.wtable.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name="food")
public class Food {
    @Id
    @GeneratedValue
    private String name;
    private String image;
    private String description;
    private String level; // level 데이터타입 수정
    private int time;
    private String category;
    public Food(){
    }

    public Food(String name, String image, String description, String level, int time, String category){
        this.name=name;
        this.image=image;
        this.description=description;
        this.level=level;
        this.time=time;
        this.category=category;
    }
}