import styled from "styled-components";
import { Favorite } from "../types";

const StyledFavorites = styled.div`
    padding: 16px 32px;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    h2 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 16px;
    }
    div {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 8px;
        overflow-x: scroll;
        a {
            display: grid;
            span {
                margin-top: 8px;
                text-align: center;
            }
        }
    }
`;

export default function Favorites({ favorites }: { favorites: Favorite[] }) {
    return (
        <StyledFavorites>
            <section>
                <h2>Favorite AluraTubes</h2>
                <div>
                    {favorites.map((favorite, i) => {
                        return (
                            <a key={`f${i}`} href={`https://github.com/${favorite.github}`}>
                                <img src={`https://github.com/${favorite.github}.png`} />
                                <span>@{favorite.github}</span>
                            </a>
                        );
                    })}
                </div>
            </section>
        </StyledFavorites>
    );
}