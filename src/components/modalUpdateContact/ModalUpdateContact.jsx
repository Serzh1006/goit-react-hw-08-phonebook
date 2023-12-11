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
import { RepeatIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import UpdateContact from 'components/updateContact/UpdateContact';

const ModalUpdateContact = ({ id, nameValue, numberValue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>
        <RepeatIcon color={'blue'} boxSize={6} />
      </Button>

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
            <UpdateContact
              id={id}
              nameValue={nameValue}
              numberValue={numberValue}
              closeBtn={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUpdateContact;
