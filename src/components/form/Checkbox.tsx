function Checkbox(props: React.ButtonHTMLAttributes<HTMLInputElement>) {
  const {children, ...others} = props;

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="peer hidden" {...others} />
      <i
        className={`
          inline-flex justify-center items-center rounded-2 w-16 h-16
          border-1 border-gray-300 bg-white
          peer-checked:bg-gray-700
          peer-checked:border-gray-700
          relative before:content-[''] before:absolute before:w-8 before:h-6 before:left-3 before:top-3
          before:border-l-2 before:border-b-2 before:border-white before:rounded-1
          before:rotate-[-45deg] before:scale-0
          peer-checked:before:scale-100
        `}
      />
      <span className="text-14 ml-4">{children}</span>
    </label>
  );
}

export default Checkbox;
