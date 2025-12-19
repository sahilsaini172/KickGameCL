export default function SecondaryButton({
  className,
  label = "label",
  children,
}) {
  return (
    <button
      className={`flex items-center justify-center text-sm h-11 tracking-wide font-bold bg-surface/10 px-4 py-3 rounded-md ${className} backdrop-blur-xl text-white`}
    >
      {label.toUpperCase()} {children}
    </button>
  );
}
