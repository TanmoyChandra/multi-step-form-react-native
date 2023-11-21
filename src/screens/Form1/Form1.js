import React from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { Formik } from "formik";
import { connect } from "react-redux";
import styles from "./Styles.js";
import { form_1_validations } from "../../utils/validations";
import { updateForm1Data } from "../../redux/action/formActions";

const Form1 = ({ navigation, form1Data, updateForm1 }) => {
  const handleSave = (values) => {
    // Update Redux store
    updateForm1(values); 
  };

  const handleSaveAndNext = (values) => {
    handleSave(values);
    // Navigate to Form2
    navigation.navigate("Form2"); 
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={form1Data}
        validationSchema={form_1_validations}
        onSubmit={handleSaveAndNext}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <TextInput
              label="Email ID*"
              value={values.emailId}
              onChangeText={handleChange("emailId")}
              onBlur={handleBlur("emailId")}
              style={styles.input}
              mode="outlined"
            />
            {touched.emailId && errors.emailId ? (
              <HelperText type="error">{errors.emailId}</HelperText>
            ) : null}

            <TextInput
              label="Password*"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
              style={styles.input}
              mode="outlined"
            />
            {touched.password && errors.password ? (
              <HelperText type="error">{errors.password}</HelperText>
            ) : null}

            <Button mode="outlined" disabled={true} style={styles.button}>
              Back
            </Button>

            <Button
              mode="contained"
              onPress={() => {
                handleSave(values);
                handleChange("password");
                handleChange("emailId");
              }}
              style={styles.button}
            >
              Save
            </Button>

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}

            >
              Save and Next
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

const mapStateToProps = (state) => ({
  form1Data: state.form.form1,
});

const mapDispatchToProps = (dispatch) => ({
  updateForm1: (data) => dispatch(updateForm1Data(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form1);
