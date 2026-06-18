export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="max-w-full lg:max-w-200 w-full py-4 px-5 md:py-5 md:px-8 bg-[#1A1C1E] rounded-md outline-none mb-10"
    />
  );
}
