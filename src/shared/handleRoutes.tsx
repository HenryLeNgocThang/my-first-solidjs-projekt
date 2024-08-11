// import { A } from "@solidjs/router";
import { createEffect } from "solid-js";

const getRoutes = (): string[] => {
    let pages: string[] = [];

    createEffect(async () => {
        const modules = import.meta.glob('/src/routes/documents/**/*.tsx');

        pages = Object.keys(modules).map((path) => {
            const parts = path.replace(".tsx", "").split("/");
            return parts[parts.length - 1];
        });
    });

    console.log(pages);
    

    return pages;
};

export default [...getRoutes()];