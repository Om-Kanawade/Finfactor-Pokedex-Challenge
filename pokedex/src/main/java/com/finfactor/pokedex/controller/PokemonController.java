package com.finfactor.pokedex.controller;



import com.finfactor.pokedex.dto.PokemonDTO;
import com.finfactor.pokedex.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "http://localhost:5173") 
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping("/{name}")
    public ResponseEntity<?> getPokemon(@PathVariable String name) {
        
        if (name == null || name.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Pokemon name cannot be empty");
        }

        try {
            PokemonDTO pokemon = pokemonService.getPokemon(name);
            return ResponseEntity.ok(pokemon);
        } catch (RuntimeException e) {
           
            return ResponseEntity.status(404).body(e.getMessage());
        } catch (Exception e) {
           
            return ResponseEntity.status(500).body("An internal error occurred");
        }
    }
}