export interface RRATDistanceKpc {
  ne2001: number | null;
  ne2025: number | null;
  ymw16: number | null;
}

export interface RRATDiscoveryInfo {
  source_name: string;
  detection_mjd: number | null;
  detection_snr: number | null;
  detection_dm_pc_cm3: number | null;
  detection_frequency_mhz: number | null;
  time_resolution_ms: number | null;
  boxcar_width_samples: number | null;
  observation_length_hr: number | null;
  total_pulses: number | null;
  burst_rate_per_hr: number | null;
}

export interface RRATProperties {
  source_name: string;
  ra_j2000: string;
  ra_uncertainty_arcsec: number | null;
  dec_j2000: string;
  dec_uncertainty_arcsec: number | null;
  best_dm_pc_cm3: number | null;
  distance_kpc: RRATDistanceKpc;
  period_s: number | null;
  w50_burst_width_ms: number | null;
}

export interface RRATAdditionalInfo {
  discovery_sbid: number | null;
  beam: number | null;
  link_type: string | null;
  link_url?: string | null;
  field: string | null;
  start_time_utc: string | null;
  central_freq_mhz: number | null;
  notes: string | null;
  associated_survey?: string | null; // EMU, VAST, FLASH, WALLABY, RACS
  followup_status?: 'Parkes Medusa Observed' | 'Timing Candidate' | 'Single Burst' | 'Archival';
}

export interface RRATDynamicSpectra {
  image_url?: string;
  bandwidth_mhz?: number;
  center_freq_mhz?: number;
  duration_ms?: number;
  dispersion_measure?: number;
  burst_snr?: number;
  dedispersed?: boolean;
}

export interface RRATEntry {
  source_name: string;
  discovery_info: RRATDiscoveryInfo;
  properties: RRATProperties;
  additional_info: RRATAdditionalInfo;
  dynamic_spectra?: RRATDynamicSpectra;
}

export type DmCategory = 'all' | 'low' | 'medium' | 'high';
export type EpochCategory = 'all' | '3ms' | '13.8ms' | '110ms';
export type TimingStatusCategory = 'all' | 'period_known' | 'unresolved';
