export function formDataConverter<T>(formData: FormData): T {
  const obj: any = {};

  formData.forEach((val, key) => {
    obj[key] = val;
  });

  return obj as T;
};

