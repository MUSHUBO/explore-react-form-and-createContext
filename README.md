This Module 46:

* Controlled and Uncontrolled Components:

1. e. target.[name of the input field].value

2. use form action and formData in the action handler. formData.get('name of the input field')

3. controlled component. one per each field. use state on change of the field. useful to dynamically handle error 

3. handle all controlled field on one state object const [formData, setFormData] = useState({
    name: '';
    password: '';
    phone: '';
})

4. uncontrolled using useRef

5. Hook form 


# Create Context

1. create a context using createContext with a default value make sure you export the context to be used in other files.