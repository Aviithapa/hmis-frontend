// Import necessary libraries and components
"use client";
import React, { useEffect, useRef, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined, DeleteOutlined, PlusCircleFilled, SearchOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Select, DatePicker, Row, message, Divider, AutoComplete } from "antd";

import "nepali-datepicker-reactjs/dist/index.css";
import { useRouter } from "next/navigation";
import moment from "moment";
import PrintPatientMedicineBill from "@/components/print/PrintPatientMedicineBill";
import { useReactToPrint } from "react-to-print";

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

 
interface Customer {
    id: string;
    name: string;
    age: number;
    sex: string;
    address: string;
    payment_type: string;
  }
  
// Sample medication data
const medicationData : any = {
  medicine1: { expire_date: '2024-12-31', rate: 10, available_quantity: 100 },
  medicine2: { expire_date: '2025-06-30', rate: 15, available_quantity: 50 },
  medicine3: { expire_date: '2023-09-30', rate: 20, available_quantity: 75 },
};

// Sample customer data
const customers: Customer[] = [
    { id: '1', name: 'John Doe', age: 30, sex: 'Male', address: '123 Main St', payment_type: 'Credit' },
    { id: '2', name: 'Jane Smith', age: 25, sex: 'Female', address: '456 Elm St', payment_type: 'Cash' },
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

// SalesList component
const SalesList = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [discountType, setDiscountType] = useState<'$' | '%'>('$'); // State for discount type
  const [discountValue, setDiscountValue] = useState<number>(0); // State for discount value
  const [totalAmount, setTotalAmount] = useState<number>(0); // State for total amount
  const [invoiceData, setInvoiceData] = useState();
  const [customerOptions, setCustomerOptions] = useState<Customer[]>(customers);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);



  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "Patient ",
    pageStyle: `
    @page{
     background: #fff;
     margin: 0;
    }
    `,
  });

  // Handle quantity or rate change for medication item
  const handleQuantityRateChange = (index: number) => {
    // Retrieve current form values
    const data = form.getFieldsValue();
    
    // Extract quantity and rate for the specific medication item
    const quantity = data?.medication[index]?.quantity || 0;
    const rate = data?.medication[index]?.rate || 0;

    // Check if the quantity is available
    const medicationName = data?.medication[index]?.medication_name;
    if (medicationData[medicationName] && quantity > medicationData[medicationName].available_quantity) {
      message.error(`Only ${medicationData[medicationName].available_quantity} units available for ${medicationName}`);
      return;
    }

    // Calculate amount based on quantity and rate
    const amount = quantity * rate;

    // Update medication item with the calculated amount
    const medications = form.getFieldValue('medication') as Medication[];
    medications[index].amount = amount;

    // Update form with the updated medication list
    form.setFieldsValue({ medication: [...medications] });

    // Calculate new total amount
    const newTotalAmount = medications.reduce((acc, med) => acc + (med?.amount || 0), 0);

    form.setFieldsValue({ total_amount: newTotalAmount });

   

    // Apply discount if there is any
    const discountedTotal = applyDiscount(newTotalAmount, discountType, discountValue);

    form.setFieldsValue({ sub_total: discountedTotal  });
    setTotalAmount(discountedTotal);
  };

  // Function to apply discount based on type and value
  const applyDiscount = (amount: number, type: '$' | '%', value: number): number => {
    if (type === '$') {
      return amount - value;
    } else if (type === '%') {
      const discountAmount = (value / 100) * amount;
      return amount - discountAmount;
    }
    return amount;
  };

  // Handle discount type change
  const handleDiscountTypeChange = (type: '$' | '%') => {
    setDiscountType(type);
    const discount = form.getFieldValue('discount');
    const totalAmount = form.getFieldValue('total_amount');

    const discountedTotal = applyDiscount(totalAmount, type, discount);
    form.setFieldsValue({ sub_total: discountedTotal });
    setTotalAmount(discountedTotal);
  };

  // Handle discount input change
  const handleDiscountInputChange = (value: string | number | undefined) => {
    const inputValue = typeof value === 'string' ? value ? parseFloat(value) : 0 : 0;
    setDiscountValue(inputValue);

    // Recalculate total amount with updated discount value
    const discountedTotal = applyDiscount(totalAmount, discountType, inputValue);
    form.setFieldsValue({ sub_total: discountedTotal });

    setTotalAmount(discountedTotal);
  };

  // Handle medicine selection change
  const handleMedicineChange = (value: string, index: number) => {
    const medications : any = form.getFieldValue('medication') as Medication[];
    if (medicationData[value]) {
      medications[index].expire_date = moment(medicationData[value].expire_date);
      medications[index].rate = medicationData[value].rate;
      form.setFieldsValue({ medication: [...medications] });
    }
  };

  const handleCustomerSearch = (value: string) => {
    const filteredOptions = customers.filter(customer =>
      customer.name.toLowerCase().includes(value.toLowerCase()) ||
      customer.id.toLowerCase().includes(value.toLowerCase()) ||
      customer.address.toLowerCase().includes(value.toLowerCase())
    );
    setCustomerOptions(filteredOptions);
  };

  const handleCustomerSelect = (value: string) => {
    const customer = customers.find(customer => customer.id === value);
    if (customer) {
      form.setFieldsValue({
        customer_name: customer.name,
        age: customer.age,
        sex: customer.sex,
        address: customer.address,
        payment_type: customer.payment_type
      });
      setSelectedCustomer(customer);
    }
  };

  const handleSubmit = (e: any) => {
   setInvoiceData(e);
   
  }
  
  useEffect(() => {
    if(invoiceData){
        handlePrint();
    }
  }, [invoiceData])
  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Create Sales" />
      <Form form={form} layout="vertical" initialValues={{ medication: [{}], payment_type: 'cash' }} onFinish={handleSubmit} >
        {/* Medication Details */}
        <div className="bg-white p-5 ml-5 mr-10 shadow-lg mt-5">
          <Divider orientation="left" orientationMargin={'0px'}> Customer Information</Divider>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="customer_search"
                label="Search Customer"
              >
                <AutoComplete
                  options={customerOptions.map(customer => ({ value: customer.id, label: customer.name }))}
                  onSearch={handleCustomerSearch}
                  onSelect={handleCustomerSelect}
                  placeholder="Search by ID, Name, or Address"
                  filterOption={false}
                >
                  <Input suffix={<SearchOutlined />} />
                </AutoComplete>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Customer Name"
                name="customer_name"
                rules={[{ required: true, message: "Please input the customer's name!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Age"
                name="age"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Sex"
                name="sex"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address"
                name="address"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Payment Type"
                name="payment_type"
              >
                <Select>
                  <Select.Option value="cash">Cash</Select.Option>
                  <Select.Option value="credit">Credit</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left" orientationMargin={'0px'} style={{marginTop: '10px'}}> Bill Information</Divider>
          <Form.List name="medication">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Row gutter={16}>
                      <Col span={5}>
                        <Form.Item
                          name={[field.name, "medication_name"]}
                          label={index === 0 ? "Medicine Name" : undefined}
                          rules={[{ required: true, message: 'Please select the Medicine Name!' }]}
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
                            onChange={(value) => handleMedicineChange(value, index)}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          name={[field.name, "expire_date"]}
                          label={index === 0 ? "Expire Date" : undefined}
                          rules={[{ required: true, message: 'Please select the Expire Date!' }]}
                        >
                          <DatePicker style={{ width: '100%' }} disabled />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          name={[field.name, "quantity"]}
                          label={index === 0 ? "Quantity" : undefined}
                          rules={[{ required: true, message: 'Please input the Quantity!' }]}
                        >
                          <Input type="number" onChange={() => handleQuantityRateChange(index)} />
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item
                          name={[field.name, "rate"]}
                          label={index === 0 ? "Rate" : undefined}
                          rules={[{ required: true, message: 'Please input the Rate!' }]}
                        >
                          <Input type="number" onChange={() => handleQuantityRateChange(index)} disabled />
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item
                          name={[field.name, "amount"]}
                          label={index === 0 ? "Amount" : undefined}
                          rules={[{ required: true, message: 'Please input the Amount!' }]}
                        >
                          <Input disabled />
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
          <Row gutter={16} className="justify-end">
            <Col span={6}>
              <Form.Item
                name="total_amount"
                label="Total Amount"
                rules={[{ required: true, message: 'Total Amount is required!' }]}
              >
                <Input value={totalAmount} disabled />
              </Form.Item>
            </Col>
            </Row>
            <Row gutter={16} className="justify-end">
            <Col span={6}>
              <Form.Item
                name="discount"
                label="Discount"
                rules={[{ required: true, message: 'Please input the Discount!' }]}
              >
                <Input
                  type="number"
                  value={discountValue || ''}
                  placeholder={discountType === '$' ? '0.00' : '0'}
                  onChange={(e) => handleDiscountInputChange(e.target.value)}
                  addonAfter={
                    <Button.Group>
                      <Button onClick={() => handleDiscountTypeChange('$')} type={discountType === '$' ? 'primary' : 'default'}    style={{borderRadius: 0}}>
                        $
                      </Button>
                      <Button onClick={() => handleDiscountTypeChange('%')} type={discountType === '%' ? 'primary' : 'default'}   style={{borderRadius: 0}}>
                        %
                      </Button>
                    </Button.Group>
                  }
                />
              </Form.Item>
            </Col>
            </Row>
            <Row gutter={16} className="justify-end">
            <Col span={6}>
              <Form.Item
                name="sub_total"
                label="Sub Total"
                rules={[{ required: true, message: 'Please input the Sub total!' }]}
              >
                <Input
                  type="number"
                disabled
                />
              </Form.Item>
            </Col>
            </Row>
        </div>

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
      </Form>
      <PrintPatientMedicineBill ref={ref} invoiceData={invoiceData}/>
    </SidebarLayout>
  );
};

export default SalesList;
