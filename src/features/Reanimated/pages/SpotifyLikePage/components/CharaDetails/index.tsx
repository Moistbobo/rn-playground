import React from 'react';
import Spacer from 'components/Spacer';
import GKRow from 'components/GK/GKRow';
import GKText from 'components/GK/GKText';

interface Props {
  /**
   * Name of the character.
   */
  name: string;

  /**
   * Number if the character.
   * @example No. 215
   */
  makeNumber: string;

  /**
   * Description of the character.
   */
  description: string;
}

/**
 * Component to render the name, number, and description of a character. For G&K pages.
 */
const CharaDetails = ({name, makeNumber, description}: Props) => {
  return (
    <>
      <GKText variant="header">{name}</GKText>
      <Spacer size={8} orientation="vertical" />
      <GKRow label={makeNumber} />
      <Spacer size={8} orientation="vertical" />
      <GKText variant="description">{description}</GKText>
      <Spacer size={16} orientation="vertical" />
    </>
  );
};

export default CharaDetails;
