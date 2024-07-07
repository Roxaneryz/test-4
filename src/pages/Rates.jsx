import { Wave } from 'react-animated-text';

import { Container, Filter, Heading, Loader, RatesList, Section } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency, selectError, selectLoading, selectRates } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchLatestSymbols } from '../redux/currency/operations';

const Rates = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseCurrency);
const dispach = useDispatch();
useEffect(()=>{dispach(fetchLatestSymbols(baseCurrency))}, [baseCurrency, dispach]);
  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <Filter/>}
        <RatesList rates={rates}/>
{isLoading && (<Loader/>)}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
        
      </Container>
    </Section>
  );
};

export default Rates;
