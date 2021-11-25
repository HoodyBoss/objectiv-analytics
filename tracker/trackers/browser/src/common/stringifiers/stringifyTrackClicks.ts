/*
 * Copyright 2021 Objectiv B.V.
 */

import { TrackClicksAttribute } from '../../definitions/TrackClicksAttribute';
import { stringifyJson } from './stringifyJson';

/**
 * `trackClicks` Tagging Attribute stringifier
 */
export const stringifyTrackClicks = (trackClicksAttribute: TrackClicksAttribute) => {
  return stringifyJson(trackClicksAttribute, TrackClicksAttribute);
};