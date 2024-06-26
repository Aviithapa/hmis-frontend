import PageHeader from "@/components/layout/PageHeader";
import { HomeOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { BiWallet } from "react-icons/bi";
import SearchForm from "./component/search";
import OpdPatientList from "./component/list";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Add New Patient",
  },
];

const PatientRegister = () => {
  return (
    <>
      <PageHeader
        items={HeaderItems}
        titleContent="Patient Registration"
        buttonLabel="Add New Patient"
        link="opd-patient/add"
      />
      <div className="bg-white h-[auto] p-5   shadow-lg">
        <SearchForm />
      </div>

      <Row className=" mt-5">
        <Col lg={18} md={24} xs={24} sm={24} className="bg-white p-5 ">
          <OpdPatientList />
        </Col>

        <Col lg={6} md={24} xs={24} sm={24} className="sm:max-lg:mt-3">
          <Card
            className={`bg-white flex ml-10 sm:max-lg:ml-0 sm:max-lg:mb-0  items-center justify-center text-center`}
          >
            <div className="text-4xl mb-2 flex justify-center">
              <BiWallet />
            </div>
            <div className="text-3xl font-bold">Rs 10000</div>
            <div className="text-sm text-gray-400 font-bold">Total Revenue</div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PatientRegister;
