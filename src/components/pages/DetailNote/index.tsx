/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Iconssafarichevronbackward from "@components/molecules/Iconssafarichevronbackward";
import CommonButton from "@components/molecules/CommonButton";
import { useNoteService } from "@services/note";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text, Toast } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type DetailNotePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function DetailNotePage(props: DetailNotePageProps): JSX.Element {
  const noteService = useNoteService();
  const getApiNotesIdInstance = noteService.useGetApiNotesId();
  const getApiNotesIdResult = getApiNotesIdInstance.useQuery({
    id: get(props, "query.noteId"),
  });
  const navigateService = useNavigateService();

  const handleBox2 = async () => {
    try {
      navigateService.goBack();
    } catch (e: unknown) {}
  };
  const handleOnPressCommonbutton1 = async () => {
    try {
      const responseDeleteApiNotesId = await noteService.deleteApiNotesId.fetch(
        {
          id: get(props, "query.noteId"),
        }
      );
      navigateService.goBack();
    } catch (e: unknown) {
      Toast.error("Delete note failed!");
    }
  };
  return (
    <Page className={styles.page_container}>
      <Background className={styles.background_1} />
      <Box className={styles.box_1}>
        <Box className={styles.box_0}>
          <Box className={styles.box_2} onClick={handleBox2}>
            <Iconssafarichevronbackward className={styles.molecule_0} />
            <Text className={styles.text_1} textType={"Text"}>
              Back
            </Text>
          </Box>
          <Box className={styles.box_3}>
            <Text className={styles.text_0} textType={"Text"}>
              Detail note
            </Text>
            <Box className={styles.box_5}>
              <Text className={styles.text_3} textType={"Text"}>
                {get(getApiNotesIdResult, "data.note.content")}
              </Text>
            </Box>
            <CommonButton
              className={styles.commonbutton_1}
              label={"Delete note"}
              onPress={handleOnPressCommonbutton1}
            />
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default DetailNotePage;
