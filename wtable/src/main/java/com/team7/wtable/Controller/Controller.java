package com.team7.wtable.Controller;
import com.team7.wtable.domain.Food;
import com.team7.wtable.domain.FoodRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.swing.text.html.Option;
import java.awt.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(value="/food")
public class Controller {

    private FoodRepository foodRepository;

    @Autowired
    public Controller(FoodRepository foodRepository){
        this.foodRepository=foodRepository;
    }

    //전체 음식 리스트 반환
    //localhost:8080/food
    @GetMapping
    public Iterable<Food> list(){
        return foodRepository.findAll();
    }

    //localhost:8080/food/get/{category}
    @GetMapping(value="get/{category}")
    public List<Food> test(@PathVariable("category") String category){
        System.out.print(category);
        return foodRepository.findFoodByCategory(category);
    }

    //localhost:8080/food/get/{category}/name
    //이름순정렬
    @GetMapping(value="order/name/{category}")
    public List<Food> orderbyname(@PathVariable("category") String category){
        System.out.print(category);
        return foodRepository.OrderFoodByName(category);
    }

    //localhost:8080/food/get/{category}/level
    //난이도순정렬
    @GetMapping(value="order/level/{category}")
    public List<Food> orderbylevel(@PathVariable("category") String category){
        System.out.print(category);
        return foodRepository.OrderFoodByLevel(category);
    }

    //localhost:8080/food/get/{category}/time
    //시간순정렬
    @GetMapping(value="order/time/{category}")
    public List<Food> orderbytime(@PathVariable("category") String category){
        System.out.print(category);
        return foodRepository.OrderFoodByTime(category);
    }
    //특정값조회
    @GetMapping(value="name/{name}")
    public List<Food> test2(@PathVariable("name") String name){
        System.out.print(name);
        return foodRepository.findFoodByName(name);
    }

}
