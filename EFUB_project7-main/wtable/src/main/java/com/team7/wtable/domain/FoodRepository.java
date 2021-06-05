package com.team7.wtable.domain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food,Long> {

    //카테고리 조회
    @Query("select u from Food u where u.category=:category")
    List<Food> findFoodByCategory(@Param("category")String category);
    //해당 카테고리 정렬
    @Query("select u from Food u where u.category=:category order by u.name")
    List<Food> OrderFoodByName(@Param("category")String category);

    @Query("select u from Food u where u.category=:category order by u.level DESC ")
    List<Food> OrderFoodByLevel(@Param("category")String category);

    @Query("select u from Food u where u.category=:category order by u.time")
    List<Food> OrderFoodByTime(@Param("category")String category);
    //이름 조회
    @Query("select u from Food u where u.name=:name")
    List<Food> findFoodByName(@Param("name")String name);


}
