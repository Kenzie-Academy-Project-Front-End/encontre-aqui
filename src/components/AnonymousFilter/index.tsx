import { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { ThemeButton } from '../../styles/buttons';
import { StyledAnonymousFilter } from './styles';

function AnonymousFilter() {
  const { setFilter } = useContext(ItemContext);

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
          placeholder='Pesquisar Item'
          onChange={(e) => setFilter(e.target.value)}
        />
        <ThemeButton
          size='medium'
          buttonColor='orange'
          onClick={() => setFilter('')}
        >
          Limpar
        </ThemeButton>
      </div>
    </StyledAnonymousFilter>
  );
}

export default AnonymousFilter;
