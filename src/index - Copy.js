import ReactDOM from 'react-dom'

import logger from 'services/logService'
import {GlobalProvider} from "./context/globalContext"
import App from './App'

logger.init()

ReactDOM.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>,
  document.getElementById('root')
)
