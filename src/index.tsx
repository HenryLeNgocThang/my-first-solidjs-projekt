/* @refresh reload */
import { render } from "solid-js/web"
import { For, lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";
import "./index.scss";

/** Routes */
const Home = lazy(() => import("./routes/home/Home"));
const NotFound = lazy(() => import("./routes/notfound/NotFound"));

/** Components */
const Nav = lazy(() => import("./components/nav/Nav"));
const Loader = lazy(() => import("./components/loader/Loader"));

/** App */
const root = document.getElementById("root");

import getRoutes from "./shared/handleRoutes";

const routes = getRoutes;

render(() => 
    <>
        <Nav></Nav>
        <Loader
            duration={1000}
        >
            <Router>
                <Route path="/" component={Home}></Route>
                <Route path="*" component={NotFound}></Route>
                <For each={routes} fallback={<div>Loading...</div>}>
                    {(item) => 
                        <Route 
                            path={item.toLowerCase()} 
                            component={lazy(() => import(`./routes/documents/${item.toLowerCase()}/${item}.tsx`))}
                        ></Route>
                    }
                </For>
            </Router>
        </Loader>
    </>
, root as HTMLElement);