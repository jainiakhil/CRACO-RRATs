import { RRATEntry } from '../types/rrat';

export const INITIAL_RRATS_DATA: RRATEntry[] = [
  {
    source_name: "J1743-2754",
    discovery_info: {
      source_name: "J1743-2754",
      detection_mjd: 61078.05746,
      detection_snr: 10.5,
      detection_dm_pc_cm3: 1011.9,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 7,
      observation_length_hr: 0.17,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1743-2754",
      ra_j2000: "17:43:12.750",
      ra_uncertainty_arcsec: 1.762,
      dec_j2000: "-27:54:43.877",
      dec_uncertainty_arcsec: 1.465,
      best_dm_pc_cm3: 1060.65,
      distance_kpc: {
        ne2001: 15.7,
        ne2025: 28.1,
        ymw16: 25.0
      },
      period_s: null,
      w50_burst_width_ms: 83.25
    },
    additional_info: {
      discovery_sbid: 81999,
      beam: 28,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_1739-25",
      start_time_utc: "2026-02-07 01:12:58",
      central_freq_mhz: 920.5,
      notes: "Highest recorded DM for an RRAT in history (1011.9 pc cm⁻³). Discovered in VAST survey field.",
      associated_survey: "VAST",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 120,
      dispersion_measure: 1011.9,
      burst_snr: 10.5,
      dedispersed: true
    }
  },
  {
    source_name: "J1606-0854",
    discovery_info: {
      source_name: "J1606-0854",
      detection_mjd: 60491.71975,
      detection_snr: 24.28,
      detection_dm_pc_cm3: 4.5,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 1,
      observation_length_hr: 1.55,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1606-0854",
      ra_j2000: "16:06:53.224",
      ra_uncertainty_arcsec: 0.710,
      dec_j2000: "-08:54:07.279",
      dec_uncertainty_arcsec: 0.524,
      best_dm_pc_cm3: 6.01,
      distance_kpc: {
        ne2001: 0.6,
        ne2025: 0.6,
        ymw16: 0.2
      },
      period_s: 1.812859475,
      w50_burst_width_ms: 24.22
    },
    additional_info: {
      discovery_sbid: 75432,
      beam: 14,
      link_type: "offline_image",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1600-08",
      start_time_utc: "2024-06-30 17:16:26",
      central_freq_mhz: 832.5,
      notes: "Remarkable ultra-low DM source (4.5 pc cm⁻³), confirming CRACO's immunity to the zero-DM blindness that plagues single dishes.",
      associated_survey: "EMU",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 60,
      dispersion_measure: 4.5,
      burst_snr: 24.3,
      dedispersed: true
    }
  },
  {
    source_name: "J1440-4434",
    discovery_info: {
      source_name: "J1440-4434",
      detection_mjd: 60783.95023,
      detection_snr: 9.8,
      detection_dm_pc_cm3: 4.65,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 9.14,
      total_pulses: 67,
      burst_rate_per_hr: 7.33
    },
    properties: {
      source_name: "J1440-4434",
      ra_j2000: "14:40:13.001",
      ra_uncertainty_arcsec: 3.198,
      dec_j2000: "-44:34:20.305",
      dec_uncertainty_arcsec: 1.283,
      best_dm_pc_cm3: 2.66,
      distance_kpc: {
        ne2001: 0.3,
        ne2025: 0.4,
        ymw16: 0.3
      },
      period_s: 0.5209016774,
      w50_burst_width_ms: 20.66
    },
    additional_info: {
      discovery_sbid: 78912,
      beam: 19,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "FLASH_1440-44",
      start_time_utc: "2025-04-18 22:48:20",
      central_freq_mhz: 920.5,
      notes: "Highly active low-DM repeater with 67 pulses detected over 9.14 hours. Solved period P0 = 0.5209s.",
      associated_survey: "FLASH",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 50,
      dispersion_measure: 4.65,
      burst_snr: 9.8,
      dedispersed: true
    }
  },
  {
    source_name: "J1430-6222",
    discovery_info: {
      source_name: "J1430-6222",
      detection_mjd: 61046.05335,
      detection_snr: 17.3,
      detection_dm_pc_cm3: 907.0,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 3,
      observation_length_hr: 9.08,
      total_pulses: 4,
      burst_rate_per_hr: 0.44
    },
    properties: {
      source_name: "J1430-6222",
      ra_j2000: "14:30:24.033",
      ra_uncertainty_arcsec: 1.199,
      dec_j2000: "-62:22:18.574",
      dec_uncertainty_arcsec: 1.474,
      best_dm_pc_cm3: 907.6,
      distance_kpc: {
        ne2001: 50.0,
        ne2025: 24.7,
        ymw16: 17.8
      },
      period_s: null,
      w50_burst_width_ms: 35.99
    },
    additional_info: {
      discovery_sbid: 81450,
      beam: 7,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "WALLABY_1430-62",
      start_time_utc: "2026-01-06 01:16:50",
      central_freq_mhz: 920.5,
      notes: "Extremely high DM source (907 pc cm⁻³) probing deep Galactic plane sightline or dense HII region.",
      associated_survey: "WALLABY",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 90,
      dispersion_measure: 907.0,
      burst_snr: 17.3,
      dedispersed: true
    }
  },
  {
    source_name: "J2127-4705",
    discovery_info: {
      source_name: "J2127-4705",
      detection_mjd: 60787.24117,
      detection_snr: 7.2,
      detection_dm_pc_cm3: 18.36,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 8.96,
      total_pulses: 126,
      burst_rate_per_hr: 14.05
    },
    properties: {
      source_name: "J2127-4705",
      ra_j2000: "21:27:59.929",
      ra_uncertainty_arcsec: 0.965,
      dec_j2000: "-47:05:31.132",
      dec_uncertainty_arcsec: 0.953,
      best_dm_pc_cm3: 19.15,
      distance_kpc: {
        ne2001: 0.7,
        ne2025: 1.1,
        ymw16: 1.4
      },
      period_s: 0.9832545195,
      w50_burst_width_ms: 5.32
    },
    additional_info: {
      discovery_sbid: 78945,
      beam: 22,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_2128-47",
      start_time_utc: "2025-04-22 05:47:17",
      central_freq_mhz: 920.5,
      notes: "Prolific emitter with 126 pulses. Scintillation study indicates continuous emitting pulsar elevated by strong diffractive interstellar scintillation (DISS).",
      associated_survey: "VAST",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 40,
      dispersion_measure: 18.36,
      burst_snr: 7.2,
      dedispersed: true
    }
  },
  {
    source_name: "J2357+2454",
    discovery_info: {
      source_name: "J2357+2454",
      detection_mjd: 61045.50487,
      detection_snr: 20.7,
      detection_dm_pc_cm3: 6.8,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 0,
      observation_length_hr: 1.80,
      total_pulses: 106,
      burst_rate_per_hr: 58.92
    },
    properties: {
      source_name: "J2357+2454",
      ra_j2000: "23:57:18.955",
      ra_uncertainty_arcsec: 4.745,
      dec_j2000: "+24:54:17.684",
      dec_uncertainty_arcsec: 6.052,
      best_dm_pc_cm3: 9.9,
      distance_kpc: {
        ne2001: 0.6,
        ne2025: 0.6,
        ymw16: 0.5
      },
      period_s: 0.7351195615,
      w50_burst_width_ms: 16.91
    },
    additional_info: {
      discovery_sbid: 81442,
      beam: 11,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "RACS_2357+24",
      start_time_utc: "2026-01-05 12:07:01",
      central_freq_mhz: 832.5,
      notes: "Northern sky discovery with exceptionally high burst rate (58.9 hr⁻¹). Solved P0 = 0.735s.",
      associated_survey: "RACS",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 45,
      dispersion_measure: 6.8,
      burst_snr: 20.7,
      dedispersed: true
    }
  },
  {
    source_name: "J1917-6554",
    discovery_info: {
      source_name: "J1917-6554",
      detection_mjd: 60380.12604,
      detection_snr: 10.6,
      detection_dm_pc_cm3: 63.2,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 0,
      observation_length_hr: 0.08,
      total_pulses: 9,
      burst_rate_per_hr: 115.89
    },
    properties: {
      source_name: "J1917-6554",
      ra_j2000: "19:17:31.680",
      ra_uncertainty_arcsec: 2.10,
      dec_j2000: "-65:54:47.520",
      dec_uncertainty_arcsec: 1.85,
      best_dm_pc_cm3: 18.2,
      distance_kpc: {
        ne2001: 2.8,
        ne2025: 4.7,
        ymw16: 25.0
      },
      period_s: 0.5267456902,
      w50_burst_width_ms: 15.54
    },
    additional_info: {
      discovery_sbid: 74211,
      beam: 16,
      link_type: "archive_casda",
      link_url: "https://data.csiro.au/domain/casda",
      field: "EMU_1917-65",
      start_time_utc: "2024-03-10 03:01:30",
      central_freq_mhz: 864.5,
      notes: "Ultra-fast burst rate (~116 bursts/hr during active state). Rapid spin period of 0.527s.",
      associated_survey: "EMU",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 50,
      dispersion_measure: 63.2,
      burst_snr: 10.6,
      dedispersed: true
    }
  },
  {
    source_name: "J1107-4854",
    discovery_info: {
      source_name: "J1107-4854",
      detection_mjd: 60630.94573,
      detection_snr: 27.2,
      detection_dm_pc_cm3: 75.1,
      detection_frequency_mhz: 1272.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 6,
      observation_length_hr: 0.50,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1107-4854",
      ra_j2000: "11:07:18.050",
      ra_uncertainty_arcsec: 0.461,
      dec_j2000: "-48:54:31.330",
      dec_uncertainty_arcsec: 0.446,
      best_dm_pc_cm3: 75.1,
      distance_kpc: {
        ne2001: 2.3,
        ne2025: 2.9,
        ymw16: 1.4
      },
      period_s: 1.83,
      w50_burst_width_ms: 18.0
    },
    additional_info: {
      discovery_sbid: 76904,
      beam: 31,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "WALLABY_1107-48",
      start_time_utc: "2024-11-16 22:41:51",
      central_freq_mhz: 1272.5,
      notes: "Bright high-S/N discovery (S/N = 27.2) observed during 3ms survey commissioning at 1272.5 MHz.",
      associated_survey: "WALLABY",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 1272.5,
      duration_ms: 55,
      dispersion_measure: 75.1,
      burst_snr: 27.2,
      dedispersed: true
    }
  },
  {
    source_name: "J0923-3200",
    discovery_info: {
      source_name: "J0923-3200",
      detection_mjd: 60889.30434,
      detection_snr: 24.4,
      detection_dm_pc_cm3: 72.07,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 5,
      observation_length_hr: 1.80,
      total_pulses: 10,
      burst_rate_per_hr: 5.54
    },
    properties: {
      source_name: "J0923-3200",
      ra_j2000: "09:23:39.645",
      ra_uncertainty_arcsec: 1.0,
      dec_j2000: "-32:00:51.621",
      dec_uncertainty_arcsec: 0.6,
      best_dm_pc_cm3: 95.58,
      distance_kpc: {
        ne2001: 0.5,
        ne2025: 0.6,
        ymw16: 0.4
      },
      period_s: 6.853647628,
      w50_burst_width_ms: 42.38
    },
    additional_info: {
      discovery_sbid: 79803,
      beam: 4,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_0923-32",
      start_time_utc: "2025-08-02 07:18:15",
      central_freq_mhz: 832.5,
      notes: "Long rotation period P0 = 6.854s. High astrometric precision (0.6 arcsec).",
      associated_survey: "VAST",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 80,
      dispersion_measure: 72.07,
      burst_snr: 24.4,
      dedispersed: true
    }
  },
  {
    source_name: "J1319-4535",
    discovery_info: {
      source_name: "J1319-4535",
      detection_mjd: 60303.93359,
      detection_snr: 12.8,
      detection_dm_pc_cm3: 38.47,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 1,
      observation_length_hr: 0.19,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1319-4535",
      ra_j2000: "13:19:47.760",
      ra_uncertainty_arcsec: 2.5,
      dec_j2000: "-45:35:58.560",
      dec_uncertainty_arcsec: 2.1,
      best_dm_pc_cm3: 43.72,
      distance_kpc: {
        ne2001: 1.2,
        ne2025: 1.6,
        ymw16: 1.3
      },
      period_s: null,
      w50_burst_width_ms: 21.12
    },
    additional_info: {
      discovery_sbid: 73510,
      beam: 12,
      link_type: "offline_image",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1319-45",
      start_time_utc: "2023-12-25 22:24:22",
      central_freq_mhz: 864.5,
      notes: "Pronounced diffractive scintillation (DISS) visible across dynamic spectra.",
      associated_survey: "EMU",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 55,
      dispersion_measure: 38.47,
      burst_snr: 12.8,
      dedispersed: true
    }
  },
  {
    source_name: "J0050+1021",
    discovery_info: {
      source_name: "J0050+1021",
      detection_mjd: 60340.29297,
      detection_snr: 13.6,
      detection_dm_pc_cm3: 11.54,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 0,
      observation_length_hr: 0.24,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J0050+1021",
      ra_j2000: "00:50:46.680",
      ra_uncertainty_arcsec: 3.1,
      dec_j2000: "+10:21:21.240",
      dec_uncertainty_arcsec: 2.8,
      best_dm_pc_cm3: 13.78,
      distance_kpc: {
        ne2001: 1.0,
        ne2025: 1.7,
        ymw16: 2.6
      },
      period_s: null,
      w50_burst_width_ms: 17.25
    },
    additional_info: {
      discovery_sbid: 73820,
      beam: 8,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "RACS_0050+10",
      start_time_utc: "2024-01-31 07:01:52",
      central_freq_mhz: 864.5,
      notes: "Low-DM source at high Galactic latitude. Detected during RACS commensal pass.",
      associated_survey: "RACS",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 45,
      dispersion_measure: 11.54,
      burst_snr: 13.6,
      dedispersed: true
    }
  },
  {
    source_name: "J1323-0129",
    discovery_info: {
      source_name: "J1323-0129",
      detection_mjd: 60366.78049,
      detection_snr: 10.4,
      detection_dm_pc_cm3: 11.54,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 1,
      observation_length_hr: 0.18,
      total_pulses: 2,
      burst_rate_per_hr: 10.94
    },
    properties: {
      source_name: "J1323-0129",
      ra_j2000: "20:34:22.800",
      ra_uncertainty_arcsec: 2.8,
      dec_j2000: "+03:12:48.420",
      dec_uncertainty_arcsec: 2.4,
      best_dm_pc_cm3: 21.47,
      distance_kpc: {
        ne2001: 1.0,
        ne2025: 1.0,
        ymw16: 0.8
      },
      period_s: 7.78,
      w50_burst_width_ms: 25.87
    },
    additional_info: {
      discovery_sbid: 74015,
      beam: 25,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1323-01",
      start_time_utc: "2024-02-26 18:43:54",
      central_freq_mhz: 864.5,
      notes: "Very long period P0 = 7.78s near pulsar deathline.",
      associated_survey: "EMU",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 60,
      dispersion_measure: 11.54,
      burst_snr: 10.4,
      dedispersed: true
    }
  },
  {
    source_name: "J1300-4825",
    discovery_info: {
      source_name: "J1300-4825",
      detection_mjd: 60376.72089,
      detection_snr: 9.6,
      detection_dm_pc_cm3: 85.0,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 1,
      observation_length_hr: 0.19,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1300-4825",
      ra_j2000: "13:00:05.040",
      ra_uncertainty_arcsec: 3.5,
      dec_j2000: "-48:25:36.840",
      dec_uncertainty_arcsec: 3.2,
      best_dm_pc_cm3: 75.7,
      distance_kpc: {
        ne2001: 2.4,
        ne2025: 3.4,
        ymw16: 2.7
      },
      period_s: null,
      w50_burst_width_ms: 19.81
    },
    additional_info: {
      discovery_sbid: 74140,
      beam: 18,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "WALLABY_1300-48",
      start_time_utc: "2024-03-07 17:18:04",
      central_freq_mhz: 864.5,
      notes: "Detected during early 13.8ms survey mode.",
      associated_survey: "WALLABY",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 50,
      dispersion_measure: 85.0,
      burst_snr: 9.6,
      dedispersed: true
    }
  },
  {
    source_name: "J2023-6003",
    discovery_info: {
      source_name: "J2023-6003",
      detection_mjd: 60383.11592,
      detection_snr: 17.3,
      detection_dm_pc_cm3: 31.25,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 0,
      observation_length_hr: 1.94,
      total_pulses: 5,
      burst_rate_per_hr: 2.57
    },
    properties: {
      source_name: "J2023-6003",
      ra_j2000: "20:23:02.400",
      ra_uncertainty_arcsec: 2.3,
      dec_j2000: "-60:03:22.680",
      dec_uncertainty_arcsec: 1.9,
      best_dm_pc_cm3: 31.9,
      distance_kpc: {
        ne2001: 1.2,
        ne2025: 1.9,
        ymw16: 2.4
      },
      period_s: null,
      w50_burst_width_ms: 16.38
    },
    additional_info: {
      discovery_sbid: 74290,
      beam: 27,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_2023-60",
      start_time_utc: "2024-03-14 02:46:55",
      central_freq_mhz: 864.5,
      notes: "Multiple bright bursts observed over a 1.94 hr dwell.",
      associated_survey: "EMU",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 45,
      dispersion_measure: 31.25,
      burst_snr: 17.3,
      dedispersed: true
    }
  },
  {
    source_name: "J1437-6956",
    discovery_info: {
      source_name: "J1437-6956",
      detection_mjd: 60442.54637,
      detection_snr: 9.4,
      detection_dm_pc_cm3: 18.6,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 0,
      observation_length_hr: 9.00,
      total_pulses: 8,
      burst_rate_per_hr: 0.89
    },
    properties: {
      source_name: "J1437-6956",
      ra_j2000: "14:37:13.680",
      ra_uncertainty_arcsec: 2.6,
      dec_j2000: "-69:56:48.480",
      dec_uncertainty_arcsec: 2.1,
      best_dm_pc_cm3: 21.34,
      distance_kpc: {
        ne2001: 0.7,
        ne2025: 0.8,
        ymw16: 0.7
      },
      period_s: 6.85,
      w50_burst_width_ms: 16.65
    },
    additional_info: {
      discovery_sbid: 74900,
      beam: 5,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "FLASH_1437-69",
      start_time_utc: "2024-05-12 13:06:46",
      central_freq_mhz: 864.5,
      notes: "Solved rotation period P0 = 6.85s. 8 single pulses recorded over 9-hour observation.",
      associated_survey: "FLASH",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 45,
      dispersion_measure: 18.6,
      burst_snr: 9.4,
      dedispersed: true
    }
  },
  {
    source_name: "J1734-4957",
    discovery_info: {
      source_name: "J1734-4957",
      detection_mjd: 60507.45223,
      detection_snr: 17.7,
      detection_dm_pc_cm3: 60.0,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 1,
      observation_length_hr: 0.50,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1734-4957",
      ra_j2000: "17:34:18.521",
      ra_uncertainty_arcsec: 2.103,
      dec_j2000: "-49:57:47.126",
      dec_uncertainty_arcsec: 1.152,
      best_dm_pc_cm3: 60.0,
      distance_kpc: {
        ne2001: 1.5,
        ne2025: 1.5,
        ymw16: 2.1
      },
      period_s: null,
      w50_burst_width_ms: 22.0
    },
    additional_info: {
      discovery_sbid: 75611,
      beam: 17,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_1734-49",
      start_time_utc: "2024-07-16 10:51:12",
      central_freq_mhz: 920.5,
      notes: "Arcsecond localisation derived from raw voltage buffer image dump.",
      associated_survey: "VAST",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 50,
      dispersion_measure: 60.0,
      burst_snr: 17.7,
      dedispersed: true
    }
  },
  {
    source_name: "J1820-6250",
    discovery_info: {
      source_name: "J1820-6250",
      detection_mjd: 60518.44429,
      detection_snr: 9.0,
      detection_dm_pc_cm3: 10.0,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 2,
      observation_length_hr: 0.45,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1820-6250",
      ra_j2000: "18:20:06.483",
      ra_uncertainty_arcsec: 2.127,
      dec_j2000: "-62:50:14.887",
      dec_uncertainty_arcsec: 1.934,
      best_dm_pc_cm3: 10.0,
      distance_kpc: {
        ne2001: 0.5,
        ne2025: 0.6,
        ymw16: 0.6
      },
      period_s: 4.8384,
      w50_burst_width_ms: 18.5
    },
    additional_info: {
      discovery_sbid: 75780,
      beam: 29,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1820-62",
      start_time_utc: "2024-07-27 10:39:46",
      central_freq_mhz: 920.5,
      notes: "Solved spin period P0 = 4.8384s with low DM (10 pc cm⁻³).",
      associated_survey: "EMU",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 50,
      dispersion_measure: 10.0,
      burst_snr: 9.0,
      dedispersed: true
    }
  },
  {
    source_name: "J1831-1141",
    discovery_info: {
      source_name: "J1831-1141",
      detection_mjd: 60521.65401,
      detection_snr: 11.1,
      detection_dm_pc_cm3: 46.5,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 1,
      observation_length_hr: 0.55,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1831-1141",
      ra_j2000: "18:31:04.776",
      ra_uncertainty_arcsec: 2.088,
      dec_j2000: "-11:41:16.970",
      dec_uncertainty_arcsec: 1.779,
      best_dm_pc_cm3: 46.5,
      distance_kpc: {
        ne2001: 1.4,
        ne2025: 1.9,
        ymw16: 1.1
      },
      period_s: null,
      w50_burst_width_ms: 20.0
    },
    additional_info: {
      discovery_sbid: 75810,
      beam: 13,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_1831-11",
      start_time_utc: "2024-07-30 15:41:46",
      central_freq_mhz: 920.5,
      notes: "Galactic plane candidate. Targeted in Parkes 64m Medusa follow-up.",
      associated_survey: "VAST",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 50,
      dispersion_measure: 46.5,
      burst_snr: 11.1,
      dedispersed: true
    }
  },
  {
    source_name: "J1150-1143",
    discovery_info: {
      source_name: "J1150-1143",
      detection_mjd: 60525.28084,
      detection_snr: 11.38,
      detection_dm_pc_cm3: 15.0,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 2,
      observation_length_hr: 0.60,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1150-1143",
      ra_j2000: "11:50:28.282",
      ra_uncertainty_arcsec: 1.935,
      dec_j2000: "-11:43:24.277",
      dec_uncertainty_arcsec: 1.840,
      best_dm_pc_cm3: 15.0,
      distance_kpc: {
        ne2001: 0.7,
        ne2025: 1.0,
        ymw16: 0.7
      },
      period_s: 2.125805031,
      w50_burst_width_ms: 19.5
    },
    additional_info: {
      discovery_sbid: 75892,
      beam: 3,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1150-11",
      start_time_utc: "2024-08-03 06:44:24",
      central_freq_mhz: 920.5,
      notes: "Period P0 = 2.126s, low DM of 15.0 pc cm⁻³.",
      associated_survey: "EMU",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 50,
      dispersion_measure: 15.0,
      burst_snr: 11.4,
      dedispersed: true
    }
  },
  {
    source_name: "J0251-4036",
    discovery_info: {
      source_name: "J0251-4036",
      detection_mjd: 60605.77043,
      detection_snr: 10.3,
      detection_dm_pc_cm3: 10.3,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 13.8,
      boxcar_width_samples: 1,
      observation_length_hr: 0.40,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J0251-4036",
      ra_j2000: "02:51:40.540",
      ra_uncertainty_arcsec: 2.9,
      dec_j2000: "-40:36:13.680",
      dec_uncertainty_arcsec: 2.5,
      best_dm_pc_cm3: 10.3,
      distance_kpc: {
        ne2001: 0.5,
        ne2025: 0.7,
        ymw16: 0.9
      },
      period_s: 1.653417863,
      w50_burst_width_ms: 17.8
    },
    additional_info: {
      discovery_sbid: 76602,
      beam: 21,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "WALLABY_0251-40",
      start_time_utc: "2024-10-22 18:29:25",
      central_freq_mhz: 864.5,
      notes: "Solved period P0 = 1.653s from Parkes follow-up.",
      associated_survey: "WALLABY",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 45,
      dispersion_measure: 10.3,
      burst_snr: 10.3,
      dedispersed: true
    }
  },
  {
    source_name: "J1740-6403",
    discovery_info: {
      source_name: "J1740-6403",
      detection_mjd: 60659.22194,
      detection_snr: 10.7,
      detection_dm_pc_cm3: 37.03,
      detection_frequency_mhz: 1272.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 0.22,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1740-6403",
      ra_j2000: "17:40:05.750",
      ra_uncertainty_arcsec: 3.4,
      dec_j2000: "-64:03:03.000",
      dec_uncertainty_arcsec: 2.9,
      best_dm_pc_cm3: 55.8,
      distance_kpc: {
        ne2001: 1.1,
        ne2025: 1.4,
        ymw16: 1.2
      },
      period_s: null,
      w50_burst_width_ms: 7.29
    },
    additional_info: {
      discovery_sbid: 77140,
      beam: 15,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1740-64",
      start_time_utc: "2024-12-15 05:19:35",
      central_freq_mhz: 1272.5,
      notes: "Narrow burst width W50 = 7.29 ms resolved in 3 ms mode.",
      associated_survey: "EMU",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 1272.5,
      duration_ms: 35,
      dispersion_measure: 37.03,
      burst_snr: 10.7,
      dedispersed: true
    }
  },
  {
    source_name: "J0338-2059",
    discovery_info: {
      source_name: "J0338-2059",
      detection_mjd: 60660.53089,
      detection_snr: 8.2,
      detection_dm_pc_cm3: 51.84,
      detection_frequency_mhz: 1272.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 5,
      observation_length_hr: 7.25,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J0338-2059",
      ra_j2000: "03:38:08.190",
      ra_uncertainty_arcsec: 3.8,
      dec_j2000: "-20:59:14.500",
      dec_uncertainty_arcsec: 3.4,
      best_dm_pc_cm3: 52.7,
      distance_kpc: {
        ne2001: 31.9,
        ne2025: 14.5,
        ymw16: 25.0
      },
      period_s: null,
      w50_burst_width_ms: 4.35
    },
    additional_info: {
      discovery_sbid: 77155,
      beam: 26,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_0338-20",
      start_time_utc: "2024-12-16 12:44:28",
      central_freq_mhz: 1272.5,
      notes: "Narrow burst width W50 = 4.35 ms.",
      associated_survey: "VAST",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 1272.5,
      duration_ms: 30,
      dispersion_measure: 51.84,
      burst_snr: 8.2,
      dedispersed: true
    }
  },
  {
    source_name: "J0447-0432",
    discovery_info: {
      source_name: "J0447-0432",
      detection_mjd: 60664.57834,
      detection_snr: 13.1,
      detection_dm_pc_cm3: 29.83,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 2,
      observation_length_hr: 0.09,
      total_pulses: 3,
      burst_rate_per_hr: 32.04
    },
    properties: {
      source_name: "J0447-0432",
      ra_j2000: "04:47:03.785",
      ra_uncertainty_arcsec: 1.876,
      dec_j2000: "-04:32:52.289",
      dec_uncertainty_arcsec: 2.160,
      best_dm_pc_cm3: 30.39,
      distance_kpc: {
        ne2001: 1.3,
        ne2025: 2.1,
        ymw16: 0.7
      },
      period_s: null,
      w50_burst_width_ms: 6.17
    },
    additional_info: {
      discovery_sbid: 77202,
      beam: 2,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_0447-04",
      start_time_utc: "2024-12-20 13:52:48",
      central_freq_mhz: 864.5,
      notes: "3 rapid bursts detected within 5 minutes. High burst activity rate.",
      associated_survey: "EMU",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 35,
      dispersion_measure: 29.83,
      burst_snr: 13.1,
      dedispersed: true
    }
  },
  {
    source_name: "J1949-6843",
    discovery_info: {
      source_name: "J1949-6843",
      detection_mjd: 60727.01613,
      detection_snr: 9.3,
      detection_dm_pc_cm3: 21.0,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 0.73,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1949-6843",
      ra_j2000: "19:49:14.880",
      ra_uncertainty_arcsec: 3.3,
      dec_j2000: "-68:43:34.320",
      dec_uncertainty_arcsec: 2.8,
      best_dm_pc_cm3: 22.77,
      distance_kpc: {
        ne2001: 0.8,
        ne2025: 1.1,
        ymw16: 1.1
      },
      period_s: null,
      w50_burst_width_ms: 4.60
    },
    additional_info: {
      discovery_sbid: 78100,
      beam: 24,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "FLASH_1949-68",
      start_time_utc: "2025-02-21 00:23:13",
      central_freq_mhz: 864.5,
      notes: "Narrow burst width (4.6 ms) detected in high-cadence FLASH survey field.",
      associated_survey: "FLASH",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 30,
      dispersion_measure: 21.0,
      burst_snr: 9.3,
      dedispersed: true
    }
  },
  {
    source_name: "J1323-1243",
    discovery_info: {
      source_name: "J1323-1243",
      detection_mjd: 60774.85949,
      detection_snr: 10.8,
      detection_dm_pc_cm3: 20.59,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 2,
      observation_length_hr: 0.22,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1323-1243",
      ra_j2000: "13:23:30.360",
      ra_uncertainty_arcsec: 3.1,
      dec_j2000: "-12:43:07.360",
      dec_uncertainty_arcsec: 2.7,
      best_dm_pc_cm3: 26.8,
      distance_kpc: {
        ne2001: 1.0,
        ne2025: 1.6,
        ymw16: 2.0
      },
      period_s: null,
      w50_burst_width_ms: 27.77
    },
    additional_info: {
      discovery_sbid: 78720,
      beam: 9,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1323-12",
      start_time_utc: "2025-04-09 20:37:40",
      central_freq_mhz: 832.5,
      notes: "Broad single pulse burst width W50 = 27.8 ms.",
      associated_survey: "EMU",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 60,
      dispersion_measure: 20.59,
      burst_snr: 10.8,
      dedispersed: true
    }
  },
  {
    source_name: "J1555+0049",
    discovery_info: {
      source_name: "J1555+0049",
      detection_mjd: 60786.80237,
      detection_snr: 18.0,
      detection_dm_pc_cm3: 19.12,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 0.15,
      total_pulses: 7,
      burst_rate_per_hr: 47.39
    },
    properties: {
      source_name: "J1555+0049",
      ra_j2000: "15:55:40.631",
      ra_uncertainty_arcsec: 1.231,
      dec_j2000: "+00:49:05.389",
      dec_uncertainty_arcsec: 1.629,
      best_dm_pc_cm3: 19.01,
      distance_kpc: {
        ne2001: 1.1,
        ne2025: 1.5,
        ymw16: 1.3
      },
      period_s: null,
      w50_burst_width_ms: 8.25
    },
    additional_info: {
      discovery_sbid: 78930,
      beam: 10,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "RACS_1555+00",
      start_time_utc: "2025-04-21 19:15:25",
      central_freq_mhz: 864.5,
      notes: "High burst rate (47.4 hr⁻¹), low-DM, excellent arcsecond localization.",
      associated_survey: "RACS",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 40,
      dispersion_measure: 19.12,
      burst_snr: 18.0,
      dedispersed: true
    }
  },
  {
    source_name: "J0155-3648",
    discovery_info: {
      source_name: "J0155-3648",
      detection_mjd: 60834.16852,
      detection_snr: 10.5,
      detection_dm_pc_cm3: 12.0,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 8.35,
      total_pulses: 4,
      burst_rate_per_hr: 0.48
    },
    properties: {
      source_name: "J0155-3648",
      ra_j2000: "01:55:48.360",
      ra_uncertainty_arcsec: 2.941,
      dec_j2000: "-36:48:22.134",
      dec_uncertainty_arcsec: 1.821,
      best_dm_pc_cm3: 16.4,
      distance_kpc: {
        ne2001: 0.5,
        ne2025: 0.8,
        ymw16: 1.2
      },
      period_s: null,
      w50_burst_width_ms: 5.35
    },
    additional_info: {
      discovery_sbid: 79350,
      beam: 23,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "WALLABY_0155-36",
      start_time_utc: "2025-06-08 04:02:40",
      central_freq_mhz: 920.5,
      notes: "Detected during long deep integration in WALLABY field.",
      associated_survey: "WALLABY",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 35,
      dispersion_measure: 12.0,
      burst_snr: 10.5,
      dedispersed: true
    }
  },
  {
    source_name: "J1327-5024",
    discovery_info: {
      source_name: "J1327-5024",
      detection_mjd: 60896.53762,
      detection_snr: 11.2,
      detection_dm_pc_cm3: 96.1,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 1.76,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1327-5024",
      ra_j2000: "13:27:41.392",
      ra_uncertainty_arcsec: 3.260,
      dec_j2000: "-50:24:22.473",
      dec_uncertainty_arcsec: 1.211,
      best_dm_pc_cm3: 100.09,
      distance_kpc: {
        ne2001: 2.6,
        ne2025: 3.6,
        ymw16: 4.0
      },
      period_s: null,
      w50_burst_width_ms: 19.92
    },
    additional_info: {
      discovery_sbid: 79912,
      beam: 1,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1327-50",
      start_time_utc: "2025-08-09 12:54:10",
      central_freq_mhz: 832.5,
      notes: "Moderate DM source in the Southern Milky Way.",
      associated_survey: "EMU",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 50,
      dispersion_measure: 96.1,
      burst_snr: 11.2,
      dedispersed: true
    }
  },
  {
    source_name: "J1248-5039",
    discovery_info: {
      source_name: "J1248-5039",
      detection_mjd: 60914.49940,
      detection_snr: 9.2,
      detection_dm_pc_cm3: 106.4,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 1.80,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1248-5039",
      ra_j2000: "12:48:18.373",
      ra_uncertainty_arcsec: 5.403,
      dec_j2000: "-50:39:04.740",
      dec_uncertainty_arcsec: 1.461,
      best_dm_pc_cm3: 104.7,
      distance_kpc: {
        ne2001: 3.1,
        ne2025: 4.5,
        ymw16: 3.5
      },
      period_s: null,
      w50_burst_width_ms: 19.49
    },
    additional_info: {
      discovery_sbid: 80110,
      beam: 18,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1248-50",
      start_time_utc: "2025-08-27 11:59:08",
      central_freq_mhz: 832.5,
      notes: "High DM source near Centaurus region.",
      associated_survey: "EMU",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 50,
      dispersion_measure: 106.4,
      burst_snr: 9.2,
      dedispersed: true
    }
  },
  {
    source_name: "J1225-3305",
    discovery_info: {
      source_name: "J1225-3305",
      detection_mjd: 60917.37772,
      detection_snr: 11.0,
      detection_dm_pc_cm3: 20.6,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 4,
      observation_length_hr: 1.81,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1225-3305",
      ra_j2000: "12:25:16.519",
      ra_uncertainty_arcsec: 4.027,
      dec_j2000: "-33:05:22.607",
      dec_uncertainty_arcsec: 2.136,
      best_dm_pc_cm3: 2.11,
      distance_kpc: {
        ne2001: 0.8,
        ne2025: 1.2,
        ymw16: 0.9
      },
      period_s: null,
      w50_burst_width_ms: 16.41
    },
    additional_info: {
      discovery_sbid: 80145,
      beam: 30,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_1225-33",
      start_time_utc: "2025-08-30 09:03:55",
      central_freq_mhz: 832.5,
      notes: "Very low best DM fitting (2.11 pc cm⁻³).",
      associated_survey: "VAST",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 45,
      dispersion_measure: 20.6,
      burst_snr: 11.0,
      dedispersed: true
    }
  },
  {
    source_name: "J1525-2322",
    discovery_info: {
      source_name: "J1525-2322",
      detection_mjd: 60922.48495,
      detection_snr: 9.3,
      detection_dm_pc_cm3: 39.5,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 1.81,
      total_pulses: 4,
      burst_rate_per_hr: 2.22
    },
    properties: {
      source_name: "J1525-2322",
      ra_j2000: "15:25:08.073",
      ra_uncertainty_arcsec: 4.445,
      dec_j2000: "-23:22:24.188",
      dec_uncertainty_arcsec: 2.164,
      best_dm_pc_cm3: 37.49,
      distance_kpc: {
        ne2001: 1.6,
        ne2025: 2.4,
        ymw16: 2.7
      },
      period_s: null,
      w50_burst_width_ms: 12.19
    },
    additional_info: {
      discovery_sbid: 80215,
      beam: 16,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_1525-23",
      start_time_utc: "2025-09-04 11:38:19",
      central_freq_mhz: 832.5,
      notes: "4 bursts identified in 1.81 hours. Candidate for period folding.",
      associated_survey: "VAST",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 40,
      dispersion_measure: 39.5,
      burst_snr: 9.3,
      dedispersed: true
    }
  },
  {
    source_name: "J1542-4219",
    discovery_info: {
      source_name: "J1542-4219",
      detection_mjd: 60954.22118,
      detection_snr: 23.3,
      detection_dm_pc_cm3: 61.8,
      detection_frequency_mhz: 832.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 0,
      observation_length_hr: 1.79,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1542-4219",
      ra_j2000: "15:42:21.721",
      ra_uncertainty_arcsec: 0.951,
      dec_j2000: "-42:19:46.324",
      dec_uncertainty_arcsec: 1.130,
      best_dm_pc_cm3: 58.9,
      distance_kpc: {
        ne2001: 49.8,
        ne2025: 16.8,
        ymw16: 25.0
      },
      period_s: null,
      w50_burst_width_ms: 31.75
    },
    additional_info: {
      discovery_sbid: 80550,
      beam: 20,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_1542-42",
      start_time_utc: "2025-10-06 05:18:30",
      central_freq_mhz: 832.5,
      notes: "Bright discovery pulse (S/N = 23.3) with sub-arcsecond RA precision.",
      associated_survey: "EMU",
      followup_status: "Parkes Medusa Observed"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 832.5,
      duration_ms: 65,
      dispersion_measure: 61.8,
      burst_snr: 23.3,
      dedispersed: true
    }
  },
  {
    source_name: "J1839-0818",
    discovery_info: {
      source_name: "J1839-0818",
      detection_mjd: 61055.15916,
      detection_snr: 12.1,
      detection_dm_pc_cm3: 334.9,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 110.0,
      boxcar_width_samples: 0,
      observation_length_hr: 0.80,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1839-0818",
      ra_j2000: "18:39:00.243",
      ra_uncertainty_arcsec: 1.308,
      dec_j2000: "-08:18:02.615",
      dec_uncertainty_arcsec: 2.330,
      best_dm_pc_cm3: 334.9,
      distance_kpc: {
        ne2001: 5.4,
        ne2025: 5.8,
        ymw16: 4.8
      },
      period_s: null,
      w50_burst_width_ms: 55.0
    },
    additional_info: {
      discovery_sbid: 81570,
      beam: 14,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_1839-08",
      start_time_utc: "2026-01-15 03:49:11",
      central_freq_mhz: 920.5,
      notes: "Detected in 110ms commissioning mode. Moderate-high Galactic DM (334.9 pc cm⁻³).",
      associated_survey: "VAST",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 100,
      dispersion_measure: 334.9,
      burst_snr: 12.1,
      dedispersed: true
    }
  },
  {
    source_name: "J0657-1505",
    discovery_info: {
      source_name: "J0657-1505",
      detection_mjd: 61075.44428,
      detection_snr: 9.8,
      detection_dm_pc_cm3: 53.86,
      detection_frequency_mhz: 864.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 0.17,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J0657-1505",
      ra_j2000: "06:57:36.123",
      ra_uncertainty_arcsec: 3.254,
      dec_j2000: "-15:05:05.148",
      dec_uncertainty_arcsec: 2.281,
      best_dm_pc_cm3: 59.37,
      distance_kpc: {
        ne2001: 2.6,
        ne2025: 2.6,
        ymw16: 2.1
      },
      period_s: null,
      w50_burst_width_ms: 17.03
    },
    additional_info: {
      discovery_sbid: 81960,
      beam: 27,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_0657-15",
      start_time_utc: "2026-02-04 10:39:45",
      central_freq_mhz: 864.5,
      notes: "Recent discovery in early 2026.",
      associated_survey: "EMU",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 864.5,
      duration_ms: 45,
      dispersion_measure: 53.86,
      burst_snr: 9.8,
      dedispersed: true
    }
  },
  {
    source_name: "J1809-3422",
    discovery_info: {
      source_name: "J1809-3422",
      detection_mjd: 61091.10312,
      detection_snr: 17.2,
      detection_dm_pc_cm3: 0.0,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 110.0,
      boxcar_width_samples: 0,
      observation_length_hr: 1.77,
      total_pulses: 1,
      burst_rate_per_hr: null
    },
    properties: {
      source_name: "J1809-3422",
      ra_j2000: "18:09:03.063",
      ra_uncertainty_arcsec: 1.027,
      dec_j2000: "-34:22:58.939",
      dec_uncertainty_arcsec: 1.210,
      best_dm_pc_cm3: 17.1,
      distance_kpc: {
        ne2001: 0.6,
        ne2025: 0.8,
        ymw16: 0.7
      },
      period_s: null,
      w50_burst_width_ms: 124.94
    },
    additional_info: {
      discovery_sbid: 82130,
      beam: 6,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "VAST_1809-34",
      start_time_utc: "2026-02-20 02:28:29",
      central_freq_mhz: 920.5,
      notes: "Wide burst width (124.9 ms) discovered with trial DM=0 pc cm⁻³.",
      associated_survey: "VAST",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 150,
      dispersion_measure: 17.1,
      burst_snr: 17.2,
      dedispersed: true
    }
  },
  {
    source_name: "J1200-4548",
    discovery_info: {
      source_name: "J1200-4548",
      detection_mjd: 61099.79330,
      detection_snr: 10.9,
      detection_dm_pc_cm3: 23.7,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 1,
      observation_length_hr: 0.17,
      total_pulses: 8,
      burst_rate_per_hr: 47.31
    },
    properties: {
      source_name: "J1200-4548",
      ra_j2000: "12:00:59.479",
      ra_uncertainty_arcsec: 2.2,
      dec_j2000: "-45:48:15.840",
      dec_uncertainty_arcsec: 1.9,
      best_dm_pc_cm3: 19.9,
      distance_kpc: {
        ne2001: 1.0,
        ne2025: 1.3,
        ymw16: 0.6
      },
      period_s: null,
      w50_burst_width_ms: 17.19
    },
    additional_info: {
      discovery_sbid: 82250,
      beam: 19,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "WALLABY_1200-45",
      start_time_utc: "2026-02-28 19:02:21",
      central_freq_mhz: 920.5,
      notes: "8 bursts detected within 10 minutes (47.3 bursts/hr).",
      associated_survey: "WALLABY",
      followup_status: "Timing Candidate"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 45,
      dispersion_measure: 23.7,
      burst_snr: 10.9,
      dedispersed: true
    }
  },
  {
    source_name: "J0825-5800",
    discovery_info: {
      source_name: "J0825-5800",
      detection_mjd: 61102.48607,
      detection_snr: 9.1,
      detection_dm_pc_cm3: 48.0,
      detection_frequency_mhz: 920.5,
      time_resolution_ms: 3.0,
      boxcar_width_samples: 2,
      observation_length_hr: 1.80,
      total_pulses: 3,
      burst_rate_per_hr: 1.67
    },
    properties: {
      source_name: "J0825-5800",
      ra_j2000: "08:25:36.998",
      ra_uncertainty_arcsec: 2.851,
      dec_j2000: "-58:00:36.881",
      dec_uncertainty_arcsec: 2.220,
      best_dm_pc_cm3: 47.1,
      distance_kpc: {
        ne2001: 1.4,
        ne2025: 0.3,
        ymw16: 0.1
      },
      period_s: null,
      w50_burst_width_ms: 29.97
    },
    additional_info: {
      discovery_sbid: 82310,
      beam: 8,
      link_type: "realtime",
      link_url: "https://research.csiro.au/casda/",
      field: "EMU_0825-58",
      start_time_utc: "2026-03-03 11:40:00",
      central_freq_mhz: 920.5,
      notes: "3 single pulses discovered in 3ms high-resolution mode.",
      associated_survey: "EMU",
      followup_status: "Single Burst"
    },
    dynamic_spectra: {
      bandwidth_mhz: 288,
      center_freq_mhz: 920.5,
      duration_ms: 60,
      dispersion_measure: 48.0,
      burst_snr: 9.1,
      dedispersed: true
    }
  }
];

export function getSummaryStats(data: RRATEntry[]) {
  const total = data.length;
  const lowDmCount = data.filter(d => (d.discovery_info.detection_dm_pc_cm3 ?? 999) < 20).length;
  const timedCount = data.filter(d => d.properties.period_s !== null).length;
  
  const minDm = Math.min(...data.map(d => d.discovery_info.detection_dm_pc_cm3 ?? 9999).filter(v => v > 0));
  const maxDm = Math.max(...data.map(d => d.discovery_info.detection_dm_pc_cm3 ?? 0));
  const maxSnr = Math.max(...data.map(d => d.discovery_info.detection_snr ?? 0));

  return {
    total,
    lowDmCount,
    timedCount,
    minDm: isFinite(minDm) ? minDm : 4.5,
    maxDm: isFinite(maxDm) ? maxDm : 1011.9,
    maxSnr: isFinite(maxSnr) ? maxSnr : 27.2
  };
}
