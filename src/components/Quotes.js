import { useEffect, useState } from 'react';
import Message from './Message';

function Quotes() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=learning',
          {
            headers: {
              'X-Api-Key': 'vZdI6eGz2cS+jTb71dvouA==X8Xd3lMbKviCRmqW',
            },
          });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <Message className="quote" message="Something went wrong, Please try again!" />
    );
  }
  if (isLoading) {
    return (
      <Message message="Loading..." />
    );
  }

  return (
    <div className="quote-div">
      <ul className="qotm">
        <li className="quote-title">Quote of the Moment:</li>
        {data.map((item) => (
          <li className="quote" key={1}>
            {item.quote}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
