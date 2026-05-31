interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  min?: string;
  error?: string;
  disabled?: boolean;
}

export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  min,
  error,
  disabled,
}: InputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        htmlFor={name}
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: "rgba(246,239,228,0.7)",
          letterSpacing: "0.5px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {label}
        {required && <span style={{ color: "#C8A45D", marginLeft: "3px" }}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        disabled={disabled}
        style={{
          height: "48px",
          padding: "0 16px",
          borderRadius: "10px",
          background: disabled ? "rgba(10,8,5,0.3)" : "rgba(10,8,5,0.6)",
          border: error
            ? "1px solid rgba(220,80,80,0.6)"
            : "1px solid rgba(200,164,93,0.2)",
          color: disabled ? "rgba(246,239,228,0.5)" : "#F6EFE4",
          fontSize: "14px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          outline: "none",
          transition: "border-color 0.2s, opacity 0.2s",
          cursor: disabled ? "not-allowed" : "text",
          opacity: disabled ? 0.6 : 1,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(200,164,93,0.5)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error
            ? "rgba(220,80,80,0.6)"
            : "rgba(200,164,93,0.2)";
        }}
      />
      {error && (
        <span
          style={{
            fontSize: "11px",
            color: "rgba(200,120,100,0.85)",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontStyle: "italic",
            marginTop: "2px",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
