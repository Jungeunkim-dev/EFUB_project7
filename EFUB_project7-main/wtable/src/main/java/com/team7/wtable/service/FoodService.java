package com.team7.wtable.service;

import com.team7.wtable.domain.Food;
import com.team7.wtable.domain.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;
}
