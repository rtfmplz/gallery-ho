# gallery-ho

## 소개

* firebase, react 기반 SPA
* firebase storage, firestore, hosting 을 이용

## serve or deploy 전에..

### npm install

```bash
npm install
```

### 환경 변수 설정

Firebase Project > Web app > setting 의 Firebase SDK snippet에서 웹 API 키 등을 확인 후 환경변수로 만든다.  
본 프로젝트에서는 dotenv를 사용하고 있으므로 프로젝트 최상위 경로에 `.env` 파일을 아래와 같은 형식으로 만든다.

```bash
REACT_APP_API_KEY = "asdf123asdf123asdf123"
REACT_APP_AUTH_DOMAIN = "your-webapp.firebaseapp.com"
REACT_APP_DATABASE_URL = "https://your-webapp.firebaseio.com"
REACT_APP_PROJECT_ID = "your-webapp"
REACT_APP_STORAGE_BUCKET = "your-webapp.appspot.com"
REACT_APP_MESSAGING_SENDER_ID = "1234567890"
REACT_APP_ID = "1:123456789:web:asdf123asdf123asdf123"
```

## local serve

```bash
npm run serve
```

## deploy to firebase

```bash
npm run deploy
```
