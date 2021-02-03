import { http } from '@app/services';
import { imagesUrl } from './endpoints';

export const Image = {
  create: data => {
    return http.post(
      `${imagesUrl}?filename=${data.filename}&imageType=1`,
      data.formData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      },
    );
  },
  get: data => {
    return http.put(imagesUrl, data);
  },
};
