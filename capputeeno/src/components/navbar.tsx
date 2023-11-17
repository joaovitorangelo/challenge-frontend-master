"use client"

import { styled } from "styled-components";

import { FilterType } from "@/types/filter-types";
import { useFilter } from "@/hooks/useFilter";

import { PrimaryInputWSearchIcon } from "./primary-input";

interface NavBarProps {
    selected: boolean
    filterListVisible: boolean
}

const FilterList = styled.ul`
    display: none;
    
        @media(max-width: ${props => props.theme.tableBreakpoint}){
        display: ${(props) => (props.isActive ? 'flex' : 'none')};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 1rem;
        background: var(--shapes-dark);
        list-style: none;

        position: absolute;
        top: 58px;
        right: 0;
        z-index: 999;
        width: 100%;
    }
`

const FilterItem = styled.li<NavBarProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low);' : ''}
`

export function NavBar(props : NavBarProps){
    // Search
    const {setSearch, search} = useFilter();
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

    return(
        <FilterList isActive={props.filterListVisible}>
            <PrimaryInputWSearchIcon 
                value={search}
                handleChange={setSearch}
                placeholder="Procurando por algo específico?"
            />
            <FilterItem 
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.MUG} 
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}