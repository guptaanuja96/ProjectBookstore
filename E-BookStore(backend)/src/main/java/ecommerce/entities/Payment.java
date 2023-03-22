package ecommerce.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="payments")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String cardno;
	
	private String nameoncard;
	
	private int amount;
	
	private Date paymentdate;

	public Payment(int id, String cardno, String nameoncard, int amount, Date paymentdate) {
		super();
		this.id = id;
		this.cardno = cardno;
		this.nameoncard = nameoncard;
		this.amount = amount;
		this.paymentdate = paymentdate;
	}

	

	public Payment() {
		super();
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getCardno() {
		return cardno;
	}



	public void setCardno(String cardno) {
		this.cardno = cardno;
	}



	public String getNameoncard() {
		return nameoncard;
	}



	public void setNameoncard(String nameoncard) {
		this.nameoncard = nameoncard;
	}



	public int getAmount() {
		return amount;
	}



	public void setAmount(int amount) {
		this.amount = amount;
	}



	public Date getPaymentdate() {
		return paymentdate;
	}



	public void setPaymentdate(Date paymentdate) {
		this.paymentdate = paymentdate;
	}


	
	
	
}
