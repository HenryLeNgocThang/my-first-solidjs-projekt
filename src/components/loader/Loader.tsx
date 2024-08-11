import { JSXElement, createEffect, createSignal } from "solid-js";

import styles from "./Loader.module.scss";

interface LoaderProps {
    children?: JSXElement,
    duration?: number
}

const Loader = (props: LoaderProps): JSXElement => {
    const [currentEmote, setCurrentEmote] = createSignal(0);
    const [isLoading, setIsloading] = createSignal(true);
    const [childContentLoaded, setChildContentLoaded] = createSignal(false);
    const keyframeEmotes = [
        "(ㆆㅅㆆ)",
        "(ーㅅー)",
        "(ㆆㅅㆆ)",
    ]
    const randomNumberInRange = (min: number, max: number): number => {
        return Math.random() * (max - min) + min;
    }
    const handleKeyframes = (): void => {
        setInterval((): void => {
            const i = currentEmote() < keyframeEmotes.length - 1 ? currentEmote() + 1 : 0;

            setTimeout((): void => {
                setCurrentEmote(i); 
            }, randomNumberInRange(100, 200));
        }, randomNumberInRange(100, 200));
    }
    const showLoader = (): void => {
        setIsloading(true);
        setChildContentLoaded(false);

        setTimeout((): void => {
            setIsloading(false);
            setChildContentLoaded(true);
        }, props.duration);
    }

    let container: HTMLDivElement | undefined = undefined;

    createEffect((): void => {
        handleKeyframes();
        showLoader();

        if (!container) return;

        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    showLoader();
                }
            }
        });
  
        observer.observe(container, { childList: true });
    });

    return (
        <div class={isLoading() ? 'absolute top-0 left-0 overflow-hidden h-screen w-screen' : ''}>
            <span class={isLoading() && !childContentLoaded() ? `${styles.loading} font-handwriting font-bold duration-300 opacity-100 print:hidden` : `opacity-0 print:hidden`}>
                <p>{keyframeEmotes[currentEmote()]}</p>
            </span>
            <div class={isLoading() ? 'hidden' : ''} ref={container}>
                {props.children}
            </div>
        </div>
    );
};

export default Loader;