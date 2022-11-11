import { ChangeEvent, useState } from "react";
import { StyledRegisterVideo } from "./styles";

type Values = {
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
        }),
        getVideoId: () => values.url.match(/^https:\/\/www\.youtube\.com\/watch\?v=(?<id>.{11})$/)?.groups["id"]
    };
}

export default function RegisterVideo() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const form = useForm({
        title: "",
        url: ""
    });

    const videoId = form.getVideoId();

    return (
        <StyledRegisterVideo>
            <button onClick={() => setIsFormVisible(true)} className="add-video">+</button>
            {isFormVisible
                ? (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        form.clear();
                        setIsFormVisible(false);
                    }}>
                        <div>
                            <button type="button" onClick={() => setIsFormVisible(false)} className="close-modal">X</button>
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
                            {videoId ? <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} /> : <></>}
                        </div>
                    </form>
                )
                : <></>}
        </StyledRegisterVideo>
    );
};