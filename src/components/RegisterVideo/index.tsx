import { ChangeEvent, useState } from "react";
import { StyledRegisterVideo } from "./styles";

interface Values {
    title: string
    url: string
}

function useForm(initialState: Values) {
    const [values, setValues] = useState<Values>(initialState);

    return {
        values,
        handleOnChange: (event: ChangeEvent<HTMLInputElement>) => {
            const { value, name } = event.target
            setValues({
                ...values,
                [name]: value
            })
        },
        clear: () => setValues({
            title: "",
            url: ""
        })
    };
}

export default function RegisterVideo() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const form = useForm({
        title: "",
        url: ""
    });

    return (
        <StyledRegisterVideo>
            <button type="button" onClick={() => setIsFormVisible(true)} className="add-video">+</button>
            {isFormVisible
                ? (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        form.clear();
                        setIsFormVisible(false);
                    }}>
                        <div>
                            <button onClick={() => setIsFormVisible(false)} className="close-modal">X</button>
                            <input
                                placeholder="Video Title"
                                name="title"
                                value={form.values.title}
                                onChange={form.handleOnChange}
                            />
                            <input
                                placeholder="Video URL"
                                name="url"
                                value={form.values.url}
                                onChange={form.handleOnChange}
                            />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )
                : <></>}
        </StyledRegisterVideo>
    );
};