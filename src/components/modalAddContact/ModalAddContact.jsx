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
import PhoneBook from 'components/phonebook/Phonebook';
import css from './modalAddContact.module.css';

const ModalAddContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <div className={css.btnCreateContact}>
        <Button onClick={onOpen}>Create a new contact</Button>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <PhoneBook />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddContact;
