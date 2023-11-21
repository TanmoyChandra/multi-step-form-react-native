import React from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { Formik } from "formik";
import { connect } from "react-redux";
import { updateForm2Data } from "../../redux/action/formActions";
import { form_2_validations } from "../../utils/validations";
import styles from "./Styles.js";

const Form2 = ({ navigation, form2Data, updateForm2 }) => {
  
  const handleSave = (values) => {
    // Update Redux store
    updateForm2(values); 
  };

  const handleSaveAndNext = (values) => {
    handleSave(values);
    navigation.navigate("Form3");
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={form2Data}
        validationSchema={form_2_validations}
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
              label="First Name*"
              value={values.firstName}
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              style={styles.input}
              mode="outlined"
            />
            {touched.firstName && errors.firstName ? (
              <HelperText type="error">{errors.firstName}</HelperText>
            ) : null}

            <TextInput
              label="Last Name (Optional)"
              value={values.lastName}
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              style={styles.input}
              mode="outlined"
            />
            {touched.lastName && errors.lastName ? (
              <HelperText type="error">{errors.lastName}</HelperText>
            ) : null}

            <TextInput
              label="Address*"
              value={values.address}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              style={styles.input}
              mode="outlined"
            />
            {touched.address && errors.address ? (
              <HelperText type="error">{errors.address}</HelperText>
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
              onPress={() => handleSave(values)}
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
  form2Data: state.form.form2,
});

const mapDispatchToProps = (dispatch) => ({
  updateForm2: (data) => dispatch(updateForm2Data(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form2);
