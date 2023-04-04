'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";


interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
  }


  const Modal: React.FC<ModalProps> = ({ 
    isOpen, 
    onClose, 
    onSubmit, 
    title, 
    body, 
    actionLabel, 
    footer, 
    disabled,
    secondaryAction,
    secondaryActionLabel
  }) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
      }, [isOpen]);

      const handleClose = useCallback(() => {
        if (disabled) {
          return;
        }
      
        setShowModal(false);
        setTimeout(() => {
          onClose();
        }, 300)
      }, [onClose, disabled]);

      
      const handleSubmit = useCallback(() => {
        if (disabled) {
          return;
        }
    
        onSubmit();
      }, [onSubmit, disabled]);



    return (
        <div></div>
    )
}

export default Modal;