package ecommerce.daos;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.entities.Book;
import ecommerce.entities.Seller;

@Repository
public interface BookDao extends JpaRepository<Book, Integer> {
	
	List<Book> findBySeller(Seller sellerId,Sort sort);
	List<Book> findByPcatAndSubcat(String pcat,String subcat,Sort sort);
}
