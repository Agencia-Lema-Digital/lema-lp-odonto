import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import LeadForm from "./LeadForm";

const FormDialogContext = createContext<{ open: () => void }>({ open: () => {} });

export const useFormDialog = () => useContext(FormDialogContext);

export const FormDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormDialogContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-0 border-none bg-transparent shadow-none">
          <VisuallyHidden>
            <DialogTitle>Agende sua Sessão Estratégica</DialogTitle>
          </VisuallyHidden>
          <LeadForm />
        </DialogContent>
      </Dialog>
    </FormDialogContext.Provider>
  );
};
