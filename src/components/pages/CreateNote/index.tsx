/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Iconssafarichevronbackward from "@components/molecules/Iconssafarichevronbackward";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonButton from "@components/molecules/CommonButton";
import { useNavigateService } from "@services/navigate";
import { useNoteService } from "@services/note";
import { useAuthenticationService } from "@services/authentication";
import {
  Page,
  Box,
  Text,
  Row,
  Col,
  Input,
  Toast,
} from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type CreateNotePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form1FormData {
  content_input: string;
}
function CreateNotePage(props: CreateNotePageProps): JSX.Element {
  const navigateService = useNavigateService();
  const noteService = useNoteService();
  const authenticationService = useAuthenticationService();
  const authenticatedDataValue =
    authenticationService.useAuthenticatedData("authenticatedData");
  const validationForm1Schema = useMemo(
    () =>
      yup.object().shape({
        content_input: yup
          .string()
          .required("content_input is a required field"),
      }),
    []
  );
  const formForm1 = useForm<Form1FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: yupResolver(validationForm1Schema),
    shouldFocusError: true,
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors: formForm1Errors } = formForm1.formState;

  const handleInfoHeader5 = async () => {
    try {
      navigateService.goBack();
    } catch (e: unknown) {}
  };
  const handleOnPressCommonButton8 = async (values?: Form1FormData) => {
    try {
      const responsePostApiNotes = await noteService.postApiNotes.fetch({
        notes: {
          content: get(values, "content_input", ""),
          user_id: get(authenticatedDataValue, "id"),
        },
      });
      navigateService.goBack();
    } catch (e: unknown) {
      Toast.error("Create note failed");
    }
  };
  return (
    <Page className={styles.page_container}>
      <Background className={styles.background1} />
      <Box className={styles.container8}>
        <Box className={styles.wrapper8}>
          <Box className={styles.info_header5} onClick={handleInfoHeader5}>
            <Iconssafarichevronbackward
              className={styles.iconssafarichevronbackward4}
            />
            <Text className={styles.text5} textType={"Text"}>
              Back
            </Text>
          </Box>
          <Box className={styles.card8}>
            <Text className={styles.text7} textType={"Text"}>
              Create note
            </Text>
            <Row
              align={"middle"}
              gutter={[0, 32]}
              justify={"center"}
              className={styles.form_1_container}
            >
              <Col
                md={Number(24)}
                className={styles.form_1_inner}
                xl={Number(24)}
                xs={Number(24)}
              >
                <Box className={styles.form_1}>
                  <Box className={styles.input_2_container}>
                    <Box className={styles.input_2_inner}>
                      <Text className={styles.input_2_label} textType={"Text"}>
                        Content
                      </Text>
                      <Text
                        className={styles.input_2_required}
                        textType={"Text"}
                      >
                        *
                      </Text>
                    </Box>
                    <Controller
                      control={formForm1.control}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { isTouched, error },
                      }: any) => {
                        return (
                          <Input
                            inputStyle={styles.content_input_input}
                            placeholder={"Please input content"}
                            className={styles.content_input}
                            onChange={onChange}
                            value={value}
                          />
                        );
                      }}
                      name="content_input"
                    />
                    <Box className={styles.input_2_error_message_container}>
                      <Text
                        className={styles.input_2_error_message_text}
                        textType={"Text"}
                      >
                        {get(formForm1Errors, "content_input.message")}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Col>
            </Row>
            <CommonButton
              className={styles.common_button8}
              label={"Create note"}
              onPress={formForm1.handleSubmit(handleOnPressCommonButton8)}
            />
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default CreateNotePage;
