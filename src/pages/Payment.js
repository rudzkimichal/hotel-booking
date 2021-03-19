
import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';

 const Payment = () => (
   <div>
     <Formik
       initialValues={{ name: '', address: '', phone: '', email: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
         <label htmlFor='name'>Name*</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor='address'>Address*</label>
           <Field type="text" name="address" />
           <ErrorMessage name="address" component="div" />
           <label htmlFor='phone'>Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" />
          <label htmlFor='email'>E-mail*</label>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Pay
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );

 export default Payment;
