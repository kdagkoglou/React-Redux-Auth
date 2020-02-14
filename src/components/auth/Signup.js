import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="first_name">First Name</label>
          <Field 
            name='first_name'
            type='text'
            component='input'
            placeholder="First Name"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="last_name">Last Name</label>
          <Field 
            name='last_name'
            type='text'
            component='input'
            placeholder="Last Name"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field 
            name='email'
            type='text'
            component='input'
            placeholder="Email"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field
            name='password'
            type='password'
            component='input'
            placeholder="Password"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="role">Role</label>
          <Field
            name='role'
            type='text'
            component='select'
          >
            <option value=""></option>
            <option value="sa.">Supporting Actor</option>
            <option value="Casting Staff">Casting Staff</option>
          </Field>
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
