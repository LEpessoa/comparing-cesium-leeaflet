export type PointStyle = {
  opacity?: number;
  borderOpacity?: number;
  size?: number;
  borderSize?: number;
  url?: string | null;
  color?: string;
  borderColor?: string;
  form?: "circle" | "star" | "cross" | "square" | "triangle" | "image/icon";
  rotation?: number;
  minScale?: number;
  maxScale?: number;
};

export class PointSymbolizer {

  public static generatePointSymbolizerRule(style: PointStyle) {
    const normalized: PointStyle = {
      opacity: style.opacity ?? 1,
      borderOpacity: style.borderOpacity ?? 1,
      size: style.size ?? 10,
      borderSize: style.borderSize ?? 2,
      url: style.url ?? null,
      color: style.color ?? "#6666ff",
      borderColor: style.borderColor ?? "#66ff33",
      form: style.form ?? "circle",
      rotation: style.rotation ?? 0,
      minScale: style.minScale,
      maxScale: style.maxScale,
    };

    const {
      opacity,
      borderOpacity,
      size,
      borderSize,
      url,
      color,
      borderColor,
      form,
      rotation,
      minScale,
      maxScale,
    } = normalized;

    let rule = "";

    if (form === "image/icon" && url) {
      rule = `
<Rule>
  ${minScale ? `<MinScaleDenominator>${minScale}</MinScaleDenominator>` : ""}
  ${maxScale ? `<MaxScaleDenominator>${maxScale}</MaxScaleDenominator>` : ""}
  <PointSymbolizer>
    <Graphic>
      <ExternalGraphic>
        <OnlineResource xlink:href="${url}" xlink:type="simple"/>
        <Format>image/png</Format>
      </ExternalGraphic>
      <Opacity>${opacity}</Opacity>
      <Size>${size}</Size>
      <Rotation>${rotation}</Rotation>
    </Graphic>
  </PointSymbolizer>
</Rule>
      `.trim();
    } else {
      rule = `
<Rule>
  ${minScale ? `<MinScaleDenominator>${minScale}</MinScaleDenominator>` : ""}
  ${maxScale ? `<MaxScaleDenominator>${maxScale}</MaxScaleDenominator>` : ""}
  <PointSymbolizer>
    <Graphic>
      <Mark>
        <WellKnownName>${form}</WellKnownName>
        <Fill>
          <CssParameter name="fill">${color}</CssParameter>
          <CssParameter name="fill-opacity">${opacity}</CssParameter>
        </Fill>
        <Stroke>
          <CssParameter name="stroke">${borderColor}</CssParameter>
          <CssParameter name="stroke-width">${borderSize}</CssParameter>
          <CssParameter name="stroke-opacity">${borderOpacity}</CssParameter>
        </Stroke>
      </Mark>
      <Size>${size}</Size>
      <Rotation>${rotation}</Rotation>
    </Graphic>
  </PointSymbolizer>
</Rule>
      `.trim();
    }
    return rule;
    // this.rules.push(rule);
  }

}