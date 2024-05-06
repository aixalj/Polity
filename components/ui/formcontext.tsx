// FormContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface FormData {
  // Define the shape of your form data
  username: string;
  // Add more form fields as needed
}

interface FormContextValue {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export const FormContext = createContext<FormContextValue>({
  formData: { username: "" },
  updateFormData: () => {},
});

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>({ username: "" });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
