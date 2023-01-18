function useForm(initialValues) {
    const [values, setValues] = React.useState(initialValues);

    return [
        values,
        e => {
            if (e.type === 'change') {
                setValues({
                    ...values,
                    [e.target.name]: e.target.value
                })
            }
        }
    ];
}