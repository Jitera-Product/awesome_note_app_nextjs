/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import NoteItem from "@components/molecules/NoteItem";
import { useAuthenticationService } from "@services/authentication";
import { useNoteService } from "@services/note";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text, List } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type HomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function HomePage(props: HomePageProps): JSX.Element {
  const authenticationService = useAuthenticationService();
  const authenticatedDataValue =
    authenticationService.useAuthenticatedData("authenticatedData");
  const noteService = useNoteService();
  const getApiNotesInstance = noteService.useGetApiNotes();
  const getApiNotesResult = getApiNotesInstance.useQuery({
    notes: { user_id: get(authenticatedDataValue, "id") },
  });
  const navigateService = useNavigateService();

  const handleText6 = async () => {
    try {
      navigateService.navigate("/createnote");
    } catch (e: unknown) {}
  };
  const handleOnPressDetailList1Item = async (noteId: number) => {
    console.log(">FUCK OFF");
    try {
      navigateService.navigate("/detail-note", { noteId });
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container6}>
        <Background className={styles.background2} />
        <Box className={styles.wrapper6}>
          <Box className={styles.header_wrapper6}>
            <Text className={styles.text5} textType={"Text"}>
              Awesome Note
            </Text>
            <Text
              className={styles.text6}
              textType={"Text"}
              onClick={handleText6}
            >
              Create note
            </Text>
          </Box>
          <List
            dataSource={get(getApiNotesResult, "data.notes")}
            rowKey={useCallback(
              (item: Record<string, any>) => `${item.id}_${item.created_at}`,
              []
            )}
            renderItem={useCallback((item: any) => {
              return (
                <NoteItem
                  content={get(item, "content")}
                  onPressDetail={() =>
                    handleOnPressDetailList1Item(get(item, "id"))
                  }
                  id={get(item, "id")}
                />
              );
            }, [])}
          />
        </Box>
      </Box>
    </Page>
  );
}
export default HomePage;
