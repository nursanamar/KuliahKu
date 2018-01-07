export function setSession(user,callback){
    AsyncStroage.setItem('user',user).fetch(callback);
}