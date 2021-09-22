import React from 'react';
import Spacer from 'components/Spacer';
import GKHeader from 'components/GK/GKHeader';
import GKRow from 'components/GK/GKRow';
import GKDescription from 'components/GK/GKDescription';

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
      <GKHeader>{name}</GKHeader>
      <Spacer size={8} orientation="vertical" />
      <GKRow label={makeNumber} />
      <Spacer size={8} orientation="vertical" />
      <GKDescription>{description}</GKDescription>
      <Spacer size={16} orientation="vertical" />
    </>
  );
};

export default CharaDetails;
