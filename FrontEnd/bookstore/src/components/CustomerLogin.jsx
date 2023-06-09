import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import loginvalidation from "../loginvalidation";


function CustomerLogin(){

    const dispatch=useDispatch()
    const [user,setUser]=useState({
        "userid":"",
        "pwd":""
    })
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const history=useNavigate()

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(loginvalidation(user))
        setSubmitted(true)
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:8080/api/customers/validate",user)
            .then(resp=>{
                let result=resp.data.data;
                console.log(resp.data.data)
                sessionStorage.setItem("userid",result.userid)
                sessionStorage.setItem("uname",result.name)
                sessionStorage.setItem("role","customer")
                sessionStorage.setItem("id",result.id)
                dispatch({type:'IsLoggedIn'})
                history("/")
            })
            .catch(error=>{
                console.log("Error",error);
                swal({
                    title: "Error",
                    text: "Invalid username or password",
                    icon: "error",
                    button: "ok",
                });
            })
        }
    },[errors])

    return (
        <div style={{width:"100vw"}}>
           
    <div className="container">
        
    <div className="card shadow bg mt-3">
        <div className="card-body">            
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <h4 className="text-center p-2">
                        Customer Login Form
                    </h4>
                    <form onSubmit={handleSubmit}>                 
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Email Id</label>
                        <div className="col-sm-8">
                            <input type="email" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>                    
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>                    
                    <button className="btn btn-warning float-right">Login Now</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    );
}

export default CustomerLogin;