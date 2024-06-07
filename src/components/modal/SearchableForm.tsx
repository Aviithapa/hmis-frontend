
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

  const filteredHematologyOptions = HematologyTestOption.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMicrobiologyOptions = MicrobiologyTestOption.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPathologyOptions = PathologyTestOption.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBioChemistryOptions = BioChemistryTestOption.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPhysiometryOptions = PhysiometryTestOption.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRadiologyOptions = RadiologyTestOption.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4  space-y-2" style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* search bar section  */}
      <Input
        placeholder="Search all tests..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ backgroundColor: "white", padding: "7px" }}
      />

      {/* form section  */}
      <div>
        <Form
          name="lab-test-form"
          layout="vertical"
          onFinish={onFinish}
          form={form}
          className=" max-h-[350px]  scrollbar-track-emerald-400 overflow-hidden overflow-y-auto flex grow-0 shrink-0"
        >
          <div style={{}}>
            <Row gutter={[16, 16]}>
              {filteredHematologyOptions.length > 0 && (
                <Col span={24}>
                  <Card title="Hematology" size="small">
                    <Form.Item name="hematology">
                      <SearchableCheckboxGroup options={filteredHematologyOptions} searchTerm={searchTerm} />
                    </Form.Item>
                  </Card>
                </Col>
              )}
              {filteredMicrobiologyOptions.length > 0 && (
                <Col span={24}>
                  <Card title="Microbiology" size="small">
                    <Form.Item name="microbiology">
                      <SearchableCheckboxGroup options={filteredMicrobiologyOptions} searchTerm={searchTerm} />
                    </Form.Item>
                  </Card>
                </Col>
              )}
              {filteredPathologyOptions.length > 0 && (
                <Col span={24}>
                  <Card title="Pathology" size="small">
                    <Form.Item name="pathology">
                      <SearchableCheckboxGroup options={filteredPathologyOptions} searchTerm={searchTerm} />
                    </Form.Item>
                  </Card>
                </Col>
              )}
              {filteredBioChemistryOptions.length > 0 && (
                <Col span={24}>
                  <Card title="BioChemistry" size="small">
                    <Form.Item name="bioChemistry">
                      <SearchableCheckboxGroup options={filteredBioChemistryOptions} searchTerm={searchTerm} />
                    </Form.Item>
                  </Card>
                </Col>
              )}
              {filteredPhysiometryOptions.length > 0 && (
                <Col span={24}>
                  <Card title="Physiometry" size="small">
                    <Form.Item name="physiometry">
                      <SearchableCheckboxGroup options={filteredPhysiometryOptions} searchTerm={searchTerm} />
                    </Form.Item>
                  </Card>
                </Col>
              )}
              {filteredRadiologyOptions.length > 0 && (
                <Col span={24}>
                  <Card title="Radiology" size="small">
                    <Form.Item name="radiology">
                      <SearchableCheckboxGroup options={filteredRadiologyOptions} searchTerm={searchTerm} />
                    </Form.Item>
                  </Card>
                </Col>
              )}
            </Row>
          </div>
        </Form>

        {/* add btn section  */}
        <div

          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
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
    </div>
  );
};

export default SearchableForm;








