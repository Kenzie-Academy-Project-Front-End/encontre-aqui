import { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { ThemeButton } from '../../styles/buttons';
import { StyledAnonymousFilter } from './styles';

function AnonymousFilter() {
  const { setFilter, inputValue, setInputValue } = useContext(ItemContext);

  return (
    <StyledAnonymousFilter>
      <div className='div-filter-buttons'>
        <ThemeButton
          size='medium'
          buttonColor='orange'
          onClick={() => setFilter('found')}
        >
          Achados
        </ThemeButton>
        <ThemeButton
          size='medium'
          buttonColor='orange'
          onClick={() => setFilter('lost')}
        >
          Perdidos
        </ThemeButton>
        <ThemeButton
          size='medium'
          buttonColor='orange'
          onClick={() => setFilter('all')}
        >
          Todos
        </ThemeButton>
      </div>
      <div className='div-filter-search'>
        <input
          type='text'
          value={inputValue}
          placeholder='Pesquisar Item'
          onChange={(e) => {
            setInputValue(e.target.value);
            setFilter(inputValue);
          }}
        />
        <ThemeButton
          size='medium'
          buttonColor='orange'
          onClick={() => {
            setInputValue('');
            setFilter('');
          }}
        >
          Limpar
        </ThemeButton>
      </div>
    </StyledAnonymousFilter>
  );
}

export default AnonymousFilter;
