/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Image from "next/future/image";
import assets from "@assets/index";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type NoteItemMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  content?: string;
  onPressDetail?: (id?: number) => any;
  id?: number;
};
function NoteItemMolecule(props: NoteItemMoleculeProps): JSX.Element {
  const handleBox2 = async () => {
    try {
      const { onPressDetail, id } = props;
      return onPressDetail && onPressDetail(id);
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.box_2} onClick={handleBox2}>
        <Box className={styles.wrapper_note110}>
          <Text className={styles.text10} textType={"Text"}>
            {get(props, "content")}
          </Text>
        </Box>
      </Box>
      <Image
        src={assets("1667466744306svg")}
        alt={""}
        className={styles.image12}
      />
    </Box>
  );
}
export default NoteItemMolecule;
