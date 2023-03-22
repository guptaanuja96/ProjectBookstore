package ecommerce.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import ecommerce.entities.Book;

public interface BookService {

	void addBook(Book p, MultipartFile pic);

	List<Book> findBooks(int sellerId);

	void updateBook(Book p);

	void deleteBook(int prodid);

	List<Book> allBooks();

	List<Book> categoryBooks(String pcat, String subcat);

	Book findBookById(int prodid);

	Page<Book> allBooksPaginated(int page, int pageSize);
}
