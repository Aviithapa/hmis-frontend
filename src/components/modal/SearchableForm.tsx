
import React, { useState } from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { FormInstance } from "antd/es/form";
import {
  BioChemistryTestOption,
  HematologyTestOption,
  MicrobiologyTestOption,
  PathologyTestOption,
  PhysiometryTestOption,
  RadiologyTestOption,
} from "@/constants";
import SearchableCheckboxGroup from "../SearchableCheckboxGroup";

interface SearchableFormProps {
  form: FormInstance;
  onFinish: (values: any) => void;
}

const SearchableForm: React.FC<SearchableFormProps> = ({ form, onFinish }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      <Input
        placeholder="Search all tests..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "20px", position: "sticky", top: 0, zIndex: 2, backgroundColor: "white", padding: "7px", margin: "15px" }}
      />
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Form
          name="lab-test-form"
          layout="vertical"
          onFinish={onFinish}
          form={form}
          style={{
            padding: "15px 30px",
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="Hematology" size="small">
                <Form.Item name="hematology">
                  <SearchableCheckboxGroup options={HematologyTestOption} searchTerm={searchTerm} />
                </Form.Item>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="Microbiology" size="small">
                <Form.Item name="microbiology">
                  <SearchableCheckboxGroup options={MicrobiologyTestOption} searchTerm={searchTerm} />
                </Form.Item>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="Pathology" size="small">
                <Form.Item name="pathology">
                  <SearchableCheckboxGroup options={PathologyTestOption} searchTerm={searchTerm} />
                </Form.Item>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="BioChemistry" size="small">
                <Form.Item name="bioChemistry">
                  <SearchableCheckboxGroup options={BioChemistryTestOption} searchTerm={searchTerm} />
                </Form.Item>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="Physiometry" size="small">
                <Form.Item name="physiometry">
                  <SearchableCheckboxGroup options={PhysiometryTestOption} searchTerm={searchTerm} />
                </Form.Item>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="Radiology" size="small">
                <Form.Item name="radiology">
                  <SearchableCheckboxGroup options={RadiologyTestOption} searchTerm={searchTerm} />
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
          borderTop: "1px solid #e8e8e8",
          backgroundColor: "white",
          position: "sticky",
          bottom: 0,
          zIndex: 2,
        }}
      >
        <Button style={{ color: "black", padding: "5px 15px" }} size="large" htmlType="submit">
          Add
        </Button>
      </div>
    </div>
  );
};

export default SearchableForm;
