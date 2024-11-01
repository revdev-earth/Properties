"use client";

import { useState } from "react";
import { Property } from "./types";

interface PropertyFormProps {
  initialProperty: Property;
  isUpdating: boolean;
  onSubmit: (data: Property) => void;
  onCancel: () => void;
}

export default function PropertyForm({
  initialProperty,
  isUpdating,
  onSubmit,
  onCancel,
}: PropertyFormProps) {
  const [formData, setFormData] = useState<Property>(initialProperty);

  const handleChangeInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      if (type === "checkbox") {
        return { ...prevData, [name]: checked };
      }

      if (type === "number") {
        return { ...prevData, [name]: Number(value) };
      }

      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <button
        className="absolute top-0 right-0 p-2 bg-red-600 rounded-md font-bold text-white"
        onClick={onCancel}
      >
        X
      </button>

      <p className="text-black text-center font-bold py-2 px-4 rounded text-3xl">
        {isUpdating ? "Actualizando Propiedad" : "Crear Propiedad"}
      </p>

      {Object.keys(initialProperty).map(
        (key) =>
          key !== "createdAt" &&
          key !== "updatedAt" && (
            <div key={key} className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={key}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </label>

              {typeof initialProperty[key as keyof Property] === "boolean" ? (
                <input
                  type="checkbox"
                  name={key}
                  checked={!!formData[key as keyof Property]}
                  onChange={handleChangeInput}
                />
              ) : (
                <input
                  type={
                    typeof initialProperty[key as keyof Property] === "number"
                      ? "number"
                      : "text"
                  }
                  name={key}
                  value={formData[key as keyof Property] || ""}
                  onChange={handleChangeInput}
                  required={key !== "description"} // Make description optional
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            </div>
          )
      )}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isUpdating ? "Actualizar Propiedad" : "Crear Propiedad"}
      </button>
    </form>
  );
}
