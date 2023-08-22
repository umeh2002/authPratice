import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./Router/mainRouter"
import { persistStore } from "redux-persist"
import { store } from "./global/Store"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"

const persist =persistStore(store)
const App = () => {
  return (
    <div>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
      <RouterProvider router={mainRouter}/>
      </PersistGate>
      </Provider>
    </div>
  )
}

export default App