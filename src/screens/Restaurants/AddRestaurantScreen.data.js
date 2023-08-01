import * as Yup from 'yup';

export function initialValues() {
  return {
    name: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    location: null
  }
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required(),
    address: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
    description: Yup.string().required(),
    location: Yup.object().required('localizacion requerida'),
  })
}