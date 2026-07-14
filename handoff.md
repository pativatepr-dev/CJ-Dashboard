# CJ Dashboard Handoff

## Scope

This delivery changes the HTML dashboard only. No workbook, spreadsheet formula, raw data source, or published CSV URL was changed.

## Changed file

- `Shareable Center HTML.html`

## Delivered behavior

### Scope-aware Deep Analytics

- Campaign selector opens **Campaign Total** using Campaign Code, Platform, Objective, and Campaign Name as the campaign identity.
- Control Tower rows and Forecast Watchlist cards open the exact selected Ads Set rather than the first row with the same Campaign Code.
- Target/Ads Set rankings drill into the selected Ads Set; Creative/Ads rankings drill into the selected Creative.
- Daily-mode ranking rows are also actionable.
- Hero, cards, recommendation, performance brief, charts, daily table, and rankings share one active scope.
- `View Campaign Total` resets Ads Set or Creative selection while staying in Deep Analytics.
- Ads Set matching tolerates different but related labels between Overview and Target feeds.

### Forecast Watchlist and layout

- Forecast Watchlist is two cards per row on desktop and one card per row below 720px.
- Every Watchlist card retains and displays its Ads Set identity.
- Latest Movement Brief and Forecast Watchlist have equal 50/50 width on desktop and stack on narrower screens.

## Important implementation points

- Do not replace full campaign/scope keys with Campaign Code-only selection; CJ has Campaign Codes with multiple Ads Sets (including `2605_18`, `2606_05`, `2606_08`, and `2606_09`).
- Keep `getOverviewRowKey`, `getScopeKey`, `getCampaignScopeKey`, `findOverviewRowForScope`, `buildScopeFromRow`, `filterRowsByScope`, and `openDeepByScopeKey` aligned when changing selection behavior.
- Campaign-level daily delivery uses `Daily Breakdown`; Ads Set and Creative delivery uses `Target & Creative`.

## Validation performed

- JavaScript syntax checked with `node --check`.
- Reviewed the public Campaign Overview feed and confirmed that several Campaign Codes contain multiple valid Ads Sets, which is the case this scope handling protects.

## Remaining limitation

- The dashboard follows the data available in its published Google Sheets CSV feeds. Changes that have not propagated to the published feed are not visible after an HTML refresh.
