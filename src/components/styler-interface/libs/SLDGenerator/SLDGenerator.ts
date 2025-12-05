import { StyleGenerator } from "../interfaces/StyleGeneratorInterface";
import { PointStyle, PointSymbolizer } from "./PointSymbolizer";

export class SLDGenerator implements StyleGenerator {
  private rules: string[] = [];

  constructor() { }

  public addPointStyleRule(style: PointStyle): void {
    this.rules.push(PointSymbolizer.generatePointSymbolizerRule(style));
  }

  public getSLD(layerName: string = "DefaultLayer"): string {
    return `
<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld
                      http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>${layerName}</Name>
    <UserStyle>
      <Title>${layerName} Style</Title>
      <FeatureTypeStyle>
        ${this.rules.join("\n")}
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
    `.trim();
  }
}
