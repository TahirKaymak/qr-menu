

const Signin = () => {
    return (
        <div>
            <section className="section">
                <div className="signup-container">
                    <h2 className="heading">Sign In</h2>
                    <p className="text-mute">Enter your email and password to sign in!</p>
                    <div className="signin-wrapper">
                        <a href="#" class="btn-google">
                            Sign in with Google
                        </a>
                        <div class="line-breaker">
                            <span class="line"></span>
                            <span>or</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <label for="Email">Email</label>
                    <input type="text" placeholder="mail@simmmple.com" id="username" />
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" />
                    <label for="checkbox" class="checkbox-label">Checkbox</label>
                    <div className="checkbox">
                        <input id="checkbox" name="checkbox" type="checkbox" class="checkbox"></input>
                    </div>
                </div>

                <div className="image">
                </div>
            </section>
        </div>
    )
}
export default Signin;