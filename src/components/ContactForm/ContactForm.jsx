import { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  //   handleStateChange = ({ currentTarget: { name, value } }) => {
  //     this.setState({ [name]: value });
  //   };

  onSubmit = initialState => {
    // e.preventDefault();
    this.props.onSubmit(initialState);
    // this.reset();
    // e.currentTarget.reset()
  };

  render() {
    // const { name, number } = this.state;
    // const { onSubmit } = this;
    return (
      //   <form onSubmit={onSubmit}>
      //     <input
      //       type="text"
      //       name="name"
      //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      //       required
      //       value={name}
      //       onChange={this.handleStateChange}
      //     />
      //     <input
      //       type="tel"
      //       name="number"
      //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      //       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      //       required
      //       value={number}
      //       onChange={this.handleStateChange}
      //     />
      //     <button>Add contact</button>
      //   </form>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={this.onSubmit}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <label htmlFor="name">First Name</label>
              <Field id="name" name="name" placeholder="Jane" />
              {errors.hasOwnProperty('name') && (
                <p style={{ color: 'red' }}>{errors.name}</p>
              )}
              <label htmlFor="number">Last Name</label>
              <Field
                id="number"
                name="number"
                placeholder="33-33-33"
                type="number"
              />
              {errors.hasOwnProperty('number') && (
                <p style={{ color: 'red' }}>{errors.number}</p>
              )}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}
