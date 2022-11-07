/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import NoteItem from "@components/molecules/NoteItem";
import CommonButton from "@components/molecules/CommonButton";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type WelcomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function WelcomePage(props: WelcomePageProps): JSX.Element {
  const navigateService = useNavigateService();

  const handleOnPressCommonButton6 = async () => {
    try {
      navigateService.navigate("/signup");
    } catch (e: unknown) {}
  };
  const handleText7 = async () => {
    try {
      navigateService.navigate("/login");
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container7}>
        <Background className={styles.background2} />
        <Box className={styles.box_4} />
        <NoteItem className={styles.noteitem_1} />
        <Box className={styles.box_5} />
        <Box className={styles.wrapper7}>
          <Text className={styles.text4} textType={"Text"}>
            Awesome Note
          </Text>
          <Box className={styles.card7}>
            <Text className={styles.text6} textType={"Text"}>
              Welcome to our take note application
            </Text>
            <CommonButton
              className={styles.common_button6}
              label={"Sign up"}
              onPress={handleOnPressCommonButton6}
            />
            <Text
              className={styles.text7}
              textType={"Text"}
              onClick={handleText7}
            >
              Already a member? Log in
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default WelcomePage;
