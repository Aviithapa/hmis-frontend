"use client";

import { useTranslation } from "react-i18next";

const translationText = (namespace: string, text: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(["general"]);
  const translation = `${namespace}:${text}`;
  return t(translation);
};

export default translationText;
