import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  TreeSelect,
} from "antd";
import React from "react";
import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import { TreeNode } from "antd/es/tree-select";

const { TextArea } = Input;
interface Props {
  handleCancel: () => void;
  isModalOpen: boolean;
}

const AddTestModal = ({ isModalOpen, handleCancel }: Props) => {
  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <Modal
      title="CREATE NEW TEST"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={1200}
    >
      <Form
        form={form}
        preserve={false}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} xs={24} md={12} sm={12}>
            <Form.Item
              label="Test Name"
              name="name"
              rules={[{ required: true, message: "Please input test name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12} xs={24} md={12} sm={12}>
            <Form.Item
              label="Shortcut Name"
              name="shortcut"
              rules={[
                { required: true, message: "Please input shortcut name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12} xs={24} md={12} sm={12}>
            <Form.Item label="Category" name="Category">
              <TreeSelect
                showSearch
                style={{ width: "60%" }}
                value=""
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={() => {}}
              >
                <TreeNode
                  value="Complete Blood Cell"
                  title="Complete Blood Cell"
                >
                  <TreeNode value="Total WBC Count" title="Total WBC Count" />
                  <TreeNode value="Differential Count" title="Difference Count">
                    <TreeNode value="Basphils" title="Basphils" />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Form.Item>
          </Col>
          <Col span={12} xs={24} md={12} sm={12}>
            <Form.Item
              label="Sample Type"
              name="sample_type"
              rules={[{ required: true, message: "Please input sample type!" }]}
            >
              <Select
                showSearch
                placeholder="Select Sample"
                optionFilterProp="children"
                options={[
                  { value: "New", label: "New" },
                  { value: "Re-visit", label: "Re-Visit" },
                  { value: "Emergency", label: "Emergency" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12} xs={24} md={12} sm={12}>
            <Form.Item
              label="Price"
              name="Price"
              rules={[{ required: true, message: "Please input price!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12} xs={24} md={12} sm={12}>
            <Form.Item
              label="Duration"
              name="duration"
              rules={[{ required: true, message: "Please input price!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <span className="text-2xl">Range</span>
        <hr />
        <div className="mt-4">
          <Form.List name="medication" initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, i) => {
                  return (
                    <div style={{ position: "relative" }} key={i}>
                      <Row style={{ justifyContent: "space-between" }}>
                        <Col span={6} md={12} lg={6} sm={24} xs={24}>
                          <Space.Compact block>
                            <FormItem
                              label={i === 0 && "Age Group"}
                              name={[field.name, "age_group"]}
                            >
                              <Input
                                style={{ width: 120, textAlign: "center" }}
                                placeholder="Minimum"
                              />
                              <Input
                                className="site-input-split"
                                style={{
                                  width: 30,
                                  borderLeft: 0,
                                  borderRight: 0,
                                  pointerEvents: "none",
                                }}
                                placeholder="~"
                                disabled
                              />
                              <Input
                                className="site-input-right"
                                style={{
                                  width: 120,
                                  textAlign: "center",
                                }}
                                placeholder="Maximum"
                              />
                            </FormItem>
                          </Space.Compact>
                        </Col>
                        <Col span={6} md={12} lg={6} sm={24} xs={24}>
                          <Space.Compact block>
                            <FormItem
                              label={i === 0 && "Range"}
                              name={[field.name, "range"]}
                            >
                              <Input
                                style={{ width: 120, textAlign: "center" }}
                                placeholder="Minimum"
                              />
                              <Input
                                className="site-input-split"
                                style={{
                                  width: 30,
                                  borderLeft: 0,
                                  borderRight: 0,
                                  pointerEvents: "none",
                                }}
                                placeholder="~"
                                disabled
                              />
                              <Input
                                className="site-input-right"
                                style={{
                                  width: 120,
                                  textAlign: "center",
                                }}
                                placeholder="Maximum"
                              />
                            </FormItem>
                          </Space.Compact>
                        </Col>

                        <Col span={5} lg={6} sm={24} xs={24}>
                          <Form.Item
                            label={i === 0 && "Unit"}
                            name={[field.name, "unit"]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col md={1}>
                          {i !== 0 && (
                            <Button
                              onClick={() => {
                                remove(field.name);
                              }}
                              icon={<DeleteOutlined />}
                              style={{
                                padding: "10px",
                                color: "red",
                                borderColor: "red",
                                borderRadius: "0px",
                              }}
                            />
                          )}
                        </Col>
                      </Row>
                    </div>
                  );
                })}
                <Form.Item>
                  <Button onClick={() => add()} icon={<PlusCircleFilled />}>
                    Add
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>

        <span className="text-2xl">Description</span>
        <hr />
        <div className="mt-4"></div>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please input test name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              display: "flex",
            }}
          >
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{ borderRadius: "0px" }}
            >
              Add Now
            </Button>
            <Button
              size="large"
              onClick={handleCancel}
              className="ml-4"
              style={{ borderRadius: "0px" }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddTestModal;
