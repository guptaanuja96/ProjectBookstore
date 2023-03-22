package ecommerce.services;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.daos.CustomerDao;
import ecommerce.entities.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDao dao;
	
	Base64.Encoder encoder = Base64.getMimeEncoder();

	@Override
	public Customer registerCustomer(Customer cust) {
		cust.setPwd(encoder.encodeToString(cust.getPwd().getBytes()));
		Customer registerCustomer = dao.findByUserid(cust.getUserid());
//		System.out.println(registerCustomer);
		if(registerCustomer == null) {
			return dao.save(cust);
		}
		return null;
	}

	@Override
	public List<Customer> allCustomers() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Customer findById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

	@Override
	public Customer validate(String userid, String pwd) {
		Customer cc = dao.findByUserid(userid);
		Base64.Decoder decoder=Base64.getMimeDecoder();
		String dstr=new String(decoder.decode(cc.getPwd()));
		if (cc != null && pwd.equals(dstr)) {
			return cc;
		}
		return null;
	}

	@Override
	public boolean verifyUserId(String userid) {
		// TODO Auto-generated method stub
		return dao.findByUserid(userid) != null;
	}

	@Override
	public void updateProfile(Customer cust) {
		// TODO Auto-generated method stub
		if (cust.getPwd().equals("") || cust.getPwd() == null) {
			cust.setPwd(findById(cust.getId()).getPwd());
		}
		dao.save(cust);
	}

}
