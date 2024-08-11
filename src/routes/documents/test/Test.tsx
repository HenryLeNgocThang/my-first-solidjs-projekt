import { JSXElement, Show, createEffect } from "solid-js";
import getAPIData from "../../../shared/handleData";

import "../../../assets/scss/printing.scss";
import "./Test.scss";

import PrintButton from "../../../components/print-button/Print-Button";

const Test = (): JSXElement => {
  const data = getAPIData();

  createEffect(() => {
    if (data()) {
      // console.log(data());
    }
  });

  return (
    <Show when={!data.loading}>
      <PrintButton></PrintButton>
      <div class={"printing"}>
        <div class={"flex-grow p-[var(--page-print-padding)] print:py-0"}>
          <div>
            <h1>Testdokument</h1>
            <br />
            <h2>Boilerplate made by {data()?.name.firstname} {data()?.name.lastname}</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur consectetur placeat. Dignissimos, eligendi! 
              Sapiente aut tempore fugiat ipsa labore consectetur eius praesentium consequuntur? Ullam magnam doloremque illum numquam dolor!</p>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Test;