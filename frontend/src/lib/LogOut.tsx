import notify from "../component/notify/notify"
import IsLogin from "./IsLogin"

const LogOut = (router: any) => {
    if (IsLogin()){
        if (typeof window !== "undefined") {
            localStorage.removeItem("token")
            let msg = 'πλ‘κ·ΈμΈ μκ°μ΄ λ§λ£λμμ΅λλ€.'
            if (router.pathname !== "/") {
                router.push('/')
                msg += ' λ©μΈμΌλ‘ μ΄λν©λλ€.'
            } else {
                setTimeout(() => location.reload(), 1000) // 1μ΄ ν μλ‘κ³ μΉ¨(μλ‘κ³ μΉ¨:λ‘κ·Έμμ ν λ²νΌ μν toggle + 1μ΄ delay:tostify νμ)
            }
            notify('success', msg)
        }
    }
}

export default LogOut