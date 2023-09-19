import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function FormComponent() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const watchedName = watch("name", "");
  const watchedPhone = watch("phone", "");
  const watchedMonths = watch("months", "");

  // Step 1: Create a state to hold form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    months: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // Step 2: Update state when form fields change
  const onFormChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4 bg-gray-200">
      <h1 className="text-2xl mb-4">FormComponent</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
            })}
            className={`p-2 border rounded-md focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg font-semibold">
            Phone Number (10 digits)
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className={`p-2 border rounded-md focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your phone number"
                onChange={(e) => {
                  field.onChange(e);
                  onFormChange("phone", e.target.value);
                }}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Months Field */}
        <div className="flex flex-col">
          <label htmlFor="months" className="text-lg font-semibold">
            Months (01-12)
          </label>
          <Controller
            name="months"
            control={control}
            rules={{
              required: "Month is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])$/,
                message: "Enter a valid month (01-12)",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={`p-2 border rounded-md focus:outline-none ${
                  errors.months ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter a month (01-12)"
                onChange={(e) => {
                  field.onChange(e);
                  onFormChange("months", e.target.value);
                }}
              />
            )}
          />
          {errors.months && (
            <p className="text-red-500">{errors.months.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>

      {/* Step 3 and 4: Display the card with updated state values */}
      <div className="mt-8 p-4 border border-gray-300 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Form Data in Card</h2>
        <p>Name: {watchedName || "Sherry tomaa"}</p>
        <p>Phone: {watchedPhone || "1234567890"}</p>
        <p>Months: {watchedMonths || "00"}</p>
      </div>
    </div>
  );
}

export default FormComponent;
