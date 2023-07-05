import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  content: yup.string().required(),
  scheduled_time: yup.date().required(),
  business_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
