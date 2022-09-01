import { ThemeButton } from '../../styles/buttons';
import { StyledAnonymousFilter } from './styles';

function AnonymousFilter() {
  return (
    <StyledAnonymousFilter>
      <div className='div-filter-buttons'>
        <ThemeButton size='medium' buttonColor='orange'>
          Achados
        </ThemeButton>
        <ThemeButton size='medium' buttonColor='orange'>
          Perdidos
        </ThemeButton>
        <ThemeButton size='medium' buttonColor='orange'>
          Todos
        </ThemeButton>
      </div>
      <div className='div-filter-search'>
        <input type='text' placeholder='Pesquisar Item' />
        <ThemeButton size='medium' buttonColor='orange'>
          Buscar
        </ThemeButton>
      </div>
    </StyledAnonymousFilter>
  );
}

export default AnonymousFilter;
