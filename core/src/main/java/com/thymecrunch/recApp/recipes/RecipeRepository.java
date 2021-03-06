package com.thymecrunch.recApp.recipes;

import java.util.List;
import java.util.Optional;
// import java.util.function.Function;

import javax.transaction.Transactional;

// import org.springframework.data.domain.Example;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
// import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Repository;

// import com.thymecrunch.recApp.recipes.Recipe;
// import com.thymecrunch.recApp.users.User;

@Repository
@Transactional()
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

	List<Recipe> findByStatus(String status); 
	List<Recipe> findByRecName(String recName); 
	Optional <Recipe> findByRecID(Integer recID);
	


}