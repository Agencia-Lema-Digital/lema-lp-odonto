interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    const baseUrl = "https://form.respondi.app/5196P56V";
    const currentParams = window.location.search;
    const separator = currentParams ? (baseUrl.includes('?') ? '&' : '?') + currentParams.slice(1) : '';
    window.location.href = baseUrl + separator;
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default CTAButton;
