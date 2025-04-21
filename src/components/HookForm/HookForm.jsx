import React from 'react';
import useInputField from '../../hooks/UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const [password, passwordOnchange] = useInputField('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit here', name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} placeholder='name'/>
                <br />
                <input type="email" name="" onChange={emailOnChange} defaultValue={email} placeholder='email'/>
                <br />
                <input type="password" name="" onChange={passwordOnchange} defaultValue={password} placeholder='password'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;