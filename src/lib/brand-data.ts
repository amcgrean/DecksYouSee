import timbertechDeckingCatalog from "../../timbertech-decking.cleaned.json";
import trexDeckingCatalog from "../../trex-decking.cleaned.json";

export interface BrandColor {
  name: string;
  hex: string;
  finish?: string;
}

export interface DeckingLine {
  name: string;
  colors: BrandColor[];
}

export interface DeckingBrand {
  brand: string;
  lines?: DeckingLine[];
  colors?: BrandColor[];
}

interface DeckingCatalog {
  brand: string;
  lines: DeckingLine[];
}

const TREX_CATALOG = trexDeckingCatalog as DeckingCatalog;
const TIMBERTECH_CATALOG = timbertechDeckingCatalog as DeckingCatalog;

export type RailSeriesType =
  | "baluster"
  | "glass_panel"
  | "baluster_ornamental"
  | "cable"
  | "thick_baluster";

export interface RailSeries {
  name: string;
  type: RailSeriesType;
  colors?: BrandColor[];
}

export interface RailingSystem {
  brand: string;
  series: RailSeries[];
  colors?: BrandColor[];
}

export const BRAND_CATALOG: {
  decking_brands: DeckingBrand[];
  railing_systems: RailingSystem[];
} = {
  decking_brands: [
    {
      brand: TREX_CATALOG.brand,
      lines: TREX_CATALOG.lines,
    },
    {
      brand: TIMBERTECH_CATALOG.brand,
      lines: TIMBERTECH_CATALOG.lines,
    },
    {
      brand: "MoistureShield",
      lines: [
        {
          name: "Vision",
          colors: [
            { name: "Smokey Gray", hex: "#7a7b7d" },
            { name: "Spanish Leather", hex: "#5e4a3b" },
            { name: "Sandstone", hex: "#bda68e" },
            { name: "Cold Brew", hex: "#3d3029" },
          ],
        },
      ],
    },
    {
      brand: "Wolf Serenity",
      colors: [
        { name: "Amberwood", hex: "#9c6d4a" },
        { name: "Black Walnut", hex: "#3d2b21" },
        { name: "Driftwood Grey", hex: "#8c8c8c" },
      ],
    },
  ],
  railing_systems: [
    {
      brand: "Westbury Aluminum",
      series: [
        { name: "Tuscany C10", type: "baluster" },
        { name: "Veranda C70", type: "glass_panel" },
        { name: "Riviera C30", type: "baluster_ornamental" },
        { name: "VertiCable C80", type: "cable" },
      ],
      colors: [
        { name: "Black Fine Texture", hex: "#1a1a1a" },
        { name: "Bronze Fine Texture", hex: "#3b312b" },
        { name: "White Fine Texture", hex: "#f2f2f2" },
      ],
    },
    {
      brand: "Trex Railing",
      series: [
        {
          name: "Signature Aluminum",
          type: "baluster",
          colors: [
            { name: "Charcoal Black", hex: "#232323" },
            { name: "Bronze", hex: "#3d3630" },
          ],
        },
        {
          name: "Transcend Composite",
          type: "thick_baluster",
          colors: [
            { name: "Classic White", hex: "#f7f7f7" },
            { name: "Vintage Lantern", hex: "#403129" },
          ],
        },
      ],
    },
  ],
};

export function getDeckLines(brand: DeckingBrand): DeckingLine[] {
  if (brand.lines && brand.lines.length > 0) {
    return brand.lines;
  }

  return [
    {
      name: `${brand.brand} Collection`,
      colors: brand.colors ?? [],
    },
  ];
}

export function getRailSeriesColorOptions(system: RailingSystem, series: RailSeries): BrandColor[] {
  if (series.colors && series.colors.length > 0) {
    return series.colors;
  }

  return system.colors ?? [];
}
