import React from "react"
import Head from "@/components/head"
import LoginForm from "@/components/login-form"

export default function Login() {
    return (
        <React.Fragment>
            <title>Login Page</title>
            <div>
                <body>
                <Head />
                <LoginForm />
                </body>
            </div>
        </React.Fragment>
    )
}