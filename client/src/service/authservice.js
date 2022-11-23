export class AuthService {
  constructor(http) {
    this.http = http;
  }

  signIn(userInfo) {
    this.http.fetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@google.com', password: 'abcd123!' }),
    });
  }

  async signUp(userInfo) {
    return await this.http.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@google.com',
        password: 'abcd123!',
        confirmPassword: 'abcd123!',
        username: 'tester',
      }),
    });
  }

  me() {
    this.http.fetch('/auth/me', {
      method: 'GET',
    });
  }

  logout() {}
}
