import { JSXElement, Show } from "solid-js";
// import solidLogo from "./assets/solid.svg"

import Loader from "../../components/loader/Loader";

function Home(): JSXElement {
  return (
    <Show when={true} fallback={<Loader></Loader>}>
      {/* <img src={viteLogo} class="logo" alt="Vite logo" /> */}
      <main class={`container grid grid-cols-12 gap-12`}>
        <div class={`col-span-12 mb-12`}>
          <h1 class={"text-center"}>Servus <span class={`font-handwriting font-bold text-right text-base`}>(˵¯͒〰¯͒˵)</span></h1>
          <br />
          <p>In diesem Boilerplate kannst du mit SolidJS ein Dokument erstellen und als PDF auf deinem Rechner abspeichern.
            <br /><br />
            <a class={"underline"} href="https://www.solidjs.com/guides/getting-started" target="_blank">Hier</a> geht es zu den SolidJS Docs.</p>
          <br />
          <h3>Dokument erstellen:</h3>
          <p>Wie versteht man das? <br />
            Das ist kein wysiwyg oder Dokumenten-Editor. <br />
            Man erstellt im Endeffekt sein Dokument/Inhalt mit HTML, CSS (SCSS). <br /></p>
          <br />
          <h3>Als PDF speichern</h3>
          <p>Es gibt für jede Seite ein Drucken-Button mit dem man das Dokument als PDf abspeichern kann.</p>
          <br />
          <h3>Warum kein Word verwenden?</h3>
          <p>Ich wollte mal SolidJS ausprobieren (◕‿◕).</p>
          <br />
          <hr class={"my-4"} />
          <h2>Installation</h2>
          <br />
          <p>Du benötigst <a class={"underline"} href="https://nodejs.org/" target="_blank">Node.js</a>, um das Projekt ausführen zu können.</p>
          <br />

          <code>
            <pre class={"px-4 py-3 bg-gray-700 text-white rounded-md"}>
              npm i # oder yarn oder pnpm
              <br />
              npm run dev # oder yarn oder pnpm
            </pre>
          </code>

          <br />
          <p>Im Browser <a class={"underline"} href="http://localhost:5173/">localhost:5173</a> aufrufen.</p>
          <hr class={"my-4"} />
          <h2>Neues Dokument anlegen</h2>
          <br />
          <p>Jedes Dokument ist eine eigene Seite, das im folgenden Pfad erstellt wird. Dabei muss der Name des Ordners wie die Komponente heißen in lower case.</p>
          <br />

          <code>
            <pre class={"px-4 py-3 bg-gray-700 text-white rounded-md"}>
              /src/routes/documents/test/Test.tsx
            </pre>
          </code>

          <hr class={"my-4"} />
          <h2>Mocked API</h2>
          <br />
          <p>In der data.json befinden sich Daten. Die JSON fungiert als Dummy API.</p>
          <br />

          <code>
            <pre class={"px-4 py-3 bg-gray-700 text-white rounded-md"}>
              /public/api/data.json
            </pre>
          </code>

          <hr class={"my-4"} />
          <h2>Lizenz</h2>
          <br />
          <p>MIT<br />Free Software, Hell Yeah! ＼(^-^)／</p>
        </div>
      </main>
    </Show>
  )
}

export default Home