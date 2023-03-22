package ecommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ecommerce.daos.BookDao;
import ecommerce.entities.Book;
import ecommerce.utils.StorageService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookDao bookDao;
	
	@Autowired
	private StorageService storageService;
	
	@Autowired
	private SellerService sellerService;

	@Override
	public void addBook(Book p, MultipartFile pic) {
		// TODO Auto-generated method stub
		String photo = storageService.store(pic);
		p.setPhoto(photo);
		bookDao.save(p);
	}

	@Override
	public List<Book> findBooks(int sellerId) {
		// TODO Auto-generated method stub
		return bookDao.findBySeller(sellerService.findById(sellerId), Sort.by(Sort.Direction.DESC, "prodid"));
	}

	@Override
	public void updateBook(Book p) {
		Book pp = bookDao.getById(p.getProdid());
		p.setSeller(pp.getSeller());
		bookDao.save(p);
	}

	@Override
	public void deleteBook(int prodid) {
		// TODO Auto-generated method stub
		Book p = bookDao.getById(prodid);
		bookDao.delete(p);
	}

	@Override
	public List<Book> allBooks() {
		// TODO Auto-generated method stub
		return bookDao.findAll(Sort.by(Sort.Direction.DESC, "prodid"));
	}

	@Override
	public Book findBookById(int prodid) {
		// TODO Auto-generated method stub
		return bookDao.getById(prodid);
	}

	@Override
	public List<Book> categoryBooks(String pcat, String subcat) {
		// TODO Auto-generated method stub
		return bookDao.findByPcatAndSubcat(pcat, subcat, Sort.by(Sort.Direction.DESC, "prodid"));
	}

	@Override
	public Page<Book> allBooksPaginated(int page, int pagesize) {
		Page<Book> prods = bookDao.findAll(PageRequest.of(page, pagesize, Sort.by(Direction.DESC, "prodid")));
		System.err.println(prods.getSize());
		return prods;
	}
}
