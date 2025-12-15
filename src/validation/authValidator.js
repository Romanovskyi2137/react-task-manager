
export const AUTH_CONFIG = {
    PWD_MIN_LENGTH: 6,
    PWD_MAX_LENGTH: 12,
    NAME_MAX_LENGTH: 16
}

function authValidator (username, password) { // both args are strings
    const cleanName = username.trim();
    const nameLength = cleanName.length;
    const pwdLength = password.length;
    const {
        PWD_MIN_LENGTH, 
        PWD_MAX_LENGTH, 
        NAME_MAX_LENGTH
    } = AUTH_CONFIG;
    if ( !nameLength || !pwdLength ) {
        throw new Error("pls fill username and password fields")
    }
    if ( nameLength > NAME_MAX_LENGTH ) {
        throw new Error(`username must be up to ${NAME_MAX_LENGTH} characters`)
    }
    if ( pwdLength < PWD_MIN_LENGTH || pwdLength > PWD_MAX_LENGTH ) {
        throw new Error(`password must be between ${PWD_MIN_LENGTH} and ${PWD_MAX_LENGTH} characters`)
    }
    return true
}