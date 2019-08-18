import React from 'react';
import './AddQuote.scss'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from "../../axios-add";

const addQuoteForm = ({values,
                      errors,
                      touched,
                          status,
                      isSubmitting}) => {
    return <Form className="addQuoteForm">
        <h1>Add a quote</h1>
        {status && touched.length !== undefined ? <h2>{status.formStatus}</h2> : null}
        <div className="inputContainer">
            <Field type="text" name="bookTitle" placeholder="Name of the book"/>
            {touched.bookTitle && errors.bookTitle? <p className="formError">{errors.bookTitle}</p> : null}
        </div>
        <div className="inputContainer">
            <Field type="text" name="bookAuthor" placeholder="Name of the author"/>
            {touched.bookAuthor && errors.bookAuthor ? <p className="formError">{errors.bookAuthor}</p> : null}
        </div>
        <div className="inputContainer">
            <Field type="text" component="textarea" name="bookQuote" placeholder="Please write the quote..."/>
            {touched.bookQuote && errors.bookQuote ? <p className="formError">{errors.bookQuote}</p> : null}
        </div>
        <button type="submit" disabled={isSubmitting}>Add Quote</button>
        <div className="status">
            {status ? <h2>{status.formStatus}</h2> : null}
            {errors ? <h2>{errors.formError}</h2> : null}
        </div>
    </Form>
};

const addQuote = withFormik({
    mapPropsToValues: () => ({
        bookTitle: "",
        bookAuthor: "",
        bookQuote: ""
    }),
    validationSchema: Yup.object().shape({
        bookTitle: Yup.string().required("This is a required field"),
        bookAuthor: Yup.string().required("This is a required field"),
        bookQuote: Yup.string().required("This is a required field")
    }),

    handleSubmit(values, {props, resetForm, setErrors, setStatus, setSubmitting}) {
        const quoteData = {author: values.bookAuthor, bookTitle: values.bookTitle, text: values.bookQuote};
        axios.post('/authors/-LaXx5hXMY-QQ9yn9rSv.json', quoteData)
            .then(() => {
                setStatus({formStatus: "Quote added!"});
                setTimeout(() => resetForm(), 2000);
                props.fetchData();
            })
            .catch(e => {
                console.log(e);
                setErrors({formError: "An error has ocurred :("});
                setTimeout(() => resetForm(), 2000);
                });
    }

})(addQuoteForm);

export default addQuote;
