/* eslint-disable consistent-return */

export const showTagColor = (name: string) => {
  if (name === "APPROVED") {
    return "green";
  }
  if (name === "PENDING") {
    return "blue";
  }
  if (name === "REJECTED") {
    return "red";
  }
  return "blue";
};

export const imageFullPath = (
  imageUrl: string | undefined,
  placeholderImage: string
) => {
  return imageUrl
    ? `${process.env.NEXT_PUBLIC_S3_URL}/${imageUrl}`
    : placeholderImage;
};

export const getTextCapitilize = (str: string) => {
  if (!str) return;
  const lowerCase = str.toLowerCase();
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
};

export const getInitials = () => {
  const fullName = "Abhishek Thapa";
  if (!fullName) return;
  const nameArray = fullName.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length - 1];
  const initials = firstName.charAt(0) + lastName.charAt(0);
  return initials.toUpperCase();
};

export const getDefaultOpenKeys = (pathname: string) => {
  if (pathname.includes("payroll")) {
    return ["Payroll"];
  }
  return [];
};

export const truncateText = (text: string) => {
  if (text.length > 30) {
    return `${text.substring(0, 30)}...`;
  }
  return text;
};

export const formatLeaveNumberOfDays = (number: string) => {
  const formattedNumber = parseFloat(number).toString();
  if (formattedNumber.endsWith(".0")) {
    return formattedNumber.slice(0, -2);
  }
  return formattedNumber;
};

export const decodeNumber = (text: string) => {
  const textToNumberTransform =
    process.env.NEXT_PUBLIC_TEXT_TO_NUMBER_TRANSFORM;

  if (!textToNumberTransform || !text) {
    // Handle error or return the input text as is
    return text;
  }

  const numericText = text
    .toString()
    .split("") // Convert the input string to an array of characters
    .map((char: string) => {
      const index = textToNumberTransform.indexOf(char);
      // If the character is not found in textToNumberTransform, return it as is
      return index !== -1 ? index : char;
    }) // Map each character to its index in textToNumberTransform or keep it as is if not found
    .join("");

  return numericText;
};

export const formatNumberSplitterByComma = (text: string) => {
  const numericText = decodeNumber(text);
  const formatter = new Intl.NumberFormat("en-IN");
  const formattedNumber = formatter.format(Number(numericText));
  return formattedNumber.replace(/(\.00|(\.\d*?)0+)$/, "");
};

export const formattedNumberWithoutComma = (number: string) => {
  return number?.replace(/,/g, "");
};
