import { useRouter } from "next/router";

export default function Video() {
    const { query: { id: id } } = useRouter();

    return (
        <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}