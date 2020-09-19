import React, { useState } from 'react';
import Widget from './widget';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

export default (props) => {
  const {
    buttonLabel,
    className,
    limits
  } = props;

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Dom Click</ModalHeader>
        <ModalBody>
          <Widget          
          value={value}
          setValue={setValue}
          limits={limits}/>
        </ModalBody>        
      </Modal>
    </div>
  );
}
