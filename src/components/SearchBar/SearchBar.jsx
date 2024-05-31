import { Field, Form, Formik } from "formik";

export default function SearchBar({ setSearchData }) {
  return <header>
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        setSearchData(values.query);
        actions.resetForm();
      }}>
        <Form>
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