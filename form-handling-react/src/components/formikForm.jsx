import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('A password is required')
});

const FormikForm = () => (
  <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
          console.log(values);
      }}
  >
      {() => (
          <Form>
            <label htmlFor="name"> Name </label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name='password' component= "div" />
              <button type="submit">Submit</button>
          </Form>
      )}
  </Formik>
);

export default FormikForm;