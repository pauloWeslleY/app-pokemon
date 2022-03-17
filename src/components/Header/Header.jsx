import React from 'react'
import {
   Nav,
   Navbar,
   NavbarText,
   NavbarBrand,
   NavbarToggler,
   NavItem,
   NavLink,
   DropdownToggle,
   DropdownItem,
   DropdownMenu,
   Collapse,
   UncontrolledDropdown
} from 'reactstrap';

export default function Header() {

   const menuNav = {
      navTitle: 'Pokémon',
      pokeItem: 'PokeItem',
      pokeDex: 'PokeDex',
      region: 'Region',
      evolution: 'Evolution',
      ability: 'Ability',
      title: 'PokeApi'
   }

   return (
      <>
         <Navbar
            color="dark"
            expand="md"
            dark
            fixed='top'
         >
            <NavbarBrand
               href='/'
               className="me-auto"
            >
               {menuNav.navTitle}
            </NavbarBrand>
            <NavbarToggler
               className="me-2"
               onClick={function noRefCheck() { }}
            />
            <Collapse navbar>
               <Nav
                  className="me-auto"
                  navbar
               >
                  <NavItem>
                     <NavLink href="/pokeitem">
                        {menuNav.pokeItem}
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink href="/pokedex">
                        {menuNav.pokeDex}
                     </NavLink>
                  </NavItem>
                  <UncontrolledDropdown
                     inNavbar
                     nav
                  >
                     <DropdownToggle
                        caret
                        nav
                     >
                        Options
                     </DropdownToggle>
                     <DropdownMenu>
                        <DropdownItem href='/region'>
                           {menuNav.region}
                        </DropdownItem>
                        <DropdownItem href='/evolution'>
                           {menuNav.evolution}
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href='ability'>
                           {menuNav.ability}
                        </DropdownItem>
                     </DropdownMenu>
                  </UncontrolledDropdown>
               </Nav>
               <NavbarText>
                  {menuNav.title}
               </NavbarText>
            </Collapse>
         </Navbar>
      </>
   )
}