import * as Yup from 'yup';

export function initialValues() {
  return {
    password: '',
    new_password: '',
    new_password_confirm: '',
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string()
      .required(),
    new_password: Yup.string()
      .required(),
    new_password_confirm: Yup.string()
      .required().oneOf([Yup.ref('new_password')], 'las nuevas contraseñas deben ser iguales')
  })
}