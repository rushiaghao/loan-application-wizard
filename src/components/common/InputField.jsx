function InputField({
  label,
  type = "text",
  name,
  register,
  error,
  placeholder,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

          <input
              type={type}
              placeholder={placeholder}
              {...register(
                  name,
                  type === "number" ? { valueAsNumber: true } : {}
              )}
              className="w-full border rounded-lg p-3"
          />
          
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default InputField;