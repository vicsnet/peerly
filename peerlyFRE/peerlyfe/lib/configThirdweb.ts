const clientId= `d7b492a3e5bed755ed17c65d396ea352`;
// const secret_key =`-xxD3PUyF6_NlG4mnYHbkKQTfVM08v1kPivl4MYuKuv-e9WeUQabYGAzsqYkT0kYAhmDfa3VhQPGTEyW39kyOw`

import { createThirdwebClient } from "thirdweb";
 
export const client = createThirdwebClient({
    clientId: clientId,
  // use `secretKey` for server side or script usage
  // secretKey: secret_key
});