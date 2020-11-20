import React, { Component } from "react";
import "./css/loader.css";
import "./css/main.css";
import "./css/util.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { actLoginApi } from "./modules/action";
import { connect } from "react-redux";

const logInSchema = yup.object().shape({
  userName: yup.string().required("Please Input").trim("Can't use space"),
  pass: yup.string().required("Please Input"),
});
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pass: "",
    };
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container-login100">
            <div className="login100-more" />
            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
              <Formik
                initialValues={{
                  userName: "",
                  pass: "",
                }}
                validationSchema={logInSchema}
                onSubmit={this.handleLogin}
                render={(formikProps) => (
                  <Form className="login100-form validate-form">
                    <span className="login100-form-title p-b-59">Log In</span>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Username is required"
                    >
                      <span className="label-input100">Username</span>
                      <Field
                        className="input100"
                        type="text"
                        name="userName"
                        placeholder="Username..."
                        onChange={this.handleOnChange}
                      />
                      <ErrorMessage name="userName" />
                      <span className="focus-input100" />
                    </div>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Password is required"
                    >
                      <span className="label-input100">Password</span>
                      <Field
                        className="input100"
                        type="text"
                        name="pass"
                        placeholder="*************"
                        onChange={this.handleOnChange}
                      />
                      <span className="focus-input100" />
                    </div>
                    <div className="container-login100-form-btn">
                      <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn" />
                        <button className="login100-form-btn">LOG IN</button>
                      </div>
                      <a
                        href="#"
                        className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30"
                      >
                        Sign up
                        <i className="fa fa-long-arrow-right m-l-5" />
                      </a>
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.err,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    login: (user, history) => {
      dispatch(actLoginApi(user, history));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(LoginPage);
