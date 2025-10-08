// Louvado seja o Senhor

export class SistemaAuth{
    static login(userAuth, senha){
        if(SistemaAuth.isAutenticavel(userAuth)){
            return userAuth.auth(senha);
        }

        return false;
    }

    static isAutenticavel(userAuth){
        return "auth" in userAuth &&
            userAuth.auth instanceof Function;
    }
}