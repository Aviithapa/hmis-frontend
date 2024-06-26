"use client";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";

const SearchForm = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <Form layout="vertical">
      <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
        <Col span={5} xs={24} sm={12} md={12} lg={5}>
          <Form.Item name="Search">
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
        <Col span={5} xs={24} sm={12} md={12} lg={5}>
          <Form.Item className="rounded-md" name="Phone Number">
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col span={5} xs={24} sm={12} md={12} lg={5}>
          <Form.Item className="rounded-md" name="doctor">
            <Select
              showSearch
              placeholder="Select Doctor"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "Ram Kumar Yadav (Opticals)",
                  label: "Ram Kumar Yadav (Opticals)",
                },
                {
                  value: "Rajendra Mouny (Gastro)",
                  label: "Rajendra Mouny (Gastro)",
                },
                {
                  value: "Dr shyam bahadur (Clino)",
                  label: "Dr shyam bahadur (Clino)",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={5} xs={24} sm={12} md={12} lg={5}></Col>

        <Col span={4} xs={24} sm={24} lg={4}>
          <Form.Item>
            <Button
              type="default"
              className="w-[100%]"
              style={{
                height: "100%",
                borderRadius: "0",
                padding: "6px",
              }}
            >
              Reset Filter
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
