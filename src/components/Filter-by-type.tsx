import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px; 
  list-style: none;
`
const FilterItem = styled.li<FilterItemProps>`
  color: var(--text-dark);
  text-align: center;
  font-family: inherit;
  font-size: 12px;
  font-weight: ${props => props.selected ? '600' : '400'};
  line-height: 18px;
  text-transform: uppercase; 
  cursor: pointer;
  border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    font-size: 16px;
    line-height: 22px;
  }
`

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }

  return (
    <FilterList>
      <FilterItem 
        selected={type === FilterType.ALL} 
        onClick={() => handleChangeType(FilterType.ALL)} 
      >
      all products
      </FilterItem>
      <FilterItem 
        selected={type === FilterType.SHIRT} 
        onClick={() => handleChangeType(FilterType.SHIRT)} 
      >
      t-shirts
      </FilterItem>
      <FilterItem 
        selected={type === FilterType.MUG} 
        onClick={() => handleChangeType(FilterType.MUG)}
      >
      mugs
      </FilterItem>
    </FilterList>
  )
};
