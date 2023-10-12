import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "./_formContact.scss";
import axios from "axios";
const validationSchema = yup.object({
  email: yup
    .string('Entrez votre email')
    .email('Entrez un email valide')
    .required('L\'email est obligatoire'),
  firstName: yup
    .string('Entrez votre prénom')
    .required('Le prénom est obligatoire'),
  lastName: yup
    .string('Entrez votre nom')
    .required('Le nom est obligatoire'),
  message: yup
    .string('Entrez votre message')
    .required('Le message est obligatoire'),
});
const hostName = "https://marwagbs.fr/ReactphpSendMail/sendMail";
 const handleSubmit = (dataFavoris) => {
   axios
     .post(hostName, dataFavoris)

     .then((reponse) => {
      
      if (reponse.status === 200) {
        document.querySelector(".question").innerHTML =
          "Merci pour votre message. Il a été envoyé";
        
      }else{
        document.querySelector(".question").innerHTML =
          "Une erreur s’est produite lors de l’envoi de votre message. Veuillez essayer à nouveau plus tard.";
      }
       console.log(reponse.data);
      
     })
     .catch((error) => {
       console.log(error);
     });
 };
const FormContact = () => {
     const formik = useFormik({
       initialValues: {
         email: "",
         firstName: "",
         lastName: "",
         message: "",
         phoneNumber: "",
       },
       validationSchema: validationSchema,
       onSubmit: (values) => {
        handleSubmit(values);
       },
     });
  
  return (
    <>
      <div className="formContact">
        <div>
          <img src="../../media/development.png" alt="contactImg" />
        </div>
        <div>
          <h2> Contactez moi !!!</h2>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <TextField
                required
                fullWidth
                id="firstName"
                name="firstName"
                label="Nom"
                type="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                variant="standard"
              />
              <TextField
                required
                fullWidth
                id="lastName"
                name="lastName"
                label="Prénom"
                type="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="standard"
              />
              <TextField
                required
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                label="Numéro de téléphone"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="standard"
              />
            </Box>
            <TextField
              id="message"
              label="Message"
              name="message"
              multiline
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              variant="standard"
              required
              fullWidth
            />

            <Button color="primary" variant="contained" type="submit">
              <span>Envoyer</span>
            </Button>
          </form>
          <p className="question text"></p>
        </div>
      </div>
    </>
  );
}

export default FormContact
