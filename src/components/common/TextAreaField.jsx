function TextAreaField({
  label,
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

      <textarea
        rows={4}
        placeholder={placeholder}
        {...register(name)}
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

export default TextAreaField;