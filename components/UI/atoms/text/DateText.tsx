import styled from 'styled-components';

const DateText = ({ dateText }: { dateText: string }) => {
  return <TimeTextWrapper>{dateText}</TimeTextWrapper>;
};

const TimeTextWrapper = styled.time`
  color: #718093;
`;

export default DateText;
