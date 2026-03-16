import { useFormDialog } from "./FormDialogContext";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  const { open } = useFormDialog();
  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
};

export default CTAButton;
