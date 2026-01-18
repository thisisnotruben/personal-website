import StarshipinvasionIcon from "@public/starship_invasion/starship_invasion_icon.png";
import StarrynightIcon from "@public/starry_night/starry_night_icon.png";
import TowIconTool from "@public/tides_of_war/icon-tool.png";
import TowIcon from "@public/tides_of_war/icon.png";
import type { Project } from "@scripts/types";

export const projects: Project = {
    an_8_bit_rpg: {
        title: "An 8 bit RPG",
        id: "#an-8-bit-rpg",
        icon: null,
        table: {
            "Repo:": {
                link: "https://github.com/thisisnotruben/An-8-bit-RPG",
                text: "Github",
            },
            "Platforms:": ["Web", "Linux", "Mac", "Windows"],
            "Engine used:": ["Godot"],
        },
    },
    website: {
        title: "Personal Website",
        id: "#my-website",
        icon: null,
        table: {
            "Repo:": {
                link: "https://github.com/thisisnotruben/personal-website",
                text: "Github"
            },
            "Platforms:": ["Web"],
            "Tools used:": ["Node", "Docker", "Astro", "Lucide", "Swup.Js"],
        }
    },
    starship_invasion: {
        title: "Starship Invasion",
        id: "#starship-invasion",
        icon: StarshipinvasionIcon,
        table: {
            "Playable link:": {
                link: "https://thisisnotruben.itch.io/starship-invasion",
                text: "itch.io",
            },
            "Repo:": {
                link: "https://github.com/thisisnotruben/Starship-Invasion",
                text: "Github",
            },
            "Platforms:": ["Web", "Linux", "Mac", "Windows"],
            "Engine used:": ["Godot"],
            "Tools used:": ["Crocotile3D", "Aseprite"],
        },
    },
    starry_night: {
        title: "Starry Night",
        id: "#starry-night",
        icon: StarrynightIcon,
        table: {
            "Playable link:": {
                link: "https://thisisnotruben.itch.io/starry-night",
                text: "itch.io",
            },
            "Repo:": {
                link: "https://github.com/thisisnotruben/starry-night",
                text: "Github",
            },
            "Platforms:": ["Web", "Linux", "Mac", "Windows"],
            "Engine used:": ["Godot"],
        },
    },
    tides_of_war: {
        title: "Tides of War",
        id: "#tides-of-war",
        icon: TowIcon,
        table: {
            "Repo:": {
                link: "https://github.com/thisisnotruben/tides-of-war",
                text: "Github",
            },
            "Engine used:": ["Godot"],
            "Tools used:": ["Aseprite", "Tiled"],
        },
    },
    tides_of_war_tools: {
        title: "Tide of War Tools",
        id: "#tides-of-war-tools",
        icon: TowIconTool,
        table: {
            "Repo:": {
                link: "https://github.com/thisisnotruben/ToW-tools",
                text: "Github",
            },
            "Platforms:": ["Linux"],
            "Tools used:": ["Python", "Qt-Creator"],
        },
    },
};