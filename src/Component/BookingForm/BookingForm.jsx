// import React from 'react';
import "./bookingForm.css";
import React, { useState } from "react";
import { Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Modal, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    Company: Yup.string().required("Company Name is required"),
    city: Yup.string().required("City Name is required"),
    // .positive("Number of Rooms must be positive"),
   
    mobile: Yup.string()
      .required("Mobile Number is required")
      .matches(/^\d{10}$/, "Mobile Number must be 10 digits"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  
  const MyForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    resetForm, // Added resetForm from Formik
    insertData,
  }) => {
    const [modalOpen, setModalOpen] = useState(false);
    //   const navigate = useNavigate();
  
    const handleModalClose = () => {
      setModalOpen(false);
      // navigate("/");
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      validationSchema
        .validate(values)
        .then(() => {
          setModalOpen(true);
          console.log(values);
          insertData(values);
          resetForm(); // Reset the form after successful submission
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Card className="form-card form-container">
            <CardContent>
              <div className="form-field input-field">
                <div className="wb-business-heading">
                  <h3>Get Started</h3>
                </div>
  
                <Field
                  as={TextField}
                  id="Name"
                  name="Name"
                  label="Enter your Name"
                  value={values.Name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Name && !!errors.Name}
                  helperText={touched.Name && errors.Name}
                  fullWidth
                  style={{ fontSize: "16px" }}
                />
              </div>
  
              <div className="form-field input-field">
                <Field
                  as={TextField}
                  id="Company"
                  name="Company"
                  label="Enter your Company"
                  value={values.Company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Company && !!errors.Company}
                  helperText={touched.Company && errors.Company}
                  fullWidth
                  style={{ fontSize: "16px" }}
                />
              </div>
  
            
  
              
  
              <div className="form-field input-field">
                <Field
                  as={TextField}
                  id="mobile"
                  name="mobile"
                  label="Enter your Phone Number"
                  type="tel"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.mobile && !!errors.mobile}
                  helperText={touched.mobile && errors.mobile}
                  fullWidth
                  style={{ fontSize: "16px" }}
                />
              </div>
  
              <div className="form-field input-field">
                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  label="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  fullWidth
                  style={{ fontSize: "16px" }}
                />
              </div>
  
              <div className="form-field input-field">
                <Field
                  as={TextField}
                  id="city"
                  name="city"
                  label="Enter City"
                  type="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
                  fullWidth
                  style={{ fontSize: "16px" }}
                />
              </div>
  
              <Button className="form-btn-submit"
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                // style={{
                //   display: "block",
                //   margin: "0 auto",
                //   fontSize: "14px",
                //   padding: "12px 57px",
                //   marginTop:"20px"
                // }}
              >
                Request A Call Back
              </Button>
            </CardContent>
          </Card>
  
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            className="modal-container"
          >
            <Card className="modal-card">
              <CardContent>
                <CheckCircleIcon
                  className="tick-icon"
                  style={{ fontSize: 60, color: "green" }}
                />
                <h3>Thank You!</h3>
                <p>We will get back to you within 24 hours.</p>
              </CardContent>
            </Card>
          </Modal>
        </Form>
      </>
    );
  };
  
  const BookingForm = withFormik({
    mapPropsToValues: ({ propertylisting }) => ({
      Name: "",
      Company: "",
      city: "",
      mobile: "",
      email: "",
      inquired_for: propertylisting || "",
    }),
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    },
    validationSchema: validationSchema,
  })(MyForm);
  
export default BookingForm;
