import React, { useState } from "react";
import { View, Modal, Text, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  HelperText,
  Checkbox,
  Menu,
} from "react-native-paper";
import { Formik } from "formik";
import { connect } from "react-redux";
import styles from "./Styles.js";
import { form_3_validations } from "../../utils/validations";
import { updateForm3Data } from "../../redux/action/formActions";
import countryOptions from "../../utils/countryOptions.js";

const Form3 = ({
  navigation,
  form1Data,
  form2Data,
  form3Data,
  updateForm3,
}) => {
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [submissionModalVisible, setSubmissionModalVisible] = useState(false);
  const [submissionData, setSubmissionData] = useState({});

  const handleSave = (values) => {
    const combinedData = {
      ...form1Data,
      ...form2Data,
      ...values,
    };

    // Exclude this field as it is not required in the final json
    delete combinedData.acceptTermsAndCondition;
    // Updating Redux store
    updateForm3(values);
    // Set the state for Submission Data
    setSubmissionData(combinedData);
    // Opening the Final Modal
    setSubmissionModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={form3Data}
        validationSchema={form_3_validations}
        onSubmit={(values) => {
          handleSave(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <>
            <View style={styles.row}>
              <Menu
                visible={countryModalVisible}
                onDismiss={() => setCountryModalVisible(false)}
                anchor={
                  <Button
                    mode="outlined"
                    onPress={() => setCountryModalVisible(true)}
                    style={styles.dropdownButton}
                  >
                    {values.countryCode || "Country Code*"}
                  </Button>
                }
              >
                {countryOptions.map((option) => (
                  <Menu.Item
                    key={option.value}
                    onPress={() => {
                      setFieldValue("countryCode", option.value);
                      setCountryModalVisible(false);
                    }}
                    title={option.label}
                  />
                ))}
              </Menu>

              <TextInput
                label="Phone Number*"
                value={values.phoneNumber}
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                keyboardType="phone-pad"
                style={[styles.input, styles.flexItem]}
                mode="outlined"
              />
            </View>
            <View style={styles.row}>
              {touched.phoneNumber && errors.phoneNumber ? (
                <HelperText type="error">{errors.phoneNumber}</HelperText>
              ) : null}
              {touched.countryCode && errors.countryCode ? (
                <HelperText type="error">{errors.countryCode}</HelperText>
              ) : null}
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
                status={
                  values.acceptTermsAndCondition ? "checked" : "unchecked"
                }
                onPress={() =>
                  setFieldValue(
                    "acceptTermsAndCondition",
                    !values.acceptTermsAndCondition
                  )
                }
              />
              <Text
                onPress={() =>
                  setFieldValue(
                    "acceptTermsAndCondition",
                    !values.acceptTermsAndCondition
                  )
                }
                style={styles.checkboxLabel}
              >
                Accept Terms and Conditions
              </Text>
            </View>
            {touched.acceptTermsAndCondition &&
            errors.acceptTermsAndCondition ? (
              <HelperText type="error">
                {errors.acceptTermsAndCondition}
              </HelperText>
            ) : null}

            <Button
              mode="outlined"
              onPress={() => navigation.goBack()}
              style={styles.button}
            >
              Back
            </Button>

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
            >
              Save
            </Button>

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
              disabled={true}
            >
              Save and Next
            </Button>
          </>
        )}
      </Formik>

      <Modal
        visible={submissionModalVisible}
        onRequestClose={() => setSubmissionModalVisible(false)}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.submissionText}>
                {JSON.stringify(submissionData, null, 2)}
              </Text>
              <Button
                mode="contained"
                onPress={() => setSubmissionModalVisible(false)}
              >
                Close
              </Button>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => ({
  form1Data: state.form.form1,
  form2Data: state.form.form2,
  form3Data: state.form.form3,
});

const mapDispatchToProps = (dispatch) => ({
  updateForm3: (data) => dispatch(updateForm3Data(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form3);
