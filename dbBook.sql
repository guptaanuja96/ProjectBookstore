Create database bookshop;
Use bookshop;
Create table User(userid int primary key not null auto_increment,
                             Password varchar(200),
                             First_name varchar(200),
                             Last_name varchar(200),
                             Address varchar(200),
                             City varchar(200),
                             Zip int,
                             State varchar(200),
                             email_address varchar(200),
                             Phone_number varchar(200));


select * from User;


Create table Books(InventoryID int primary key not null auto_increment,
		         Book_Name varchar(200),
		         Author varchar(200),
		         Nr_books int,
		         Price Decimal(9,2));
Drop table Books;

Create table State_Tax(State_Name varchar(200) primary key,
     Sales_Tax_Rate Decimal(9,2));
Create table Shipping_Type(Types_of_Shipping varchar(200) primary key not null,
Price Decimal(9,2),
Days_for_delivery int);

Create table Order_Details(OrderID int primary key not null auto_increment,
UserID int,
Receivers_Name varchar(200),
Address varchar(200),
City varchar(200),
Zip int,
State varchar(200),
Types_of_Shipping varchar(200),
Date_of_Purchase Date,
Constraint cid_fk foreign key(UserID) references User(UserID)
On delete cascade
On update cascade,
Constraint sid_fk foreign key(State) references State_Tax(State_Name)
On delete cascade
On update cascade,
Constraint tid_fk foreign key(Types_of_Shipping) references   Shipping_Type(Types_of_Shipping)
On delete cascade
On update cascade
);

Create table Shopping_cart_items(shoppingCartID int primary key not null auto_increment,
                             InventoryID varchar(200),
                             Price Decimal(10,2),
                             Date Date,
                             UserID varchar(200) references User (UserID )
                             On delete cascade
                             On update cascade,
                             Quantity int);
Create table  credit_card_details(credit_username varchar(200) primary key not null,
                             creditCardNo varchar(200),
                             cardType varchar(200),
                             CVVNo int,
                             UserID varchar(200) references User (UserID )
                              On delete cascade
                             On update cascade);
                                                 


Create table  Purchase_history(userId int primary key not null references User(UserID),
                             InventoryId varchar(200),
                             Date_Of_Purchase Date,
                             OrderId int  references  Order_Details(OrderID)
                             On delete cascade
                             On update cascade,
                             Quantity int,
                             Price decimal(20,2)
                          );


show tables;

