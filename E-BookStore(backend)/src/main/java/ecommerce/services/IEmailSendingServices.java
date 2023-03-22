package ecommerce.services;

public interface IEmailSendingServices {
	
	void sendEmail(String to,String message ,String subject);

}
