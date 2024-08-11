// import { A } from "@solidjs/router";
import { For, JSX } from "solid-js";

import getRoutes from "../../shared/handleRoutes";

import "./Nav.scss";

const Nav = (): JSX.Element => {
    const routes = getRoutes;

    return (
        <nav>
            <a href="/">Übersicht</a>
            <For each={routes} fallback={<div>Loading...</div>}>
                {(item) => <a href={item.toLowerCase()}>{item}</a>}
            </For>
        </nav>
    );
};

export default Nav;