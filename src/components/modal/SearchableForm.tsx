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
    <Form
      name="lab-test-form"
      layout="vertical"
      onFinish={onFinish}
      form={form}
      style={{
        padding: "15px 30px",
      }}
    >
      <Row>
        <Col span={24}>
          <Input
            placeholder="Search all tests..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ marginBottom: "20px" }}
          />
        </Col>
        <Col span={24}>
          <Card title="Hematology" size="small">
            <Form.Item name="hematology">
              <SearchableCheckboxGroup
                options={HematologyTestOption}
                searchTerm={searchTerm}
              />
            </Form.Item>
          </Card>
          <Card title="Microbiology" size="small">
            <Form.Item name="microbiology">
              <SearchableCheckboxGroup
                options={MicrobiologyTestOption}
                searchTerm={searchTerm}
              />
            </Form.Item>
          </Card>
          <Card title="Pathology" size="small">
            <Form.Item name="pathology">
              <SearchableCheckboxGroup
                options={PathologyTestOption}
                searchTerm={searchTerm}
              />
            </Form.Item>
          </Card>
          <Card title="BioChemistry" size="small">
            <Form.Item name="bioChemistry">
              <SearchableCheckboxGroup
                options={BioChemistryTestOption}
                searchTerm={searchTerm}
              />
            </Form.Item>
          </Card>
          <Card title="Physiometry" size="small">
            <Form.Item name="physiometry">
              <SearchableCheckboxGroup
                options={PhysiometryTestOption}
                searchTerm={searchTerm}
              />
            </Form.Item>
          </Card>
          <Card title="Radiology" size="small">
            <Form.Item name="radiology">
              <SearchableCheckboxGroup
                options={RadiologyTestOption}
                searchTerm={searchTerm}
              />
            </Form.Item>
          </Card>
          <Button
            style={{
              color: "#fff",
              marginLeft: "10px",
            }}
            size="large"
            htmlType="submit"
          >
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchableForm;
