import { MainLayout } from "components/layouts/MainLayout"
import { Houses } from "datas/Houses"
import { Home } from "pages/Home"

function App() {

  return (
    <MainLayout>
      <Home datas={Houses}/>
    </MainLayout>
  )
}

export default App
