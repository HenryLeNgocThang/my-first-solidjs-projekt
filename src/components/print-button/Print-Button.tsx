import { JSXElement } from "solid-js";

import styles from "./Print-Button.module.scss";

const PrintButton = (): JSXElement => {
    return (
        <>
            <button type="button" class={`btn-primary ${styles.printbutton}`} onClick={() => window.print()}>Drucken/Speichern</button>
        </>
    );
};

export default PrintButton;