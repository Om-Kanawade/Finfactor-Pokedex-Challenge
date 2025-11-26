package com.finfactor.pokedex.dto;


import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class PokemonDTO {
    
    private int id;
    private String name;
    private int height;
    private int weight;
    
 
    private String imageUrl;
    private String cryUrl; 

 
    private List<String> types;      
    private List<String> abilities;  
    
    
    private Map<String, Integer> stats; 

   
private String description;


}