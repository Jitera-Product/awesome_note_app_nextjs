/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type CommonButtonMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  label?: string;
  onPress?: () => any;
};
function CommonButtonMolecule(props: CommonButtonMoleculeProps): JSX.Element {
  const handleBox1 = async () => {
    try {
      const { onPress } = props;
      return onPress && onPress();
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.box_1} onClick={handleBox1}>
        <Text className={styles.text14} textType={"Text"}>
          {get(props, "label")}
        </Text>
      </Box>
    </Box>
  );
}
export default CommonButtonMolecule;
