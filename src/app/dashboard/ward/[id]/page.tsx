"use client";

import PageHeader from "@/components/layout/PageHeader";

import { Roles } from "@/utils/enums";
import { Button, Col, Row, Popover } from "antd";
import { useRouter } from "next/navigation";
import { HomeOutlined } from "@ant-design/icons";
import { FaBed } from "react-icons/fa";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "/dashboard/ward",
    title: "Ward Management",
  },
  {
    href: "#",
    title: "Ward Detail",
  },
];

const generateBeds = () => {
  const beds = [];
  for (let i = 1; i <= 20; i++) {
    beds.push({
      bed_number: i,
      occupied: i % 2 === 0, // Every second bed is occupied
      patient:
        i % 2 === 0
          ? {
              name: `Patient ${i}`,
              age: 30 + i,
              admission_date: `2024-06-${i < 10 ? `0${i}` : i}`,
              doctor: {
                name: `Dr. ${String.fromCharCode(65 + (i % 5))}`, // Generate doctor names A, B, C, D, E
                specialty: "Specialty " + ((i % 5) + 1),
              },
            }
          : null,
    });
  }
  return beds;
};

const wards = [
  {
    key: 1,
    name: "Ward A",
    type: "General",
    department: "Cardiology",
    beds: generateBeds(),
  },
];

const WardDetail = () => {
  const key = 1;

  const ward = wards.find((w) => w.key == key);

  if (!ward) return <div>Ward not found</div>;

  return (
    <>
      <PageHeader items={HeaderItems} titleContent={`${ward.name} Details`} />
      <div className="p-5 bg-white m-5">
        <Row gutter={[16, 16]}>
          {ward.beds.map((bed) => (
            <Col key={bed.bed_number} span={6} className="mt-2">
              <Popover
                content={
                  bed.occupied ? (
                    <div>
                      <p>
                        <strong>Name:</strong> {bed.patient.name}
                      </p>
                      <p>
                        <strong>Age:</strong> {bed.patient.age}
                      </p>
                      <p>
                        <strong>Admission Date:</strong>{" "}
                        {bed.patient.admission_date}
                      </p>
                    </div>
                  ) : (
                    <div>Bed is available</div>
                  )
                }
                title={`Bed ${bed.bed_number}`}
                placement="left"
              >
                <>
                  <FaBed
                    fontSize={"100px"}
                    style={{ color: bed.occupied ? "red" : "green" }}
                  />
                  <span className="text-lg">Bed {bed.bed_number} </span>
                </>
              </Popover>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default WardDetail;
