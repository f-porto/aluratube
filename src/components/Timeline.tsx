import Link from "next/link";
import styled from "styled-components";
import { Playlists, Theme } from "../types";

/**
 * flex:
 *    flex: 1; //
 * width: sets element's width
 *    width: 100%; // The maximum
 * padding: sets the padding area on all four sides of an element
 *    padding: 16px; // 16 pixels on all sides
 *    padding: 0; // No padding
 * overflow: sets the desired behavior for an element's overflow
 *    overflow: hidden; // Hides what overflowed
 * font-size: sets the size of the font
 *    font-size: 16px; // Font size of 16 pixels
 * margin-bottom: sets the margin area on the bottom the element
 *    margin-bottom: 16px; // 16 pixels of distance from the below element
 * text-transform: Apply a transformation on the text
 *    text-transform: capitalize; // Capitalize all thw words
 * aspect-ratio: sets a preferred aspect ratio for the box
 *    aspect-ratio: 16/9; //
 * font-weight: sets the weight (or boldness) of the font
 *    font-weight: 500; //
 * object-fit: sets how the content of a replaced element should be resized to fit its container
 *    object-fit: cover; // Makes the element cover all the area, chopping it if necessary
 * max-width: sets the maximum width of an element
 *    max-width: 210px; // The element is not going to be wider than 210 pixels
 * height: sets element's height
 *    height: auto; // The browser decides the height
 * display: sets whether an element is treated as a block or inline element and the layout used for its children
 *    display: grid; // The element behaves like a block element and lays out its content according to the grid model
 *    display: box; // The element generates a block element box, generating line breaks both before and after the element when in the normal flow
 * grid-gap:
 *    grid-gap: 16px; //
 * grid-template-columns: defines the line names and track sizing functions of the grid columns
 *    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //
 * grid-auto-flow: controls how the auto-placement algorithm works
 *    grid-auto-flow: column; // Items are placed by filling each column in turn
 * grid-auto-columns: specifies the size of an implicitly-created grid column track or pattern of tracks
 *    grid-auto-columns: minmax(200px, 1fr); //
 * overflow-x:
 *    overflow-x: scroll; //
 * scroll-snap-type: sets how strictly snap points are enforced on the scroll container in case there is one
 *    scroll-snap-type: x mandatory; //
 * scroll-snap-align:
 *    scroll-snap-align: start; //
 * padding-top:
 *    padding-top: 8px; //
 * padding-right:
 *    padding-right: 24px; //
 * color:
 *    color: #0000FF; //
 */
const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    background-color: ${({ theme }: { theme: Theme }) => theme.backgroundBase};
    h2 {
    	font-size: 16px;
    	margin-bottom: 16px;
    	text-transform: capitalize;
    }
    img {
    	aspect-ratio: 16/9;
    	font-weight: 500;
    	object-fit: cover;
    	width: 100%;
    	max-width: 210px;
    	height: auto;
    }
    section {
    	width: 100%;
    	overflow: hidden;
    	padding: 16px;
    	h2 {
    		color: ${({ theme }) => theme.textColorBase};
    	}
    	div {
    		width: calc(100vw - 16px * 4);
    		display: grid;
    		grid-gap: 16px;
    		grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    		grid-auto-flow: column;
    		grid-auto-columns: minmax(200px,1fr);
    		overflow-x: scroll;
    		scroll-snap-type: x mandatory;
    		a {
    			scroll-snap-align: start;
    			span {
    				padding-top: 8px;
    				display: block;
    				padding-right: 24px;
    				color: ${({ theme }: { theme: Theme }) => theme.textColorBase};
    			}
    		}
    	}
    }
`;

export default function Timeline({ playlists, searchedValue }: { playlists: Playlists, searchedValue: string }) {
    return (
        <StyledTimeline>
            {Object.entries(playlists)
                .map((pair, i) => {
                    const [name, videos] = pair;
                    return (
                        <section key={`pl${i}`}>
                            <h2>{name}</h2>
                            <div>
                                {videos
                                    .filter(video => video.title.toLowerCase().includes(searchedValue.toLocaleLowerCase()))
                                    .map((video, j) => {
                                        const videoId = video.url.split('=')[1];
                                        return (
                                            <Link key={`v${j}`} href={{
                                                pathname: "/video",
                                                query: { id: videoId }
                                            }}>
                                                <img src={video.thumb} />
                                                <span>{video.title}</span>
                                            </Link>
                                        );
                                    })}
                            </div>
                        </section>
                    );
                })}
        </StyledTimeline>
    );
}