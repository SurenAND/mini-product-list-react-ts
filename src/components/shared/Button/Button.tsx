type ButtonProps = {
  innerText: string;
  bgColor: string;
  textColor: string;
  py?: string;
};

const Button = ({ innerText, bgColor, textColor, py = "1" }: ButtonProps) => {
  return (
    <>
      <button
        className={`font-medium text-sm text-${textColor} bg-${bgColor} px-1 py-${py} rounded-md whitespace-nowrap focus:outline-none`}
      >
        {innerText}
      </button>
    </>
  );
};

export default Button;
