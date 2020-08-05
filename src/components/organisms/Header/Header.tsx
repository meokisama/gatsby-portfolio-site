import styled from '@emotion/styled';

import { Link } from 'gatsby';
import React, { useState } from 'react';

import {
  RiCloseLine as CloseIcon,
  RiMenuLine as MenuIcon,
} from 'react-icons/ri';
import tw from 'twin.macro';

import { Logo } from '~/components/atoms/Logo';
import { Links } from '~/components/molecules/Links';
import { ThemeIcons } from '~/components/molecules/ThemeIcons';
import { SearchBar } from '~/components/organisms/SearchBar';

export interface Props {
  links: {
    /** The name of the link to show. */
    name: string;
    /** Where to link to on the website. */
    link: string;
  }[];
}

const Header = ({ links }: Props) => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  return (
    <>
      <HeaderContainer>
        <Row>
          <LogoContainer to="/">
            <Logo />
          </LogoContainer>
        </Row>

        <Row>
          <DesktopNavLinks>
            <Links
              className="mx-24"
              linkClassName=" text-base lg:text-base xl:text-lg font-semibold"
              links={links}
            />
          </DesktopNavLinks>
          <NavToggle
            aria-label="Toggles navigation bar."
            data-cy="NavToggle"
            onClick={() => setShowNavLinks(!showNavLinks)}
            type="button"
          >
            {showNavLinks ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </NavToggle>
          <SearchBar />
          <ThemeIcons />
        </Row>
      </HeaderContainer>

      <MobileNavLinks showNavLinks={showNavLinks}>
        <Links
          linkClassName="text-lg my-2 font-bold transition border-transparent"
          links={links}
        />
      </MobileNavLinks>
    </>
  );
};

const HeaderContainer = tw.header`flex items-center justify-around p-4 max-w-screen-xl mx-auto font-header text-header bg-background`;

const Row = tw.div`flex flex-row space-x-4 items-center`;

const DesktopNavLinks = tw.div`hidden lg:flex`;

const MobileNavLinks = styled.div<{ showNavLinks: boolean }>`
  opacity: ${(props) => (props.showNavLinks ? 1 : 0)};
  max-height: ${(props) => (props.showNavLinks ? '100vh' : 0)};
  margin-left: 0 !important;
  transition: max-height 0.4s ease-in-out;
  ${tw`lg:hidden flex fixed inset-x-0 p-8 text-center bg-background z-10`}
`;

const NavToggle = tw.button`z-10 lg:hidden focus:outline-none transition duration-300 hover:text-primary`;

const LogoContainer = styled(Link)`
  ${tw`border-b-0 ml-0!`};
`;

export default Header;
