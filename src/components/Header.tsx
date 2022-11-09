import styled from "styled-components";
import { Config, Theme } from "../types";

/**
 * width: sets element's width
 *      width: 80px; // 80 pixels of width
 * height: sets element's height
 *      height: 80px; // 80 pixels of height
 * border-radius: rounds the corners of an element
 *      border-radius: 50%; // radius has 50% of element's size
 * margin-top: sets the margin area on the top the element
 *      margin-top: 50px; // 50 pixels of distance from the above element
 * display: sets whether an element is treated as a block or inline element and the layout used for its children
 *      display: flex; // I assume it does magic and works
 * align-items: sets the alignment of each children element
 *      align-items: center; // Centers all the elements
 * padding: sets the padding area on all four sides of an element
 *      padding: 16px 32px; // 16 pixels top and bottom, 32 pixels right and left
 */
const StyledHeader = styled.div`
    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        div {
            margin-left: 10px;
        }
    }
    .banner {
        width: 100%;
        max-height: 230px;
        object-fit: cover;
        margin-top: 50px;
    }
    .text {
        color: ${({ theme }: { theme: Theme }) => theme.textColorBase }
    }
`;

export default function Header({ config }: { config: Config }) {
    return (
        <StyledHeader>
            <img className="banner" src={config.bannerUrl} />
            <section className="user-info">
                <img className="avatar" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2 className="text">{config.name}</h2>
                    <p className="text">{config.description}</p>
                </div>
            </section>
        </StyledHeader>
    );
}
