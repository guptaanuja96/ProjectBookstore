import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"
import productvalidation from "./productvalidation"


function AddProduct(){

    const sellerid=sessionStorage.getItem("id")
    const [product,setProduct]=useState({
        "pname":"",
        "pcat":"",
        "price":"",
        "subcat":"",
        "bauthor":"",
        "sellerId":sellerid
    })
    const [errors,setErrors]=useState({})
    const [selectedPhoto, setSelectedPhoto]=useState(null)
    const [submitted,setSubmitted]=useState(false)
    const history=useNavigate()

    const handleInput=e=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const handleFileInput=e=>{
        setSelectedPhoto(e.target.files[0])
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(productvalidation(product))
        setSubmitted(true)
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            const formData=new FormData()
            formData.append("pic",selectedPhoto)
            formData.append("pname",product.pname)
            formData.append("pcat",product.pcat)
            formData.append("price",product.price)
            formData.append("bauthor",product.bauthor)
            formData.append("subcat",product.subcat)
            formData.append("sellerId",sellerid)
            console.log(product)
            axios.post("http://localhost:8080/api/books",formData)
            .then(resp=>{
                let result=resp.data.data;
                console.log(result)
                const msg = "saved"            
                history("/myproducts")
                swal({
                    title: "Success",
                    text: "Book added successfully!",
                    icon: "success",
                    button: "ok",
                  });
            })
            .catch(error=>{
                console.log("Error",error);
                swal({
                    title: "Error",
                    text: "Error saving book",
                    icon: "error",
                    button: "ok",
                  });
            })
        }
    },[errors])
    return (
        <div className="container">
                <div className="card shadow bg">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 mx-auto">
                            <h4 className="text-center p-2">
                                Add Book Form
                            </h4>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Book Name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="pname" value={product.pname} onChange={handleInput} className="form-control" />
                                    {errors.pname && <small className="text-danger float-right">{errors.pname}</small>}
                                </div>
                                
                            </div>                            
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Category</label>
                                <div className="col-sm-8">
                                    <select name="pcat" value={product.pcat} onChange={handleInput} className="form-control">
                                        <option value="">Select Category</option>
                                        <option>Fiction</option>     
                                        <option>Non-Fiction</option>     
                                        <option>Magazine</option>     
                                    </select>   
                                    {errors.pcat && <small className="text-danger float-right">{errors.pcat}</small>}                    
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Sub Category</label>
                                <div className="col-sm-8">
                                    <select name="subcat" value={product.subcat} onChange={handleInput} className="form-control">
                                        <option value="">Select Sub Category</option>
                                        <option>English</option>     
                                        <option>Hindi</option>                                                  
                                    </select> 
                                    {errors.subcat && <small className="text-danger float-right">{errors.subcat}</small>}                      
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Price</label>
                                <div className="col-sm-8">
                                    <input type="number" name="price" value={product.price} onChange={handleInput} className="form-control" />
                                    {errors.price && <small className="text-danger float-right">{errors.price}</small>}
                                </div>                                
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Author</label>
                                <div className="col-sm-8">
                                    <select name="bauthor" value={product.bauthor} onChange={handleInput} className="form-control">
                                        <option value="">Select Author Name</option>
                                        <option>Arundhati Roy</option>
                                        <option>Munshi Premchand</option>
                                        <option>William Shakespeare</option>
                                        <option>Jai Shankar Prasad</option>
                                        <option>Maithili Sharan Gupt</option>
                                        <option>Jane Austen</option>
                                        <option>Geetanjali Shree</option>
                                        <option>Khushwant Singh</option>
                                        <option>Mahadevi Varma</option>
                                        <option>Anuja Chauhan</option>
                                        <option>Ruskin Bond</option>
                                        <option>others</option>
                                        </select>
                                    {errors.bauthor && <small className="text-danger float-right">{errors.bauthor}</small>}
                                </div>                                
                            </div>

                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Photo</label>
                                <div className="col-sm-8">
                                    <input type="file" required name="photo" value={product.photo} onChange={handleFileInput} className="form-control-file" />                                    
                                </div>                                
                            </div>
                            
                            <button className="btn btn-warning float-right" >Add Book</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                </div>
    )
}

export default AddProduct;