import { GraphPlugin, WorldGraphFactory } from "@fenhl/randomizer-graph-tool";
import { createContext } from "react";

const defaultGraph = WorldGraphFactory('ootr', {}, '7.1.143', {files: {}, subfolder: ''});

export const GraphContext = createContext<GraphPlugin>(defaultGraph);