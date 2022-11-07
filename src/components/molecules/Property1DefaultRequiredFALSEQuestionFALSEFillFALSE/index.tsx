/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type Property1DefaultRequiredFALSEQuestionFALSEFillFALSEMoleculeProps =
  DefaultPageProps & {
    pageName?: string;
    className?: string;
    responsiveVisibility?: string[];
  };
function Property1DefaultRequiredFALSEQuestionFALSEFillFALSEMolecule(
  props: Property1DefaultRequiredFALSEQuestionFALSEFillFALSEMoleculeProps
): JSX.Element {
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.text_field_title15}>
        <Text className={styles.text15} textType={"Text"}>
          Email
        </Text>
      </Box>
      <Box className={styles.assets17}>
        <Text className={styles.text17} textType={"Text"}>
          test@gmail.com
        </Text>
      </Box>
    </Box>
  );
}
export default Property1DefaultRequiredFALSEQuestionFALSEFillFALSEMolecule;
