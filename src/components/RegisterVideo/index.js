import React from "react";
import config from "../../../config.json";
import { StyledRegisterVideo } from "./styles"
import { createClient } from '@supabase/supabase-js'

function getYouTubeThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

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

// Create a single supabase client for interacting with your database
const supabase = createClient(config.supabase.url, config.supabase.api_key);

export default function RegisterVideo() {
    const registerForm = useForm({
        initialValues: { title: "Angular", url: "https://www.youtube.com/watch?v=Yf0rC7dERjg" }
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

                    supabase.from("video").insert({
                        title: registerForm.values.title,
                        url: registerForm.values.url,
                        thumbnail: getYouTubeThumbnail(registerForm.values.url),
                        playlist: "games"
                    })
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((error) => {
                        console.log(error);
                    })

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
