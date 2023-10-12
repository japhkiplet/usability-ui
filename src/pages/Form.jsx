import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './form.scss'
import { Link } from "react-router-dom";

const Form = () => {
    const Schema =yup.object().shape({
        username: yup.string().required("This field is required!"),
        email: yup.string().email('Invalid email')
        .required('Email is required'),
        
        address: yup.string()

        .required('address is required'),
        cvc: yup.string()
        .required('cvc is required'),
        cardNumber: yup.string()
        .required('CardNumber is required')
        
         
      })
      const {register, formState: { errors }} = useForm({
        resolver :yupResolver(Schema)})

        
  return (
    <div>
        <div className="form" >

         <div className="input-control">
              <input type="text" placeholder="john doe" {...register("username")} />
              <p>{errors.username?.message}</p>              
          </div>
         <div className="input-control">
              <input type="text" placeholder="Johndoe@mail.ac.ke" {...register("email")} />
              <p>{errors.email?.message}</p>    
          </div>
          
         <div className="input-control">
              <input type="text" placeholder="123 hudson 127" {...register("address")} />
              <p>{errors.address?.message}</p>    
          </div>
         <div className="input-control">
              <input type="Number" placeholder="333" {...register("cvc")} />
              <p>{errors.cvc?.message}</p>    
          </div>
         <div className="input-control">
              <input type="Number" placeholder="424242424242424242" {...register("cardNumber")} />
              <p>{errors.cardNumber?.message}</p>    
          </div>
          <Link className="link" to='/success'>
          <button  className="btn">Pay Now</button>
          </Link>
        </div>
    </div>
  )
}

export default Form