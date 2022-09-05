import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { UserContext } from '../../contexts/UserContext';
import { StyledHistoryClaim } from './styles';

function HistoryClaim() {
  const { claim } = useContext(UserContext);

  return (
    <>
      {claim.map((item) => (
        <StyledHistoryClaim key={item.id}>
          <details>
            <summary>
              <p>
                {item.user_required.item.name}:{' '}
                <span>
                  {item.user_required.item.status === 'lost'
                    ? 'Perdido'
                    : ' Achado'}
                </span>
              </p>
              <FaTrash size={30} />
            </summary>
            <div>
              <img
                src={item.user_required.item.image}
                alt={item.user_required.item.name}
              />
              <div className='div-description'>
                <p>
                  <span>Descrição: </span>
                  {item.user_required.item.description}
                </p>
                <p>
                  <span>Reivindicação: </span>
                  {item.user_applicant.description}
                </p>
              </div>
            </div>
          </details>
        </StyledHistoryClaim>
      ))}
    </>
  );
}

export default HistoryClaim;