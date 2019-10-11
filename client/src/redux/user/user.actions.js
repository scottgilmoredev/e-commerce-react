import UserActionTypes from './user.types';

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const emailSignInStart = emailAndPassword => ({
    payload: emailAndPassword,
    type: UserActionTypes.EMAIL_SIGN_IN_START,
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInFailure = error => ({
    payload: error,
    type: UserActionTypes.SIGN_IN_FAILURE,
});

export const signInSuccess = user => ({
    payload: user,
    type: UserActionTypes.SIGN_IN_SUCCESS,
});

export const signOutFailure = error => ({
    payload: error,
    type: UserActionTypes.SIGN_OUT_FAILURE,
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signUpFailure = error => ({
    payload: error,
    type: UserActionTypes.SIGN_UP_FAILURE,
});

export const signUpStart = userCredentials => ({
    payload: userCredentials,
    type: UserActionTypes.SIGN_UP_START,
});

export const signUpSuccess = ({ user, additionalData }) => ({
    payload: { user, additionalData },
    type: UserActionTypes.SIGN_UP_SUCCESS,
});
