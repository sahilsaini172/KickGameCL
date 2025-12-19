export default function PrimaryButton({
  className,
  label = "label",
  children,
  varient = "default",
}) {
  const variants = {
    default: "bg-surface",
    black: "bg-black text-surface",
  };

  return (
    <button
      className={`flex items-center justify-center h-11 text-xs tracking-wide font-bold  px-4 py-3 rounded-md ${variants[varient]} ${className}`}
    >
      {label.toUpperCase()} {children}
    </button>
  );
}
