package ecommerce.services;

import java.util.List;

import ecommerce.entities.Book;
import ecommerce.entities.Customer;
import ecommerce.entities.Order;
import ecommerce.entities.Seller;

public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(Customer customer);
	Order findById(int id);
	List<Book> getSeller(Seller seller);
	
}
