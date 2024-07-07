import { Container, ExchangeForm, ExchangeInfo, Heading, Loader, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectError, selectLoading, selectExchangeInfo } from '../redux/selectors';

const Home = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const exchangeInfo = useSelector(selectExchangeInfo)
 

  return (
    <Section>
      <Container>
        
        <ExchangeForm />
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
{exchangeInfo && <ExchangeInfo {...exchangeInfo}/>}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}

        {isLoading && <Loader/>}

      </Container>
    </Section>
  );
};

export default Home;
