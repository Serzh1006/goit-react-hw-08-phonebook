import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
import UpdateContact from 'components/updateContact/UpdateContact';

const ModalUpdateContact = ({ name, number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Update contact</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <UpdateContact />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUpdateContact;
