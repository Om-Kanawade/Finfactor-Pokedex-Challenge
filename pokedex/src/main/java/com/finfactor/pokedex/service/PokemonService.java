package com.finfactor.pokedex.service;



import com.finfactor.pokedex.dto.PokemonDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PokemonService {

    @Autowired
    private RestTemplate restTemplate;

    private final String POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

   
    private final String SPECIES_API_URL = "https://pokeapi.co/api/v2/pokemon-species/";

    

@Cacheable(value = "pokemon", key = "#name")
    @SuppressWarnings("unchecked")
    public PokemonDTO getPokemon(String name) {
        try {
          
            Map<String, Object> basicResponse = restTemplate.getForObject(POKE_API_URL + name.toLowerCase(), Map.class);
            
           
            String speciesName = (String) ((Map<String, Object>) basicResponse.get("species")).get("name");
            Map<String, Object> speciesResponse = null;
            try {
                speciesResponse = restTemplate.getForObject(SPECIES_API_URL + speciesName, Map.class);
            } catch (Exception e) {
               
                System.err.println("Could not fetch species data: " + e.getMessage());
            }

            return mapToDTO(basicResponse, speciesResponse);
        } catch (HttpClientErrorException e) {
            throw new RuntimeException("Pokemon not found");
        }
    }

    @SuppressWarnings("unchecked")
    private PokemonDTO mapToDTO(Map<String, Object> basic, Map<String, Object> species) {
        PokemonDTO dto = new PokemonDTO();

       
        dto.setId((Integer) basic.get("id"));
        dto.setName((String) basic.get("name"));
        dto.setHeight((Integer) basic.get("height"));
        dto.setWeight((Integer) basic.get("weight"));

       
        Map<String, Object> sprites = (Map<String, Object>) basic.get("sprites");
        Map<String, Object> other = (Map<String, Object>) sprites.get("other");
        Map<String, Object> dreamWorld = (Map<String, Object>) other.get("dream_world");
        String image = (String) dreamWorld.get("front_default");
        if (image == null) image = (String) sprites.get("front_default");
        dto.setImageUrl(image);

      

        
        Map<String, Object> cries = (Map<String, Object>) basic.get("cries");
        if (cries != null) dto.setCryUrl((String) cries.get("latest"));

       
        List<Map<String, Object>> typesRaw = (List<Map<String, Object>>) basic.get("types");
        List<String> types = new ArrayList<>();
        for (Map<String, Object> entry : typesRaw) {
            Map<String, Object> typeInfo = (Map<String, Object>) entry.get("type");
            types.add((String) typeInfo.get("name"));
        }
        dto.setTypes(types);

       
        List<Map<String, Object>> abilitiesRaw = (List<Map<String, Object>>) basic.get("abilities");
        List<String> abilities = new ArrayList<>();
        for (Map<String, Object> entry : abilitiesRaw) {
            Map<String, Object> abilityInfo = (Map<String, Object>) entry.get("ability");
            abilities.add((String) abilityInfo.get("name"));
        }
        dto.setAbilities(abilities);

       
        List<Map<String, Object>> statsRaw = (List<Map<String, Object>>) basic.get("stats");
        Map<String, Integer> stats = new HashMap<>();
        for (Map<String, Object> entry : statsRaw) {
            Map<String, Object> statInfo = (Map<String, Object>) entry.get("stat");
            stats.put((String) statInfo.get("name"), (Integer) entry.get("base_stat"));
        }
        dto.setStats(stats);

       
        if (species != null) {
            List<Map<String, Object>> flavorTextEntries = (List<Map<String, Object>>) species.get("flavor_text_entries");
            String englishDescription = "";
            
          
            for (Map<String, Object> entry : flavorTextEntries) {
                Map<String, Object> language = (Map<String, Object>) entry.get("language");
                if ("en".equals(language.get("name"))) {
                   
                    englishDescription = ((String) entry.get("flavor_text"))
                            .replace("\n", " ")
                            .replace("\f", " ");
                    break;
                }
            }
            dto.setDescription(englishDescription);
        } else {
            dto.setDescription("No description available.");
        }

        return dto;
    }
}
