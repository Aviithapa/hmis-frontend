import { Modal, Form } from "antd";
import dayjs from "dayjs";
import React from "react";
import SearchableForm from "./SearchableForm";

interface AddLabRequestModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const AddLabRequestModal: React.FC<AddLabRequestModalProps> = ({
  isModalOpen,
  handleCancel,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (data: any) => {
    const labRequestList = {
      date: dayjs().format("YYYY-MM-DD"),
      from: "",
      hematology: data.hematology,
      microbiology: data.microbiology,
      pathology: data.pathology,
      bio_chemistry: data.bioChemistry,
      physiometry: data.physiometry,
      radiology: data.radiology,
    };
    console.log(labRequestList);
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      width={1080}
      footer={null}
      styles={{ body: { overflowY: "auto", maxHeight: "calc(100vh - 200px)" } }}
    >
      <div>
        <SearchableForm form={form} onFinish={handleSubmit} />
      </div>
    </Modal>
  );
};

export default AddLabRequestModal;
