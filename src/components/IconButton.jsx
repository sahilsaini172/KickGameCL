export default function IconButton({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center duration-150 ease-in justify-center p-2 text-sm tracking-wide font-bold bg-surface/10 aspect-square rounded-md ${className} backdrop-blur-xl text-white/75 hover:text-white cursor-pointer`}
    >
      {children}
    </button>
  );
}
