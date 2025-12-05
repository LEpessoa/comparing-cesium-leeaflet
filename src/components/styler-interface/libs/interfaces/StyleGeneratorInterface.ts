import { PointStyle } from "../SLDGenerator/PointSymbolizer";

// Define the interface
export interface StyleGenerator {
    addPointStyleRule(rule: PointStyle): void;
}
