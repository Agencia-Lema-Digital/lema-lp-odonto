interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    window.location.href = "https://form.respondi.app/5196P56V";
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default CTAButton;
