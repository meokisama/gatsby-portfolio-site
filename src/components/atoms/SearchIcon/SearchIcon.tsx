import React from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

export interface Props {
  /** The background of icon. */
  background: string;
  /** The color of icon. */
  color: string;
  /** The function to call when the icon is clicked on. */
  onClick: () => void;
  /** Extra CSS classes to apply to this component. */
  className?: string;
}

const SearchIcon = ({ background, color, onClick, className }: Props) => (
  <Icon
    className={`bg-${background} hover:bg-${color} text-${color} hover:text-${background} ${className}`}
    data-testid="Icon"
    onClick={onClick}
    type="button"
  >
    <Search size="1em" />
  </Icon>
);

const Icon = tw.button`p-4 rounded-full bg-opacity-25 transition duration-300 focus:outline-none inline-block`;

export default SearchIcon;