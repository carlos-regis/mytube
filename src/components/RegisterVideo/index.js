import React from "react";
import { StyledRegisterVideo } from "./styles"

// Custom Hook
function useForm(formProps) {
    const [values, setValues] = React.useState(formProps.initialValues);
    return {
        values,
        handleChange: (event) => {
            setValues({
                ...values,
                [event.target.name]: event.target.value
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const registerForm = useForm({
        initialValues: { title: "Frost Punk", url: "https://www.youtube.com/" }
    });
    const [visibleForm, setVisibleFrom] = React.useState(true);

    return (
        <StyledRegisterVideo>
            <button
                className="add-video"
                onClick={() => setVisibleFrom(true)}>+</button>
            {visibleForm && (
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setVisibleFrom(false);
                    registerForm.clearForm();
                }}>
                    <div>
                        <button
                            type="button"
                            className="close-modal"
                            onClick={() => setVisibleFrom(false)} >X</button>
                        <input
                            placeholder="Title"
                            name="title"
                            value={registerForm.values.title}
                            onChange={registerForm.handleChange}
                        />
                        <input
                            placeholder="Url"
                            name="url"
                            value={registerForm.values.url}
                            onChange={registerForm.handleChange}
                        />
                        <button type="submit">
                            Register
                        </button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )
}
