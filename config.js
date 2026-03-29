/**
 * No ArcGIS Developer API key required — the map uses an OpenStreetMap-based basemap.
 *
 * Each URL must point to ONE layer and end with /0 (or /1, etc.):
 *   .../FeatureServer/0
 */
window.SHIPS_OF_EXILE_CONFIG = {
  routesLayerUrl:
    "https://services1.arcgis.com/XBhYkoXKJCRHbe7M/arcgis/rest/services/keyroutes/FeatureServer/0",
  /** Layer URL must include the index (…/FeatureServer/0). The app also auto-fixes …/FeatureServer if needed. */
  portsLayerUrl:
    "https://services1.arcgis.com/XBhYkoXKJCRHbe7M/arcgis/rest/services/ports/FeatureServer/0",
};
