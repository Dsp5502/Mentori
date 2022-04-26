export const FileUp = async (file) => {
  const urlCloudinary = 'https://api.cloudinary.com/v1_1/djjgtili7/upload';

  const formData = new FormData();

  formData.append('upload_preset', 'amazonasProduct');
  formData.append('file', file);

  const resp = await fetch(urlCloudinary, {
    method: 'POST',
    body: formData,
  });
  const data = await resp.json();

  return data.secure_url;
};
