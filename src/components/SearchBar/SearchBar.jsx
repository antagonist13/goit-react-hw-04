import { Field, Form, Formik } from "formik";
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ setSearchData }) {
  return <header>
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim(' ')) {
          setSearchData(values.query);
        } else {
          toast.error('Required for filling!')
        }
        actions.resetForm();
      }}>
      <Form>
        <Toaster />
        <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query">
        </Field>
        <button type="submit">Search</button>
        </Form>
      </Formik>
</header>
}