interface IProps {
    label: string
    placeholder: string
    type: string
    bg: boolean
}
export const Input = ({ label, placeholder, type, bg }: IProps) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className={`w-full mt-2 text-sm p-4 border border-border rounded text-white ${
          bg ? "bg-main" : "bg-dry"
        }`}
      />
    </div>
  );
};
