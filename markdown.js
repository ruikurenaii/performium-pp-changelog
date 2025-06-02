/* 
  markdown content goes here. the changelog changes if they're released.
*/

const markdown = `
## v1.5.0
\`Codename: Fluxgate\`
\nThis next update lists out every confirmed rework possible, the final output may not be the same as what is listed here!

- Added bonus pp based on the times it has been executes
- Added bonus pp based on how many total characters are in the user's vault
- Scaled strain pp with the percentage of difficult words
- Moved bonus after compressing the inital pp
- Reworked bonus pp based on the user's total session time (duplicated)
- Used \`Math.pow()\` instead of dividing the total pp
- Multiplied aim and accuracy pp by 1.08

## v1.4.0
\`Codename: Exosynth\`
\nAdded new pp system version \`05-15-25\`
\nThis update introduces a complete rewrite to the system (not to be confused with ppv3).

- Rebalanced pp values
- Rewritten the pp system
- Add changes from osu! to this plugin

## v1.3.0
\`Codename: Datastream\`
\nAdded new pp system verison \`05-07-25\`
\nThis update introduces ppv2, a complete rewrite to the pp system similar to osu!'s ppv2.

- Rewritten the pp system
- Added difficulty factors
- Rebalanced pp values
- Add the time bonus based from \`totalFocusTime\`
- Added bonus pp similar to osu!
- Added penalties similar to the osu!standard judgment

## v1.2.0
\`Codename: Cryoengine\`
\nAdded new pp system version \`04-29-25\`
\nThis update adds the angle and star rating rework to the pp system.

- Added more if statements
- Added star rating and \`starRatingBonus\`
- Added \`angleBonus\`
- Rebalanced pp values

## v1.1.0
\`Codename: Biocircuit\`
\nAdded new pp system version \`04-13-25\`.

- Added weights \`e\` and \`f\`.
- Added new factor \`penaltyFactor\`.
- Added if statements.
- Added new bonuses \`totalLengthBonus\`, \`coherenceBonus\` and \`readingBonus\`.
- Deflated values from being broken (for rebalancing).
- Added nerf \`shortWordsNerf\`.

## v1.0.0
\`Codename: Aethernet\`
\nInitial release of the pp system.

- Added \`overallComplexityValue\`, composed of four values: \`sentenceDensityValue\`, \`sentenceComplexityValue\`, \`fileComplexityValue\` and \`wordComplexityValue\`.
- Added weights \`a\`, \`b\`, \`c\` and \`d\`.
- Added \`fileValue\`.
`;
