import {twMerge} from "tailwind-merge";

function Input(props: React.ButtonHTMLAttributes<HTMLInputElement>) {
  const {className, ...others} = props;
  return <input type="text" className={twMerge("w-full px-8 py-5 border-1 border-gray-200 outline-secondary", className)} {...others} />;
}

export default Input;
