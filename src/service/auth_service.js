import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    logout() {
        firebaseAuth.signOut();
    }

    //사용자가 로그인이 관찰되면 사용자에대한 정보를 가져온다
    //콜백함수등록해주기
    onAuthChange(onUserChange) {
        firebaseAuth.onAuthStateChanged((user) => {
            //로그인이 감지되면 이벤트 발생했을떄 콜백함수 작동
            //사용자값을 가진 콜밸 함수 등록
            onUserChange(user);
        });
    }

    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider ${providerName}`);
        }
    }
}
export default AuthService;
