import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  password: yup.string().required('required').min(4, 'min4').max(4, 'max4'),
  phoneNum: yup.string().required('required').min(7, 'min7').max(14, 'max14'),
});
