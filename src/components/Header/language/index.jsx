import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Box, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { LangIcon } from "@/icons/language-icon";
import { UzbFlag } from "@/icons/language-icon2";
import { UsaFlag } from "@/icons/language-icon copy";

const languages = [
  { code: "en", label: "English", flag:<UsaFlag   /> },
  { code: "ru", label: "Русский", flag:   <LangIcon />},
  { code: "uz", label: "O'zbekcha", flag:  <UzbFlag />},
];

const LanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[1]); // по умолчанию Русский

  const toggleOpen = () => setOpen((prev) => !prev);
  const selectLang = (lang) => {
    setCurrent(lang);
    setOpen(false);
  };

  return (
    <Box className={styles.language}>
      <Box className={styles.language_current} onClick={toggleOpen}>
        <span className={styles.flag}>{current.flag}</span>
        <Text fontSize={12}>{current.label}</Text>
        {open ? <ChevronUpIcon boxSize={4} /> : <ChevronDownIcon boxSize={4} />}
      </Box>

      {open && (
        <Box className={styles.language_list}>
          {languages.map((lang) => (
            <Box
              key={lang.code}
              className={`${styles.language_item} ${
                lang.code === current.code ? styles.active : ""
              }`}
              onClick={() => selectLang(lang)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <Text fontSize={12}>{lang.label}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LanguageSelect;
