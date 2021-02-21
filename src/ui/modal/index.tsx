import React from 'react';
import { Flex, Text } from 'rebass';
import { Close } from '@material-ui/icons';

import { FloatingModal, WhiteBox } from './style';

interface Props {
  title: string;
  children: JSX.Element | React.ReactChild;
  open: boolean;
  closeModal(): void;
}
const Modal = ({ children, title, open, closeModal }: Props): JSX.Element => {
  const handleClickOutModal = (event: any): void => {
    const { classList } = event.target;
    if (classList.contains('parent-modal-div')) closeModal();
  };

  if (open)
    return (
      <FloatingModal onClick={handleClickOutModal} className="parent-modal-div">
        <WhiteBox>
          <Flex alignItems="center" justifyContent="space-between" pb="32px">
            <Text fontSize="20px">{title}</Text>
            <Close onClick={closeModal} style={{ cursor: 'pointer' }} />
          </Flex>
          {children}
        </WhiteBox>
      </FloatingModal>
    );

  return <></>;
};

export default Modal;
