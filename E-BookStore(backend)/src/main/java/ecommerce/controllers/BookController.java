package ecommerce.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.entities.Book;
import ecommerce.entities.Seller;
import ecommerce.models.BookDTO;
import ecommerce.models.BookPagedResponseDTO;
import ecommerce.models.BookResponseDTO;
import ecommerce.models.Response;
import ecommerce.services.BookService;
import ecommerce.services.SellerService;

@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookController {
	
	@Autowired BookService productService;
	@Autowired SellerService sellerService;
	
	@PostMapping
	public ResponseEntity<?> saveBook(BookDTO dto) {
		System.out.println(dto);
		Book product=BookDTO.toEntity(dto);
		Seller seller=sellerService.findById(dto.getSellerId());
		product.setSeller(seller);
		productService.addBook(product,dto.getPic());
		return Response.success(product);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateBook(@RequestBody Book product,@PathVariable("id") int id) {
		System.out.println(product);		
		productService.updateBook(product);
		return Response.success(product);		
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findBook(@PathVariable("id")int id) {
		Book product=productService.findBookById(id);
		return Response.success(BookResponseDTO.fromEntity(product));
	}
	
	@GetMapping
	public ResponseEntity<?> findAllBooks(Optional<Integer> sellerid) {
		List<BookResponseDTO> result = new ArrayList<BookResponseDTO>();
		if(sellerid.isPresent()) {
			System.out.println(sellerid);
			for(Book p : productService.findBooks(sellerid.get())) {
				result.add(BookResponseDTO.fromEntity(p));
			}
			
		}else {
			for(Book p : productService.allBooks()) {
				result.add(BookResponseDTO.fromEntity(p));
			}
		}
		
		return Response.success(result);
	}
	
	@GetMapping("/paginated")
	public ResponseEntity<?> paginatedBooks(int page,int pagesize) {
		List<BookResponseDTO> result = new ArrayList<BookResponseDTO>();
		Page<Book> data=productService.allBooksPaginated(page, pagesize);
		data.forEach(item-> {
			result.add(BookResponseDTO.fromEntity(item));
		});
		BookPagedResponseDTO resp=new BookPagedResponseDTO();
		resp.setPagesize(pagesize);
		resp.setCurrent(page);
		resp.setTotal(data.getTotalElements());
		resp.setPlist(result);
		return Response.success(resp);
	}
	
	@GetMapping("cats")
	public ResponseEntity<?> findCategoryBooks(String cat,String subcat) {
		List<BookResponseDTO> result = new ArrayList<BookResponseDTO>();
		
		for(Book p : productService.categoryBooks(cat, subcat)) {
			result.add(BookResponseDTO.fromEntity(p));
		}
		
		return Response.success(result);
	}
		
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteBook(@PathVariable("id") int id) {
		productService.deleteBook(id);
		return Response.status(HttpStatus.OK);
	}
}
