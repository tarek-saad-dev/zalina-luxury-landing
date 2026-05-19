interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

export default function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextareaProps) {
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
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        style={{
          padding: "14px 16px",
          borderRadius: "10px",
          background: "rgba(10,8,5,0.6)",
          border: "1px solid rgba(200,164,93,0.2)",
          color: "#F6EFE4",
          fontSize: "14px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          outline: "none",
          resize: "vertical",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(200,164,93,0.5)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(200,164,93,0.2)";
        }}
      />
    </div>
  );
}
