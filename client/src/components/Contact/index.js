import React from "react";
import "./style.css";

class Contact extends React.Component {
  render() {
    return (
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h2 className="center-align">Contact Form</h2>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col m6 s12">
                      <input id="first_name" type="text" className="validate" />
                      <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col m6 s12">
                      <input id="last_name" type="text" className="validate" />
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col m6 s12">
                      <i className="mdi-content-mail " />
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        required
                        // placeholder="Enter your email address"
                        pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                        title="Please provide a valid e-mail address"
                      />
                      <label htmlFor="email">Email</label>
                    </div>

                    <div className="input-field col m6 s12">
                      <i className="mdi-maps-store-mall-directory " />
                      <input id="company" type="text" className="validate" />
                      <label htmlFor="company">Company</label>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          id="message"
                          className="materialize-textarea"
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col m12">
                        <p className="right-align">
                          <button
                            className="btn btn-large waves-effect waves-light light-blue lighten-2"
                            type="button"
                            name="submit"
                          >
                            Send Message
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;