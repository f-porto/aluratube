import styled from "styled-components";
import { Playlists } from "../../types";

/**
 * flex:
 *    flex: 1; //
 * width:
 *    width: 100%; //
 * padding:
 *    padding: 16px; //
 *    padding: 0; //
 * overflow:
 *    overflow: hidden; //
 * font-size:
 *    font-size: 16px; //
 * margin-bottom:
 *    margin-bottom: 16px; //
 * text-transform:
 *    text-transform: capitalize; //
 * aspect-ratio:
 *    aspect-ratio: 16/9; //
 * font-weight:
 *    font-weight: 500; //
 * object-fit:
 *    object-fit: cover; //
 * max-width:
 *    max-width: 210px; //
 * height:
 *    height: auto; //
 * display:
 *    display: grid; //
 *    display: box; //
 * grid-gap:
 *    grid-gap: 16px; //
 * grid-template-columns:
 *    grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); //
 * grid-auto-flow:
 *    grid-auto-flow: column; //
 * grid-auto-columns:
 *    grid-auto-columns: minmax(200px,1fr); //
 * overflow-x:
 *    overflow-x: scroll; //
 * scroll-snap-type:
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
    padding: 0;
    overflow: hidden;
    padding: 16px;
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
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export default function Timeline({ playlists, children }: { playlists: Playlists, children?: any }) {
  return (
      <StyledTimeline>
          {Object.entries(playlists)
              .map((pair) => {
                  const [name, videos] = pair;
                  return (
                      <section>
                          <h2>{name}</h2>
                          <div>
                              {videos.map((video) => {
                                  return (
                                      <a href={video.url}>
                                          <img src={video.thumb} />
                                          <span>{video.title}</span>
                                      </a>
                                  );
                              })}
                          </div>
                      </section>
                  );
              })}
      </StyledTimeline>
  );
}