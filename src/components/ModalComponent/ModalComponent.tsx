import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ModalComponentProps
  extends Omit<ModalProps, 'children'>,
    UseDisclosureReturn {
  modalTitle: ReactNode;
  modalBody: ReactNode;
  modalFooter: ReactNode;
}

const ModalComponent = ({
  isOpen,
  onClose,
  modalTitle,
  modalBody,
  modalFooter,
  ...rest
}: ModalComponentProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>{modalFooter}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
