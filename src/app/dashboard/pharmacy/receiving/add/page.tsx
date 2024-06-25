// Import necessary libraries and components
"use client";
import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined, DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Select, DatePicker, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import "nepali-datepicker-reactjs/dist/index.css";
import { useRouter } from "next/navigation";

// Define interfaces for Supplier and Medication
interface Supplier {
  id: string;
  name: string;
  contact_person: string;
  contact_number: string;
}

interface Medication {
  medication_name: string;
  mfg_date: Date | null;
  expire_date: Date | null;
  quantity: number;
  rate: number;
  amount: number;
  notes?: string;
}

// Sample suppliers data
const suppliers: Supplier[] = [
  { id: '1', name: 'Supplier A', contact_person: 'John Doe', contact_number: '1234567890' },
  { id: '2', name: 'Supplier B', contact_person: 'Jane Smith', contact_number: '0987654321' },
];

// Define header items for navigation
const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Pharmacy",
  },
  {
    href: "#",
    title: "Receiving List",
  },
  {
    href: "#",
    title: "Add New Receiving",
  },
];

// ReceivingList component
const ReceivingList = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Handle supplier selection change
  const handleSupplierChange = (value: string) => {
    const supplier = suppliers.find(supplier => supplier.id === value);
    setSelectedSupplier(supplier || null);
    if (supplier) {
      form.setFieldsValue({
        contact_person: supplier.contact_person,
        contact_number: supplier.contact_number,
      });
    } else {
      form.resetFields(['contact_person', 'contact_number']);
    }
  };

  // Handle quantity or rate change for medication item
  const handleQuantityRateChange = (index: number) => {
    // Retrieve current form values
    const data = form.getFieldsValue();
    
    // Extract quantity and rate for the specific medication item
    const quantity = data?.medication[index]?.quantity || 0;
    const rate = data?.medication[index]?.rate || 0;

    // Calculate amount based on quantity and rate
    const amount = quantity * rate;

    // Update medication item with the calculated amount
    const medications = form.getFieldValue('medication') as Medication[];
    medications[index].amount = amount;

    // Update form with the updated medication list
    form.setFieldsValue({ medication: [...medications] });

    // Calculate new total amount
    const newTotalAmount = medications.reduce((acc, med) => acc + (med?.amount || 0), 0);

    // Update total_amount field in form
    form.setFieldsValue({ total_amount: newTotalAmount });
  };

  // Handle payment type change
  const handlePaymentTypeChange = (value: string) => {
    // Reset cheque_number and transaction_id fields based on payment type
    if (value === 'cheque') {
      form.setFieldsValue({ cheque_number: undefined, transaction_id: undefined });
    } else if (value === 'online') {
      form.setFieldsValue({ transaction_id: undefined, cheque_number: undefined });
    }
  };

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Add New Receiving" />
      <Form form={form} layout="vertical" initialValues={{ medication: [{}], payment_type: 'cash' }}>
        {/* Supplier Details */}
        <div className="bg-white p-5 ml-5 mr-10 shadow-lg">
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="supplier_name"
                label="Supplier Name"
                rules={[{ required: true, message: 'Please input the Supplier Name!' }]}
              >
                <Select
                  placeholder="Select Supplier"
                  onChange={handleSupplierChange}
                  allowClear
                  showSearch
                  options={suppliers.map(supplier => ({
                    value: supplier.id,
                    label: supplier.name,
                  }))}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="contact_person"
                label="Contact Person Name"
                rules={[{ required: true, message: 'Please input the Contact Person Name!' }]}
              >
                <Input disabled={!!selectedSupplier} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="contact_number"
                label="Contact Number"
                rules={[{ required: true, message: 'Please input the Contact Number!' }]}
              >
                <Input disabled={!!selectedSupplier} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="invoice_number"
                label="Invoice Number"
                rules={[{ required: true, message: 'Please input the Invoice Number!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="delivered_by"
                label="Delivered By"
                rules={[{ required: true, message: 'Please input the Delivered By!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Medication Details */}
        <div className="bg-white p-5 ml-5 mr-10 shadow-lg mt-5">
          <Form.List name="medication">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Row gutter={16}>
                    <Col span={4}>
                        <Form.Item
                            name={[field.name, "medication_name"]}
                            label={index === 0 ? "Medicine Name" : undefined}
                            rules={[{ required: true, message: 'Please input the Medicine Name!' }]}
                        >
                            <Select
                            showSearch
                            placeholder="Select Medicine"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                { value: 'medicine1', label: 'Medicine 1' },
                                { value: 'medicine2', label: 'Medicine 2' },
                                { value: 'medicine3', label: 'Medicine 3' },
                            ]}
                            />
                        </Form.Item>
                    </Col>
                      <Col span={4}>
                        <Form.Item
                          name={[field.name, "mfg_date"]}
                          label={index === 0 ? "Mfg Date" : undefined}
                          rules={[{ required: true, message: 'Please select the Mfg Date!' }]}
                        >
                          <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          name={[field.name, "expire_date"]}
                          label={index === 0 ? "Expire Date" : undefined}
                          rules={[{ required: true, message: 'Please select the Expire Date!' }]}
                        >
                          <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <Form.Item
                          name={[field.name, "quantity"]}
                          label={index === 0 ? "Quantity" : undefined}
                          rules={[{ required: true, message: 'Please input the Quantity!' }]}
                        >
                          <Input type="number" onChange={() => handleQuantityRateChange(index)} />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <Form.Item
                          name={[field.name, "rate"]}
                          label={index === 0 ? "Rate" : undefined}
                          rules={[{ required: true, message: 'Please input the Rate!' }]}
                        >
                          <Input type="number" onChange={() => handleQuantityRateChange(index)} />
                        </Form.Item>
                      </Col>
                      <Col span={3}>
                        <Form.Item
                          name={[field.name, "amount"]}
                          label={index === 0 ? "Amount" : undefined}
                          rules={[{ required: true, message: 'Please input the Amount!' }]}
                        >
                          <Input disabled />
                        </Form.Item>
                      </Col>
                      <Col span={3}>
                        <Form.Item
                          name={[field.name, "notes"]}
                          label={index === 0 ? "Notes" : undefined}
                        >
                          <TextArea rows={1} />
                        </Form.Item>
                      </Col>
                      <Col span={1}>
                        {index > 0 && (
                          <Button
                            onClick={() => {
                              remove(field.name);
                            }}
                          >
                            <DeleteOutlined />
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </div>
                ))}
                <Form.Item>
                  <Button onClick={() => add()} icon={<PlusCircleFilled />}>
                    Add Medication
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>

        {/* Payment Details */}
        <div className="bg-white p-5 ml-5 mr-10 shadow-lg">
          <Row gutter={16} style={{ justifyContent:"space-between"}}>
            <Col span={6} >
              <Form.Item
                name="payment_type"
                label="Payment Type"
                rules={[{ required: true, message: 'Please select the Payment Type!' }]}
              >
                <Select placeholder="Select Payment Type" onChange={(value: string) => handlePaymentTypeChange(value)}>
                  <Select.Option value="cash">Cash</Select.Option>
                  <Select.Option value="credit_card">Credit Card</Select.Option>
                  <Select.Option value="debit_card">Debit Card</Select.Option>
                  <Select.Option value="online">Online</Select.Option>
                  <Select.Option value="cheque">Cheque</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            {form.getFieldValue('payment_type') === 'cheque' && (
              <Col span={6}>
                <Form.Item
                  name="cheque_number"
                  label="Cheque Number"
                  rules={[{ required: true, message: 'Please input the Cheque Number!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            )}
            {form.getFieldValue('payment_type') === 'online' && (
              <Col span={6}>
                <Form.Item
                  name="transaction_id"
                  label="Transaction ID"
                  rules={[{ required: true, message: 'Please input the Transaction ID!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            )}
            <Col span={6}>
              <Form.Item
                name="total_amount"
                label="Total Amount"
                rules={[{ required: true, message: 'Total Amount is required!' }]}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            
          </Row>
        </div>
          
        <Col span={24} md={24} sm={24} xs={24}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }} className="pr-10 pt-10">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-[100%] bg-green-700"
                    style={{ borderRadius: "0px", height: "40px" }}
                  >
                    Save
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="default"
                    onClick={() => router.back()}
                    className="w-[100%] border border-[rgba(247,122,88,0.75)]"
                    style={{ borderRadius: "0px", height: "40px" }}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </div>
            </Col>
      </Form>
    </SidebarLayout>
  );
};

export default ReceivingList;
