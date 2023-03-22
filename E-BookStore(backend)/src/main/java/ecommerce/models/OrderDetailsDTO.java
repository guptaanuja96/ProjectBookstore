package ecommerce.models;

import org.springframework.beans.BeanUtils;

import ecommerce.entities.OrderDetails;
import ecommerce.entities.Book;

public class OrderDetailsDTO {
	
	private int id;
	private Book product;
	private int qty;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Book getBook() {
		return product;
	}
	public void setBook(Book product) {
		this.product = product;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}

	public static OrderDetailsDTO fromEntity(OrderDetails entity) {
		OrderDetailsDTO dto = new OrderDetailsDTO();
		BeanUtils.copyProperties(entity, dto);		
		return dto;
	}
}
