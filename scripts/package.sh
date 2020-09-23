#!/bin/bash

CSS_ASSETS=(
  "@coopdigital/foundations-global/dist/global.css"
  "@coopdigital/foundations-buttons/dist/buttons.css"
  "@coopdigital/foundations-forms/dist/forms.css"
  "@coopdigital/foundations-grid/dist/grid.css"
  "@coopdigital/foundations-layout/dist/layout.css"
  "@coopdigital/foundations-typography/dist/typography.css"
  "@coopdigital/foundations-vars/dist/vars.css"
  "@coopdigital/css-foundations/dist/foundations.css"
)

for node in "${CSS_ASSETS[@]}"
do
  cp ./node_modules/$node ./dist
done
