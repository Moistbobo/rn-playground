import React from 'react';
import GKText from 'components/GK/GKText';
import dayjs from 'dayjs';
import Spacer from 'components/Spacer';

interface Props {
  /**
   * The date string.
   */
  date: string;

  /**
   * Second line of text rendered under the date.
   */
  line2: string;
}

/**
 * A component that renders a date and a line of text under it
 */
const GKListSummary = ({date, line2}: Props) => {
  return (
    <>
      <GKText variant="subtitle">{dayjs(date).format('MMMM DD YYYY')}</GKText>
      <Spacer size={4} />
      <GKText variant="subtitle">{line2}</GKText>
    </>
  );
};

export default GKListSummary;
