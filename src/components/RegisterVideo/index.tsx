import { ChangeEvent, useEffect, useState } from "react";
import { PlaylistInfo, playlistsServices } from "../../services/playlistsService";
import { submitVideoService } from "../../services/submitVideoService";
import { StyledRegisterVideo } from "./styles";

type Values = {
    title: string
    url: string
    playlistId: number
}

function useForm(initialState: Values) {
    const [values, setValues] = useState<Values>(initialState);

    return {
        values,
        handleInputOnChange: (event: ChangeEvent<HTMLInputElement>) => {
            const { value, name } = event.target
            setValues({
                ...values,
                [name]: value
            })
        },
        handleSelectOnChange: (event: ChangeEvent<HTMLSelectElement>) => {
            setValues({
                ...values,
                playlistId: parseInt(event.target.value)
            })
        },
        clear: () => setValues({
            title: "",
            url: "",
            playlistId: 2
        }),
        getVideoId: () => values.url.match(/^https:\/\/www\.youtube\.com\/watch\?v=(?<id>.{11})$/)?.groups["id"]
    };
}

export default function RegisterVideo() {
    const submitServ = submitVideoService();
    const playlistsServ = playlistsServices();

    const [playlistsInfo, setPlaylistsInfo] = useState<PlaylistInfo[]>([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const form = useForm({
        title: "",
        url: "",
        playlistId: 2
    });

    const videoId = form.getVideoId();
    const thumb = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

    useEffect(() => {
        playlistsServ.getAllPlaylistInfo()
            .then(
                values => setPlaylistsInfo(values),
                reason => console.log("[REJECTED]", reason)
            )
    }, []);

    return (
        <StyledRegisterVideo>
            <button onClick={() => setIsFormVisible(true)} className="add-video">+</button>
            {isFormVisible
                ? (
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        const { title, url, playlistId } = form.values
                        submitServ.submitVideo({
                            title: title,
                            url: url,
                            thumb: thumb,
                            playlistId: playlistId
                        });

                        form.clear();
                        setIsFormVisible(false);
                    }}>
                        <div>
                            <button type="button" onClick={() => setIsFormVisible(false)} className="close-modal">X</button>
                            <input
                                placeholder="Video Title"
                                name="title"
                                value={form.values.title}
                                onChange={form.handleInputOnChange}
                            />
                            <input
                                placeholder="Video URL"
                                name="url"
                                value={form.values.url}
                                onChange={form.handleInputOnChange}
                            />
                            <select onChange={form.handleSelectOnChange}>
                                {playlistsInfo.map(({ name, id }, i) => <option value={id} key={`o${i}`}>{name}</option>)}
                            </select>
                            <button type="submit">Submit</button>
                            {thumb ? <img src={thumb} /> : <></>}
                        </div>
                    </form>
                )
                : <></>}
        </StyledRegisterVideo>
    );
};