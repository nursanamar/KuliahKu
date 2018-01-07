function getSession(){
    // return await AsnycStorage.getItem('user')
}

export function isLogin(){
    try {
        AsnycStorage.getItem('user')
        return true
    } catch (error) {
        return false
    }
}