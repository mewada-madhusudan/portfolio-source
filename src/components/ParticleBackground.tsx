import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import type { Engine } from "@tsparticles/engine";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadBasic(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#60a5fa", "#a78bfa", "#22d3ee", "#34d399", "#f472b6", "#fbbf24"],
                    },
                    links: {
                        color: "#60a5fa",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 120,
                    },
                    opacity: {
                        value: { min: 0.4, max: 0.9 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.2,
                            sync: false,
                        },
                    },
                    shape: {
                        type: ["circle", "triangle", "polygon"],
                        polygon: {
                            sides: 6,
                        },
                    },
                    size: {
                        value: { min: 2, max: 6 },
                        animation: {
                            enable: true,
                            speed: 4,
                            minimumValue: 1,
                            sync: false,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleBackground;