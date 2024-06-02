export enum LeaveActionMenu {
  APPROVE = "APPROVE",
  DECLINE = "DECLINE",
  VIEW = "VIEW",
  EDIT = "EDIT",
  DELETE = "DELETE",
}

export enum LeaveStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum Roles {
  ADMIN = "Admin",
  EMPLOYEE = "Employee",
  SUPERADMIN = "Super Admin",
  RECEPTION = "Reception",
}

export enum Leaves {
  SICK = "Sick Leave",
  CASUAL = "Casual",
}

export enum settingItems {
  FISCALYEAR = "fiscal-year",
  REBATE = "rebate",
  EXEMPTION = "exemption",
  TAXSLAB = "tax-slab",
  LEAVE = "leave",
  ALLOWANCE = "allowance",
  COMPANYINFORMATION = "company-information",
}

export enum ButtonState {
  CREATE = "CREATE",
  DISABLED = "DISABLED",
  VIEW = "VIEW",
}

export enum PaymentMethod {
  BANKTRANSFER = "Bank Transfer",
  BANKREMITTANCE = "Bank Remittance",
  CASH = "Cash",
  CHEQUE = "Cheque",
}

export enum ExemptionType {
  INSURANCE = "INSURANCE",
  SAVING = "SAVING",
  REBATE = "REBATE",
}

export enum ExemptionValueType {
  AMOUNT = "AMOUNT",
  PERCENTAGE = "PERCENTAGE",
}

export enum SalaryType {
  MONTHLYSALARY = "monthly_salary",
  ANNUALSALARY = "annual_salary",
}

export enum SalaryItems {
  MONTHLYSALARY = "monthly",
  YEARLYSALARY = "yearly",
}

export enum payrollItems {
  CREATEPAYROLL = "create-payroll",
  PAYROLLHISTORY = "payroll-history",
}

export enum payrollHistoryStatus {
  PARTIAL_PAID = "PARTIAL_PAID",
  PAID = "PAID",
}

export enum GoPayrollType {
  CURRENTPAYROLL = "current_payroll",
  WITHHELDPAYROLL = "withheld_payroll",
  CANCELEDPAYROLL = "cancelled_payroll",
}

export enum payslipsItems {
  PAYSLIPS = "payslips",
  MULITPLEPAYSLIPS = "multiple-payslips",
}

export enum PrintRange {
  RANGE = "range",
  THREE = 3,
  SIX = 6,
}

export enum LeaveBalance {
  CARRYOVERALLOWED = "carryover_allowed",
  ENCASHMENT = "en-cashment",
  NONE = "none",
}

export enum carryoverType {
  CARRYOVER = "CARRYOVER",
  ENCASH = "ENCASH",
}

export enum SortOrder {
  DESC = "DESC",
  ASC = "ASC",
  ASCEND = "ascend",
  DECEND = "descend",
}

export enum ProfileTimelineEventType {
  ONBOARD = "onboard",
  ONBOARD_CONFIRMATION = "onboard-confirmation",
  OFFBOARD = "offboard",
  PROJECT_START = "project-start",
  PROJECT_COMPLETION = "project-completion",
  REVIEW = "review",
  PROMOTION = "promotion",
  LEAVE = "leave",
  TRAINING = "training",
  EMPLOYEE_OF_THE_MONTH = "eom",
  MEDICAL = "medical",
  DOCUMENTS = "documents",
  RESIGNATION = "resignation",
  TERMINATION = "termination",
  DEVICE = "device",
}
