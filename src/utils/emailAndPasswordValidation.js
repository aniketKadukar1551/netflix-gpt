export const emailAndPasswordValidation = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)

    if(!isEmailValid) return "Email is invalid"
    if(!isPasswordValid) return "Password is invalid"

    return null
}
