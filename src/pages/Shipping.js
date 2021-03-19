
import React from 'react';
import {useState} from 'react';

 const Shipping = () => {


   const [errors, setErrors] = useState({name:'Required field', address:'Required field', phone: null, email:'Required field'});
   const [nameValue, setNameValue] = useState('');
   const [addressValue, setAddressValue] = useState('');
   const [phoneValue, setPhoneValue] = useState('');
   const [emailValue, setEmailValue] = useState('');

   const validateName = e => {
     if(e.target.value === '') {
       setErrors({...errors, name: 'Required field'});
     } else if(e.target.value.length < 3) {
       setErrors({...errors, name: 'Name should be at least 3 characters long'});
     } else {
       setErrors({...errors, name: null});
     }

     setNameValue(e.target.value);
   }

   const validateAddress = e => {

     if(e.target.value) {
       setErrors({...errors, address: null});
     } else {
       setErrors({...errors, address: 'Required field'});
     }
     setAddressValue(e.target.value);
   }

   const validatePhone = e => {

     if(e.target.value && e.target.value.length !== 9) {
       setErrors({...errors, phone: 'Number should be exactly 9 digits long'});
     } else {
       setErrors({...errors, phone: null});
     }

     setPhoneValue(e.target.value);
   }

   const validateEmail = e => {

     if(e.target.value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
       setErrors({...errors, email: null});
     } else if(!e.target.value) {
       setErrors({...errors, email: 'Required field'});
     } else {
       setErrors({...errors, email: 'Invalid email'});
     }

     setEmailValue(e.target.value);
   }

   const handleSubmit = e => {
     e.preventDefault();
   }

   const isValid = () => {
     let validation = true;
     for(const key in errors) {
       if(errors[key] !== null) validation = false;
     }

     return validation;
   }

   return (
     <form onSubmit={handleSubmit}>
       <fieldset>
         <input onChange={validateName} type='text' name='name' id='name' value={nameValue} placeholder='Name*' />
         <span>{errors.name}</span>
       </fieldset>
       <fieldset>
         <input onChange={validateAddress} type='text' name='address' id='address' value={addressValue} placeholder='Address*' />
         <span>{errors.address}</span>
       </fieldset>
       <fieldset>
         <input onChange={validatePhone} type='text' name='phone' id='phone' value={phoneValue} placeholder='Phone' />
         <span>{errors.phone}</span>
       </fieldset>
       <fieldset>
         <input onChange={validateEmail} type='email' name='email' id='email' value={emailValue} placeholder='Email*' />
         <span>{errors.email}</span>
       </fieldset>
       <button type='submit' disabled={!isValid()}>Pay</button>
     </form>
   );
 }

 export default Shipping;
