import { toDate } from "./../../../../utils";
import { Weather } from "./../../../../types";
import styled from "styled-components";

const StyledCurrent = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(107, 189, 244, 0.85),
      rgba(81, 112, 235, 0.7)
    ),
    linear-gradient(to bottom, rgb(105, 182, 244), rgb(79, 109, 229));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  border-bottom-left-radius: 10vw 12vw;
  border-bottom-right-radius: 10vw 12vw;
  color: #ffffff;
  padding: 40px 20px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
    right: 0;
    bottom: 0;
  }
  &::before {
    width: 97%;
    z-index: -1;
    background-color: #354b97;
    transform: translate(-50%, 1.3vh);
    border-radius: inherit;
    opacity: 0.9;
  }
  &::after {
    width: 94%;
    z-index: -2;
    background-color: #222f5f;
    transform: translate(-50%, 2.5vh);
    border-radius: inherit;
    opacity: 0.65;
  }
`;

const StyledDate = styled.p`
  color: inherit;
  font-weight: 400;
  text-align: center;
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 0;
`;

const StyledLocation = styled.p`
  color: inherit;
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  opacity: 0.9;
  margin-top: 4px;
  margin-bottom: 42px;
  letter-spacing: 1px;
`;

const StyledPicture = styled.img`
  max-width: 400px;
  width: 40vw;
  height: auto;
  margin: 0 auto 30px auto;
  display: block;
`;

const StyledDescription = styled.span`
  color: inherit;
  font-weight: 400;
  text-align: center;
  font-size: 1.2rem;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledTemperature = styled.span`
  color: rgb(225, 225, 225);
  font-weight: 800;
  text-align: center;
  font-size: 6rem;
  width: fit-content;
  margin-bottom: 30px;
  background-image: linear-gradient(
    180deg,
    rgb(255, 255, 255) 25%,
    rgba(205, 205, 205, 0.55)
  );
  background-size: 100%;
  background-repeat: repeat;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  opacity: 0.9;
  line-height: 1.2;
`;

const StyledMetrics = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: rgb(44, 68, 118);
  border-radius: 20px;
  padding: 20px;
  & > * {
    display: flex;
    flex-direction: column;
  }
`;

const StyledMetric = styled.li`
  position: relative;
  padding: 0 16px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child)::after {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      180deg,
      transparent,
      transparent 50%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.25) 100%
    );
    background-size: 100% 8px;
  }
`;

const StyledMetricTitle = styled.span`
  list-style-type: none;
  font-size: 0.9rem;
  opacity: 0.8;
  font-weight: 200;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledMetricPicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  margin: 5px 0;
`;

const StyledMetricValue = styled.span``;

export function Current({ weather }: { weather: Weather }) {
  console.log({ weather });

  return (
    <StyledCurrent>
      <StyledDate>{toDate(weather.timestamp, "dd MMMM yyyy")}</StyledDate>
      <StyledLocation>{weather?.city ?? weather.timezone}</StyledLocation>
      <StyledPicture
        src="https://image.flaticon.com/icons/png/512/3222/3222800.png"
        alt="current weather"
      />
      <StyledDescription>{weather.description}</StyledDescription>
      <StyledTemperature>{Math.round(weather.temp)}°</StyledTemperature>
      <StyledMetrics>
        {["wind", "humidity", "feeling"].map((metric) => {
          return (
            <StyledMetric key={metric}>
              <StyledMetricTitle>{metric}</StyledMetricTitle>
              <StyledMetricPicture></StyledMetricPicture>
              <StyledMetricValue>
                {weather[metric as keyof Weather]}
              </StyledMetricValue>
            </StyledMetric>
          );
        })}
      </StyledMetrics>
    </StyledCurrent>
  );
}
