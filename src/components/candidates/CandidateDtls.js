import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default class CandidateDtls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      successful: false,
    };
  }

  render() {
    const props = this.props;

    const radioOption = [
      { key: "Yes", value: "Yes" },
      { key: "No", value: "No" },
    ];

    const validationSchema = Yup.object({
      cdtFirstName: Yup.string().required("First Name is required"),
      cdtLastName: Yup.string().required("Last Name is required"),
      cdtEmail: Yup.string()
        .required("Email ID is required")
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "Invalid Email ID"
        ),
      cdtAvailableFrom: Yup.string()
        .required("Available From Date is required")
        .matches(
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
          "Invalid date (DD/MM/YYYY)"
        ),
      cdtState: Yup.string().required("State is required"),
    });

    const formInitialValues = {
      cdtJobId: props.eachCandidate.jobid || "",
      cdtFirstName: props.eachCandidate.firstname || "",
      cdtLastName: props.eachCandidate.lastname || "",
      cdtEmail: props.eachCandidate.email || "",
      cdtAvailableFrom: props.eachCandidate.available_from || "",
      cdtState: props.eachCandidate.state || "",
      cdtDesiredSalary: props.eachCandidate.desired_salary || "",
      cdtCurrentlyEmployeed: props.eachCandidate.currently_employed || "",
      cdtcurrentSalary: props.eachCandidate.current_salary || "",
    };

    return (
      <div className="container">
        <div className="list__header"> Candidate Details </div>
        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            this.setState({
              successful: !this.state.successful,
            });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            handleReset,
            values,
            touched,
            errors,
          }) => {
            const selectEmployed = (employedInfo) => {
              return setFieldValue("cdtCurrentlyEmployeed", employedInfo);
            };

            return (
              <Form className="container">
                <label className="labels">Job ID</label>
                <Field name="cdtJobId" disabled />

                <label className="labels">First Name</label>
                <Field name="cdtFirstName" placeholder="Enter First Name" />
                {errors.cdtFirstName && touched.cdtFirstName ? (
                  <div className="input-feedback" type="invalid">
                    {errors.cdtFirstName}
                  </div>
                ) : null}

                <label className="labels">Last Name</label>
                <Field name="cdtLastName" placeholder="Enter Last Name" />
                {errors.cdtLastName && touched.cdtLastName ? (
                  <div className="input-feedback">{errors.cdtLastName}</div>
                ) : null}

                <label className="labels">Email Address</label>
                <Field
                  name="cdtEmail"
                  type="email"
                  placeholder="Enter Email ID"
                />
                {errors.cdtEmail && touched.cdtEmail ? (
                  <div className="input-feedback">{errors.cdtEmail}</div>
                ) : null}

                <label className="labels">Available After Date</label>
                <Field
                  name="cdtAvailableFrom"
                  placeholder="Enter Available After Date - dd/mm/yyyy"
                />
                {errors.cdtAvailableFrom && touched.cdtAvailableFrom ? (
                  <div className="input-feedback">
                    {errors.cdtAvailableFrom}
                  </div>
                ) : null}

                <label className="labels">State</label>
                <Field name="cdtState" as="select" value={values.cdtState}>
                  <option value="">Please select a State</option>
                  <option value="VIC">VIC</option>
                  <option value="QLD">QLD</option>
                  <option value="TAS">TAS</option>
                  <option value="WA">WA</option>
                  <option value="SA">SA</option>
                  <option value="NSW">NSW</option>
                </Field>
                {errors.cdtState && touched.cdtState ? (
                  <div className="input-feedback">{errors.cdtState}</div>
                ) : null}

                <label className="labels">Desired Salary</label>
                <Field
                  name="cdtDesiredSalary"
                  placeholder="Enter Desired Salary"
                />
                {errors.cdtDesiredSalary && touched.cdtDesiredSalary ? (
                  <div className="input-feedback">
                    {errors.cdtDesiredSalary}
                  </div>
                ) : null}

                <label className="labels">Currently Employed</label>

                <div>
                  <Field>
                    {({ field }) => {
                      return radioOption.map((option) => {
                        return (
                          <React.Fragment key={option.key}>
                            <input
                              className="radio__input"
                              type="radio"
                              id={option.value}
                              onChange={() => {
                                selectEmployed(option.value);
                              }}
                              onBlur={handleBlur}
                              checked={
                                field.value.cdtCurrentlyEmployeed ===
                                option.value
                              }
                            />
                            <label
                              className="labels radio__label"
                              htmlFor={option.value}
                            >
                              {option.key}
                            </label>
                          </React.Fragment>
                        );
                      });
                    }}
                  </Field>
                </div>

                {values.cdtCurrentlyEmployeed === "Yes" ? (
                  <div>
                    <label className="labels">Currently Salary</label>
                    <Field
                      name="cdtcurrentSalary"
                      placeholder="Enter Current Salary"
                    />
                    {errors.cdtcurrentSalary && touched.cdtcurrentSalary ? (
                      <div className="input-feedback">
                        {errors.cdtcurrentSalary}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <button
                  className="dtls__button"
                  type="button"
                  style={{ float: "Left", margin: "2rem" }}
                  onClick={() => props.handleBack()}
                >
                  Back
                </button>

                <button
                  className="dtls__button"
                  type="submit"
                  style={{ float: "Right", margin: "2rem" }}
                >
                  Submit
                </button>

                {this.state.successful && Object.keys(errors).length === 0 ? (
                  <div className="success__message">Ready to Save</div>
                ) : null}
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
