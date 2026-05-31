interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export default function Select({
  label,
  name,
  value,
  onChange,
  options,
  required,
  error,
  disabled,
}: SelectProps) {
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
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          height: "48px",
          padding: "0 16px",
          borderRadius: "10px",
          background: disabled ? "rgba(10,8,5,0.3)" : "rgba(10,8,5,0.6)",
          border: error
            ? "1px solid rgba(220,80,80,0.6)"
            : "1px solid rgba(200,164,93,0.2)",
          color: disabled ? "rgba(246,239,228,0.3)" : value ? "#F6EFE4" : "rgba(246,239,228,0.4)",
          fontSize: "14px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          outline: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          appearance: "none",
          transition: "border-color 0.2s, opacity 0.2s",
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
      >
        <option value="" style={{ background: "#12100C" }}>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "#12100C" }}>
            {opt}
          </option>
        ))}
      </select>
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
