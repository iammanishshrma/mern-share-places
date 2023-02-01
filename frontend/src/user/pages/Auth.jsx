import React, { useState, useContext } from 'react';

import Input from 'src/shared/components/FormElements/Input';
import Button from 'src/shared/components/FormElements/Button';
import Card from 'src/shared/components/UIElements/Card';
import { useForm } from 'src/shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from 'src/shared/utils/validators';
import { AuthContext } from 'src/shared/context/auth-context';
import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    };

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false,
                    },
                },
                false
            );
        }
        setIsLoginMode((prevMode) => !prevMode);
    };

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form>
                {!isLoginMode && (
                    <Input
                        id="name"
                        element="input"
                        type="text"
                        label="Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name"
                        onInput={inputHandler}
                    />
                )}
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="E-mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email"
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password (min 5 characters required)"
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid} onClick={authSubmitHandler}>
                    {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>
                SWITCH TO {!isLoginMode ? 'LOGIN' : 'SIGNUP'}
            </Button>
        </Card>
    );
};

export default Auth;
