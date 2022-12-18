import { useEffect, useState } from 'react';
import { SignClient } from '@walletconnect/sign-client';
import './App.css';


function App() {
  const [signClient, setSignClient] = useState();

  async function createClient() {
    try {

      const client = await SignClient.init({
        projectID: '124bae25b888a1055d83adc5d466513b',
      })

      console.log('client', client);
      setSignClient(client)

    } catch(e) {
      console.log(e)
    }
  }
  //use-effect hook, in the hook we'll check if the client exists
  useEffect(() =>{
    if (!signClient){ //if client doesn't exist,
      createClient()  //loop back to previous method
    }
  }, [signClient]);

  return (
    <div className="App">
      <h1> Wallet Tutorial </h1>
    </div>
  );
}

export default App;
 