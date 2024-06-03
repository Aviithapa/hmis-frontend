import dayjs, { Dayjs } from "dayjs";

const lastWeek = dayjs().subtract(7, "day");

export const rangePresets: {
  label: string;
  value: [Dayjs, Dayjs];
}[] = [
  { label: "Today", value: [dayjs(), dayjs()] },
  { label: "Two Days", value: [dayjs().add(1, "d"), dayjs()] },
  { label: "Three Days", value: [dayjs().add(2, "d"), dayjs()] },
  { label: "Four Days", value: [dayjs().add(3, "d"), dayjs()] },
  { label: "Five Days", value: [dayjs().add(4, "d"), dayjs()] },
  {
    label: "This Week",
    value: [dayjs().startOf("week"), dayjs().endOf("week")],
  },
  {
    label: "This Month",
    value: [dayjs().startOf("month"), dayjs().endOf("month")],
  },
];

export const HematologyTestOption = [
  { label: "CBC", value: "CBC" },
  { label: "WBC", value: "WBC" },
  { label: "RBC", value: "RBC" },
  { label: "MCV", value: "MCV" },
  { label: "MCH", value: "MCH" },
  { label: "MCHC", value: "MCHC" },
  { label: "PLATELETS", value: "PLATELETS" },
  { label: "DLC", value: "DLC" },
  { label: "ESR", value: "ESR" },
  { label: "BT/CT", value: "BT/CT" },
  { label: "PT", value: "PT" },
  { label: "APTT", value: "APTT" },
  { label: "PERIPHERAL BLOOD SMEAR", value: "PERIPHERAL BLOOD SMEAR" },
];

export const MicrobiologyTestOption = [
  { label: "BLOOD C/S", value: "BLOOD C/S" },
  { label: "URINE C/S", value: "URINE C/S" },
  { label: "STOOL C/S", value: "STOOL C/S" },
  { label: "SPUTUM C/S", value: "SPUTUM C/S" },
  { label: "GRAM STAIN", value: "GRAM STAIN" },
  { label: "KOH PREPARATION", value: "KOH PREPARATION" },
  { label: "FUNGAL C/S", value: "FUNGAL C/S" },
  { label: "BODY FLUID C/S", value: "BODY FLUID C/S" },
];
export const PathologyTestOption = [
  { label: "URINE RE/ME", value: "URINE RE/ME" },
  { label: "URINE ACETONE", value: "URINE ACETONE" },
];
export const BioChemistryTestOption = [
  { label: "FASTING GLUCOSE", value: "FASTING GLUCOSE" },
  { label: "RANDOM GLUCOSE", value: "RANDOM GLUCOSE" },
  { label: "GCT", value: "GCT" },
  { label: "OGTT", value: "OGTT" },
  { label: "HBA1C", value: "HBA1C" },
  { label: "UREA", value: "UREA" },
  { label: "CREATININE", value: "CREATININE" },
  { label: "SODIUM", value: "SODIUM" },
  { label: "POTASSIUM", value: "POTASSIUM" },
  { label: "TOTAL CHOLESTEROL", value: "TOTAL CHOLESTEROL" },
  { label: "HDL", value: "HDL" },
  { label: "LDL", value: "LDL" },
  { label: "TG", value: "TG" },
  { label: "BILIRUBIN, TOTAL", value: "BILIRUBIN, TOTAL" },
  { label: "BILIRUBIN, DIRECT", value: "BILIRUBIN, DIRECT" },
  { label: "TOTAL PROTEIN", value: "TOTAL PROTEIN" },
  { label: "ALBUMIN", value: "ALBUMIN" },
  { label: "AST", value: "AST" },
  { label: "ALT", value: "ALT" },
  { label: "GGT", value: "GGT" },
  { label: "ALP", value: "ALP" },
  { label: "LDH", value: "LDH" },
  { label: "CPKMB", value: "CPKMB" },
  { label: "CPK TOTAL", value: "CPK TOTAL" },
  { label: "TROPONIN I", value: "TROPONIN I" },
  { label: "AMYLASE", value: "AMYLASE" },
  { label: "LIPASE", value: "LIPASE" },
  { label: "TFT ( FT3/FT4/TSH)", value: "TFT ( FT3/FT4/TSH)" },
];

export const PhysiometryTestOption = [
  { label: "ECG", value: "ECG" },
  { label: "ECHO", value: "ECHO" },
];
export const RadiologyTestOption = [
  { label: "X-ray", value: "X-ray" },
  { label: "USG", value: "USG" },
];
export const FollowUpConditionOption = [
  { label: "Improving/Subsided", value: "Subsided" },
  { label: "Not Improving", value: "Not Improving" },
];
