import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ClaimContext } from '../../contexts/ClaimContext';
import { UserContext } from '../../contexts/UserContext';
import { StyledHistoryClaim } from './styles';

function HistoryClaim() {
  const { claim } = useContext(UserContext);
  const { modalDeleteClaim, setModalDeleteClaim, setIdClaim } =
    useContext(ClaimContext);

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
            <div className='delete'>
              <FaTrash
                size={30}
                onClick={() => {
                  setIdClaim(item.id);
                  setModalDeleteClaim(!modalDeleteClaim);
                }}
              />
            </div>
          </details>
        </StyledHistoryClaim>
      ))}
    </>
  );
}

export default HistoryClaim;
