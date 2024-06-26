"use client";
import { useTranslation } from "react-i18next";

interface TranslationTextProps {
  text: string;
  namespace: string;
}

const TranslationText = (Props: TranslationTextProps) => {
  const { namespace, text } = Props;
  const { t } = useTranslation(["general"]);
  const translation = `${namespace}:${text}`;
  return t(translation);
};

export default TranslationText;
