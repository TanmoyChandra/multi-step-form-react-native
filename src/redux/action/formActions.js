// Action Types
export const UPDATE_FORM1_DATA = 'UPDATE_FORM1_DATA';
export const UPDATE_FORM2_DATA = 'UPDATE_FORM2_DATA';
export const UPDATE_FORM3_DATA = 'UPDATE_FORM3_DATA';

// Action Creators for form 1
export const updateForm1Data = (data) => ({
  type: UPDATE_FORM1_DATA,
  payload: data,
});

// Action Creators for form 2
export const updateForm2Data = (data) => ({
  type: UPDATE_FORM2_DATA,
  payload: data,
});

// Action Creators for form 3
export const updateForm3Data = (data) => ({
    type: UPDATE_FORM3_DATA,
    payload: data,
  });