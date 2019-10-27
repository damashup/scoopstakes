

export function* retrieveSignInMethods(){
    try {

    }catch(error) {
        yield put(retrieveSignInMethodsFailure(error));
    }
}