import { UPDATE_FORM1_DATA, UPDATE_FORM2_DATA, UPDATE_FORM3_DATA } from '../action/formActions';

const initialState = {
  form1: { emailId: '', password: '' },
  form2: { firstName: '', lastName: '', address: '' },
  form3: { countryCode: '', phoneNumber: '', acceptTermsAndCondition: false },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM1_DATA:
      return { ...state, form1: { ...state.form1, ...action.payload } };
    case UPDATE_FORM2_DATA:
      return { ...state, form2: { ...state.form2, ...action.payload } };
    case UPDATE_FORM3_DATA:
      return { ...state, form3: { ...state.form3, ...action.payload } };
    default:
      return state;
  }
};

export default formReducer;
