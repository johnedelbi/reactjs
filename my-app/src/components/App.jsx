
import '../styles/App.css'
import { Aside } from './Aside.jsx'
import { Button } from './Button.jsx'

export const App = () => (
  <>
    <header>
      <h1>pokemon</h1>
    </header>
    <main>
      <Button isTrue />

      <Aside />
      <Main />

    </main>
    <footer><button>john</button> copyright</footer>
  </>
);


const Main = () => (
  <section>wip</section>
);