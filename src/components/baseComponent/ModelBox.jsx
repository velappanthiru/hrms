import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, TimeInput, Textarea} from "@nextui-org/react";

export default function ModalBox({ isOpen, onOpenChange, backdrop = "blur"}) {



  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop={backdrop}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Regularization Apply</ModalHeader>
              <ModalBody>
                <TimeInput autoFocus label="From Time" labelPlacement="outside" variant="bordered"/>
                <TimeInput label="To Time" labelPlacement="outside" variant="bordered" />
                <Textarea
                  variant="bordered"
                  label="Reason"
                  labelPlacement="outside"
                  placeholder="Enter your Reason"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
