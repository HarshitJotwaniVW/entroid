/* Auto-assembled per-module screen data. Keyed by `<slug>::<Module Name>`. */
export const moduleScreens = {
  "oil-and-gas::Production & availability": {
    "tabs": [
      "Overview",
      "Wells",
      "Output"
    ],
    "kpis": [
      {
        "v": "94.2%",
        "l": "Fleet availability"
      },
      {
        "v": "128",
        "l": "Producing wells"
      },
      {
        "v": "41,200 bbl",
        "l": "Daily production"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        72,
        78,
        75,
        81,
        84,
        88
      ],
      "label": "Daily output, 6 periods"
    },
    "rows": [
      "Well WP-118 back to full rate",
      "Pipeline PL-7 flow steady at 92%",
      "Refinery R-2 throughput nominal"
    ]
  },
  "oil-and-gas::HSE safety & incidents": {
    "tabs": [
      "Overview",
      "Incidents",
      "TRIR"
    ],
    "kpis": [
      {
        "v": "0.42",
        "l": "TRIR"
      },
      {
        "v": "312",
        "l": "Days no LTI"
      },
      {
        "v": "3",
        "l": "Open incidents"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Near miss",
          "v": 42
        },
        {
          "label": "First aid",
          "v": 28
        },
        {
          "label": "Recordable",
          "v": 12
        },
        {
          "label": "LTI",
          "v": 4
        }
      ]
    },
    "rows": [
      "Near-miss NM-207 logged at Site 4",
      "Toolbox talk closed on 14 crews",
      "Incident INC-88 under review"
    ]
  },
  "oil-and-gas::Asset integrity": {
    "tabs": [
      "Overview",
      "Inspections",
      "Risk"
    ],
    "kpis": [
      {
        "v": "96%",
        "l": "RBI coverage"
      },
      {
        "v": "7",
        "l": "Overdue inspections"
      },
      {
        "v": "12",
        "l": "Assets at risk"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Low",
          "v": 58
        },
        {
          "label": "Medium",
          "v": 30
        },
        {
          "label": "High",
          "v": 9
        },
        {
          "label": "Critical",
          "v": 3
        }
      ]
    },
    "rows": [
      "Vessel V-14 flagged high risk",
      "Inspection WO-6621 scheduled",
      "Pipeline segment PL-3 cleared"
    ]
  },
  "oil-and-gas::Permits & compliance": {
    "tabs": [
      "Overview",
      "Permits",
      "Approvals"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Active permits"
      },
      {
        "v": "6",
        "l": "Awaiting approval"
      },
      {
        "v": "2",
        "l": "Expiring this week"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Approved",
          "v": 48
        },
        {
          "label": "Pending",
          "v": 6
        },
        {
          "label": "Expiring",
          "v": 2
        },
        {
          "label": "Draft",
          "v": 9
        }
      ]
    },
    "rows": [
      "Hot-work permit HW-52 approved",
      "Permit PT-19 awaiting sign-off",
      "Flare consent renewed for Site 2"
    ]
  },
  "oil-and-gas::Work orders & maintenance": {
    "tabs": [
      "Overview",
      "Work orders",
      "Backlog"
    ],
    "kpis": [
      {
        "v": "214",
        "l": "Open work orders"
      },
      {
        "v": "38",
        "l": "Backlog items"
      },
      {
        "v": "87%",
        "l": "PM compliance"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Preventive",
          "v": 62
        },
        {
          "label": "Corrective",
          "v": 48
        },
        {
          "label": "Breakdown",
          "v": 18
        },
        {
          "label": "Inspection",
          "v": 34
        }
      ]
    },
    "rows": [
      "WO-4471 closed on Pump P-9",
      "Corrective job raised at Site 3",
      "Backlog down 6 this week"
    ]
  },
  "oil-and-gas::Asset-network map & site triage": {
    "tabs": [
      "Overview",
      "Map",
      "Triage"
    ],
    "kpis": [
      {
        "v": "46",
        "l": "Sites monitored"
      },
      {
        "v": "5",
        "l": "Sites need attention"
      },
      {
        "v": "2",
        "l": "Critical sites"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Basin",
      "nodes": [
        "Wells",
        "Pipelines",
        "Refineries",
        "Terminals"
      ]
    },
    "rows": [
      "Site 7 raised to critical status",
      "Pipeline node PL-5 back to normal",
      "Attention list ranked, 5 sites"
    ]
  },
  "wind::Development pipeline": {
    "tabs": [
      "Overview",
      "Pipeline",
      "Stages"
    ],
    "kpis": [
      {
        "v": "18",
        "l": "Sites in pipeline"
      },
      {
        "v": "1,240 MW",
        "l": "Pipeline capacity"
      },
      {
        "v": "4",
        "l": "Nearing on-grid"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Planning",
        "Development",
        "Construction",
        "Commissioning"
      ]
    },
    "rows": [
      "Site Aster moved to construction",
      "Commissioning started at Site Birch",
      "Planning consent granted, Site Cedar"
    ]
  },
  "wind::Sites & turbines": {
    "tabs": [
      "Overview",
      "Turbines",
      "Output"
    ],
    "kpis": [
      {
        "v": "22",
        "l": "Wind farms"
      },
      {
        "v": "486",
        "l": "Turbines online"
      },
      {
        "v": "91%",
        "l": "Fleet availability"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Running",
          "v": 74
        },
        {
          "label": "Curtailed",
          "v": 14
        },
        {
          "label": "Idle",
          "v": 8
        },
        {
          "label": "Fault",
          "v": 4
        }
      ]
    },
    "rows": [
      "Turbine T-214 back to running",
      "Farm North curtailed to 60%",
      "Site output steady at 640 MW"
    ]
  },
  "wind::Monitoring & alarms": {
    "tabs": [
      "Overview",
      "Alarms",
      "Faults"
    ],
    "kpis": [
      {
        "v": "31",
        "l": "Active alarms"
      },
      {
        "v": "4",
        "l": "Critical faults"
      },
      {
        "v": "27",
        "l": "Warnings"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 4
        },
        {
          "label": "Major",
          "v": 11
        },
        {
          "label": "Minor",
          "v": 16
        },
        {
          "label": "Info",
          "v": 22
        }
      ]
    },
    "rows": [
      "Turbine T-118 pitch fault raised",
      "Gearbox temp warning on T-77",
      "Alarm A-3391 acknowledged"
    ]
  },
  "wind::Maintenance": {
    "tabs": [
      "Overview",
      "Work orders",
      "Backlog"
    ],
    "kpis": [
      {
        "v": "96",
        "l": "Open work orders"
      },
      {
        "v": "22",
        "l": "Backlog items"
      },
      {
        "v": "89%",
        "l": "PM compliance"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Preventive",
          "v": 54
        },
        {
          "label": "Corrective",
          "v": 30
        },
        {
          "label": "Inspection",
          "v": 22
        },
        {
          "label": "Retrofit",
          "v": 10
        }
      ]
    },
    "rows": [
      "WO-2210 closed on Turbine T-45",
      "Blade inspection scheduled, T-90",
      "Corrective job raised at Farm East"
    ]
  },
  "wind::Digital twin": {
    "tabs": [
      "Overview",
      "Model",
      "Health"
    ],
    "kpis": [
      {
        "v": "486",
        "l": "Assets modelled"
      },
      {
        "v": "93",
        "l": "Health index"
      },
      {
        "v": "6",
        "l": "Scenarios run"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        88,
        90,
        89,
        92,
        91,
        93
      ],
      "label": "Fleet health index"
    },
    "rows": [
      "Twin updated for Turbine T-214",
      "Decline scenario run for Farm North",
      "Condition score improved to 93"
    ]
  },
  "wind::Sustainability": {
    "tabs": [
      "Overview",
      "Carbon",
      "ESG"
    ],
    "kpis": [
      {
        "v": "1.8 TWh",
        "l": "Annual generation"
      },
      {
        "v": "742 kt",
        "l": "CO2 avoided"
      },
      {
        "v": "98%",
        "l": "Renewable share"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        64,
        70,
        68,
        75,
        80,
        86
      ],
      "label": "Monthly generation"
    },
    "rows": [
      "March generation reported at 158 GWh",
      "Carbon avoided updated to 742 kt",
      "ESG metrics compiled for the quarter"
    ]
  },
  "telecom::Geospatial network map": {
    "tabs": [
      "Overview",
      "Map",
      "Sites"
    ],
    "kpis": [
      {
        "v": "1,420",
        "l": "Sites mapped"
      },
      {
        "v": "4",
        "l": "Site types"
      },
      {
        "v": "96%",
        "l": "Backhaul linked"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Macro",
          "v": 58
        },
        {
          "label": "Small-cell",
          "v": 24
        },
        {
          "label": "DAS",
          "v": 10
        },
        {
          "label": "C-RAN",
          "v": 8
        }
      ]
    },
    "rows": [
      "Site MC-441 added to the map",
      "Backhaul link confirmed, SC-112",
      "Geo-fence set for DAS cluster 3"
    ]
  },
  "telecom::Activation pipeline": {
    "tabs": [
      "Overview",
      "Stages",
      "On-Air"
    ],
    "kpis": [
      {
        "v": "1,420",
        "l": "Sites in pipeline"
      },
      {
        "v": "268",
        "l": "On-air this quarter"
      },
      {
        "v": "3",
        "l": "Pipeline stages"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Build",
        "Integration",
        "On-Air"
      ]
    },
    "rows": [
      "Site SC-118 moved to Integration",
      "Site MC-77 reached On-Air",
      "Build completed at DAS cluster 5"
    ]
  },
  "telecom::Rollout velocity & bottlenecks": {
    "tabs": [
      "Overview",
      "Velocity",
      "Bottleneck"
    ],
    "kpis": [
      {
        "v": "34",
        "l": "Sites per week"
      },
      {
        "v": "Integration",
        "l": "Bottleneck stage"
      },
      {
        "v": "12 days",
        "l": "Median cycle time"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        22,
        26,
        24,
        30,
        32,
        34
      ],
      "label": "Sites per week to on-air"
    },
    "rows": [
      "Velocity up to 34 sites per week",
      "Integration named the bottleneck",
      "Cycle time down 2 days this week"
    ]
  },
  "telecom::RF coordination & backhaul": {
    "tabs": [
      "Overview",
      "RF plan",
      "Backhaul"
    ],
    "kpis": [
      {
        "v": "1,180",
        "l": "Sites RF cleared"
      },
      {
        "v": "22",
        "l": "Interference flags"
      },
      {
        "v": "94%",
        "l": "Backhaul ready"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Cleared",
          "v": 78
        },
        {
          "label": "Planning",
          "v": 14
        },
        {
          "label": "Conflict",
          "v": 5
        },
        {
          "label": "On hold",
          "v": 3
        }
      ]
    },
    "rows": [
      "RF plan approved for SC-220",
      "Interference flag cleared at MC-19",
      "Backhaul path set for C-RAN hub 2"
    ]
  },
  "telecom::Permits & compliance": {
    "tabs": [
      "Overview",
      "Permits",
      "Holds"
    ],
    "kpis": [
      {
        "v": "1,060",
        "l": "Permits approved"
      },
      {
        "v": "48",
        "l": "Awaiting decision"
      },
      {
        "v": "14",
        "l": "Sites on hold"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Approved",
          "v": 74
        },
        {
          "label": "Pending",
          "v": 14
        },
        {
          "label": "On hold",
          "v": 8
        },
        {
          "label": "Rejected",
          "v": 4
        }
      ]
    },
    "rows": [
      "Permit PT-882 approved for MC-51",
      "Jurisdiction hold flagged, 14 sites",
      "Zoning consent cleared at SC-77"
    ]
  },
  "telecom::Operational risk & alarms": {
    "tabs": [
      "Overview",
      "Risk",
      "Alarms"
    ],
    "kpis": [
      {
        "v": "Medium",
        "l": "Risk index"
      },
      {
        "v": "9",
        "l": "Red sites"
      },
      {
        "v": "5",
        "l": "P1 escalations"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "P1",
          "v": 5
        },
        {
          "label": "P2",
          "v": 14
        },
        {
          "label": "P3",
          "v": 28
        },
        {
          "label": "P4",
          "v": 41
        }
      ]
    },
    "rows": [
      "Site MC-330 raised to red status",
      "P1 escalation opened on backhaul",
      "Risk index steady at medium"
    ]
  },
  "renewable::Plant lifecycle": {
    "tabs": [
      "Overview",
      "Stages",
      "Plants"
    ],
    "kpis": [
      {
        "v": "42",
        "l": "Plants in pipeline"
      },
      {
        "v": "18",
        "l": "Generating on-grid"
      },
      {
        "v": "5",
        "l": "Lifecycle stages"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Planning",
          "v": 40
        },
        {
          "label": "Design",
          "v": 30
        },
        {
          "label": "Construct",
          "v": 48
        },
        {
          "label": "Commission",
          "v": 22
        },
        {
          "label": "On-grid",
          "v": 60
        }
      ]
    },
    "rows": [
      "Plant Aravalli-2 moved to commissioning",
      "Design pack approved for Thar-North",
      "Plant Kutch-5 reached on-grid"
    ]
  },
  "renewable::Construction & commissioning": {
    "tabs": [
      "Overview",
      "Progress",
      "Handover"
    ],
    "kpis": [
      {
        "v": "12",
        "l": "In construction"
      },
      {
        "v": "6",
        "l": "In commissioning"
      },
      {
        "v": "87%",
        "l": "On-schedule sites"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        54,
        60,
        66,
        71,
        78,
        84
      ],
      "label": "Construction completion, 6 months"
    },
    "rows": [
      "Site Kutch-5 civil works complete",
      "Commissioning tests passed at Thar-North",
      "Grid handover scheduled for Aravalli-2"
    ]
  },
  "renewable::Portfolio map & capacity": {
    "tabs": [
      "Overview",
      "Map",
      "Capacity"
    ],
    "kpis": [
      {
        "v": "42",
        "l": "Plants on map"
      },
      {
        "v": "3.8 GW",
        "l": "Portfolio capacity"
      },
      {
        "v": "6",
        "l": "Regions"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "West",
          "v": 72
        },
        {
          "label": "South",
          "v": 58
        },
        {
          "label": "North",
          "v": 44
        },
        {
          "label": "East",
          "v": 30
        }
      ]
    },
    "rows": [
      "Region West holds 1.4 GW across 14 plants",
      "Capacity band 50-100 MW leads the fleet",
      "Plant filter set to commissioning status"
    ]
  },
  "renewable::Live generation": {
    "tabs": [
      "Overview",
      "Output",
      "SCADA"
    ],
    "kpis": [
      {
        "v": "2,140 MW",
        "l": "Fleet output now"
      },
      {
        "v": "38",
        "l": "Plants generating"
      },
      {
        "v": "12s",
        "l": "SCADA refresh"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        40,
        55,
        72,
        88,
        80,
        62
      ],
      "label": "Fleet output through the day"
    },
    "rows": [
      "Plant Kutch-5 exporting 96 MW",
      "SCADA stream refreshed 12 seconds ago",
      "Fleet output at 2,140 MW"
    ]
  },
  "renewable::Performance ratio": {
    "tabs": [
      "Overview",
      "Ratio",
      "Plants"
    ],
    "kpis": [
      {
        "v": "83.4%",
        "l": "Avg performance ratio"
      },
      {
        "v": "3",
        "l": "Plants below rating"
      },
      {
        "v": "79.1%",
        "l": "Lowest plant PR"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Kutch-5",
          "v": 88
        },
        {
          "label": "Thar-N",
          "v": 84
        },
        {
          "label": "Aravalli",
          "v": 81
        },
        {
          "label": "Barmer",
          "v": 79
        },
        {
          "label": "Jaisal",
          "v": 86
        }
      ]
    },
    "rows": [
      "Plant Barmer flagged below rated PR",
      "Fleet performance ratio at 83.4 percent",
      "Plant Kutch-5 leads at 88 percent"
    ]
  },
  "solar::Development pipeline": {
    "tabs": [
      "Overview",
      "Pipeline",
      "Stages"
    ],
    "kpis": [
      {
        "v": "28",
        "l": "Parks in pipeline"
      },
      {
        "v": "1.9 GW",
        "l": "Pipeline capacity"
      },
      {
        "v": "9",
        "l": "Nearing commissioning"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Planning",
          "v": 46
        },
        {
          "label": "Design",
          "v": 34
        },
        {
          "label": "Construct",
          "v": 52
        },
        {
          "label": "Commission",
          "v": 20
        }
      ]
    },
    "rows": [
      "Park Bhadla-3 entered construction",
      "Design approved for Pavagada-North",
      "Park Kamuthi-2 commissioning to on-grid"
    ]
  },
  "solar::Parks & inverters": {
    "tabs": [
      "Overview",
      "Map",
      "Inverters"
    ],
    "kpis": [
      {
        "v": "24",
        "l": "Parks on map"
      },
      {
        "v": "1,860",
        "l": "Inverters online"
      },
      {
        "v": "96%",
        "l": "Inverters generating"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Generating",
          "v": 88
        },
        {
          "label": "Curtailed",
          "v": 8
        },
        {
          "label": "Offline",
          "v": 4
        }
      ]
    },
    "rows": [
      "Park Bhadla-3 generating on all inverters",
      "Inverter INV-217 offline at Pavagada",
      "String fault cleared at Kamuthi-2"
    ]
  },
  "solar::Monitoring & generation": {
    "tabs": [
      "Overview",
      "Alarms",
      "Strings"
    ],
    "kpis": [
      {
        "v": "742 W/m2",
        "l": "Irradiance now"
      },
      {
        "v": "1,420 MW",
        "l": "PV generation now"
      },
      {
        "v": "14",
        "l": "Active alarms"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 3
        },
        {
          "label": "Major",
          "v": 6
        },
        {
          "label": "Minor",
          "v": 18
        },
        {
          "label": "Info",
          "v": 40
        }
      ]
    },
    "rows": [
      "Irradiance at 742 watts per square metre",
      "String SF-14 flagged at inverter INV-217",
      "3 critical alarms open across the fleet"
    ]
  },
  "solar::Performance ratio": {
    "tabs": [
      "Overview",
      "Ratio",
      "Parks"
    ],
    "kpis": [
      {
        "v": "84.1%",
        "l": "Avg performance ratio"
      },
      {
        "v": "1,420 MW",
        "l": "Output against rating"
      },
      {
        "v": "2",
        "l": "Parks below rating"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Bhadla-3",
          "v": 87
        },
        {
          "label": "Pavagada",
          "v": 83
        },
        {
          "label": "Kamuthi",
          "v": 80
        },
        {
          "label": "Kurnool",
          "v": 85
        }
      ]
    },
    "rows": [
      "Park Kamuthi-2 below rated PR at 80 percent",
      "Fleet performance ratio at 84.1 percent",
      "Output measured against 1,700 MW rating"
    ]
  },
  "solar::Maintenance": {
    "tabs": [
      "Overview",
      "Orders",
      "Backlog"
    ],
    "kpis": [
      {
        "v": "36",
        "l": "Open work orders"
      },
      {
        "v": "11",
        "l": "Preventive due"
      },
      {
        "v": "5",
        "l": "Corrective backlog"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Preventive",
          "v": 48
        },
        {
          "label": "Corrective",
          "v": 30
        },
        {
          "label": "Inspection",
          "v": 22
        }
      ]
    },
    "rows": [
      "Work order WO-4471 raised for INV-217",
      "Panel cleaning scheduled at Bhadla-3",
      "Corrective backlog down to 5 orders"
    ]
  },
  "solar::Sustainability": {
    "tabs": [
      "Overview",
      "Carbon",
      "ESG"
    ],
    "kpis": [
      {
        "v": "612 GWh",
        "l": "Generation this year"
      },
      {
        "v": "438 kt",
        "l": "CO2 avoided"
      },
      {
        "v": "92",
        "l": "ESG score"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        42,
        50,
        63,
        71,
        80,
        88
      ],
      "label": "Monthly generation, GWh"
    },
    "rows": [
      "612 GWh generated across the fleet",
      "438 kilotonnes of CO2 avoided this year",
      "ESG report exported for the quarter"
    ]
  },
  "iot::OT data collection & parsing": {
    "tabs": [
      "Overview",
      "Feeds",
      "Parsing"
    ],
    "kpis": [
      {
        "v": "48,200",
        "l": "Devices reporting"
      },
      {
        "v": "1.2M/min",
        "l": "Messages parsed"
      },
      {
        "v": "99.6%",
        "l": "Parse success rate"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        60,
        64,
        71,
        68,
        75,
        82
      ],
      "label": "Messages parsed per minute"
    },
    "rows": [
      "Modbus feed parsed from 3,200 gauges",
      "Parse success rate holding at 99.6 percent",
      "New protocol mapping added for MQTT feed"
    ]
  },
  "iot::Any device type": {
    "tabs": [
      "Overview",
      "Devices",
      "Onboarding"
    ],
    "kpis": [
      {
        "v": "48,200",
        "l": "Devices onboarded"
      },
      {
        "v": "14",
        "l": "Device types"
      },
      {
        "v": "126",
        "l": "Onboarded today"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Gauges",
          "v": 64
        },
        {
          "label": "Loggers",
          "v": 52
        },
        {
          "label": "Radios",
          "v": 38
        },
        {
          "label": "Telematics",
          "v": 46
        }
      ]
    },
    "rows": [
      "1,200 temperature loggers onboarded",
      "Telematics unit type added to the platform",
      "126 devices onboarded in the last shift"
    ]
  },
  "iot::Use-case dashboards": {
    "tabs": [
      "Overview",
      "Dashboards",
      "Use cases"
    ],
    "kpis": [
      {
        "v": "9",
        "l": "Active dashboards"
      },
      {
        "v": "3",
        "l": "Use-case families"
      },
      {
        "v": "48,200",
        "l": "Devices mapped"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Telemetry",
      "nodes": [
        "Cold-chain",
        "Fleet",
        "Telecom",
        "Energy"
      ]
    },
    "rows": [
      "Cold-chain dashboard tracking 4,100 loggers",
      "Fleet dashboard added for telematics feed",
      "Telecom radios mapped to network view"
    ]
  },
  "iot::Config actions": {
    "tabs": [
      "Overview",
      "Actions",
      "Queue"
    ],
    "kpis": [
      {
        "v": "318",
        "l": "Config actions today"
      },
      {
        "v": "99.1%",
        "l": "Actions applied"
      },
      {
        "v": "6",
        "l": "Pending confirmation"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Setpoint",
          "v": 54
        },
        {
          "label": "Interval",
          "v": 36
        },
        {
          "label": "Threshold",
          "v": 42
        },
        {
          "label": "Reboot",
          "v": 18
        }
      ]
    },
    "rows": [
      "Setpoint pushed to 240 cold-chain loggers",
      "Reporting interval changed on fleet units",
      "318 config actions applied today"
    ]
  },
  "iot::OTA firmware upgrades": {
    "tabs": [
      "Overview",
      "Rollout",
      "Versions"
    ],
    "kpis": [
      {
        "v": "12,400",
        "l": "Devices on latest"
      },
      {
        "v": "84%",
        "l": "Fleet updated"
      },
      {
        "v": "3",
        "l": "Rollout waves"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        10,
        28,
        45,
        62,
        74,
        84
      ],
      "label": "Firmware rollout progress"
    },
    "rows": [
      "Firmware v4.2 pushed to wave 2 devices",
      "Fleet at 84 percent on latest firmware",
      "Rollback held for 40 devices on wave 1"
    ]
  },
  "iot::Processing queues & telemetry": {
    "tabs": [
      "Overview",
      "Queues",
      "Telemetry"
    ],
    "kpis": [
      {
        "v": "1.2M/min",
        "l": "Telemetry ingested"
      },
      {
        "v": "420",
        "l": "Queue depth"
      },
      {
        "v": "180ms",
        "l": "Processing latency"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Cold-chain",
          "v": 38
        },
        {
          "label": "Fleet",
          "v": 52
        },
        {
          "label": "Telecom",
          "v": 44
        },
        {
          "label": "Energy",
          "v": 26
        }
      ]
    },
    "rows": [
      "Cold-chain queue processing 4,100 streams",
      "Processing latency steady at 180 ms",
      "Queue depth cleared to 420 messages"
    ]
  },
  "ev::Site planning": {
    "tabs": [
      "Overview",
      "Scoring",
      "Candidates"
    ],
    "kpis": [
      {
        "v": "146",
        "l": "Candidate sites"
      },
      {
        "v": "32",
        "l": "High-score clusters"
      },
      {
        "v": "88",
        "l": "Top site score"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "NH-48",
          "v": 88
        },
        {
          "label": "Ring Rd",
          "v": 76
        },
        {
          "label": "Sector-18",
          "v": 71
        },
        {
          "label": "Bypass",
          "v": 64
        },
        {
          "label": "Mall Rd",
          "v": 58
        }
      ]
    },
    "rows": [
      "Site NH-48 scored 88 on demand and density",
      "32 high-scoring clusters surfaced this week",
      "Candidate list ranked for capital allocation"
    ]
  },
  "ev::Rollout funnel": {
    "tabs": [
      "Overview",
      "Funnel",
      "Stages"
    ],
    "kpis": [
      {
        "v": "146",
        "l": "Sites in funnel"
      },
      {
        "v": "38",
        "l": "Live stations"
      },
      {
        "v": "5",
        "l": "Funnel stages"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Proposed",
          "v": 60
        },
        {
          "label": "Survey",
          "v": 40
        },
        {
          "label": "Construct",
          "v": 34
        },
        {
          "label": "Commission",
          "v": 18
        },
        {
          "label": "Live",
          "v": 38
        }
      ]
    },
    "rows": [
      "Site Sector-18 moved to commissioning",
      "12 sites entered survey this week",
      "Station NH-48 went live"
    ]
  },
  "ev::Grid interconnection & DISCOM SLA": {
    "tabs": [
      "Overview",
      "Interconnect",
      "SLA"
    ],
    "kpis": [
      {
        "v": "54",
        "l": "Interconnections open"
      },
      {
        "v": "7",
        "l": "SLA at risk"
      },
      {
        "v": "62 days",
        "l": "Avg energization time"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Transform",
          "v": 40
        },
        {
          "label": "Meter",
          "v": 58
        },
        {
          "label": "Feeder",
          "v": 34
        },
        {
          "label": "Approval",
          "v": 48
        }
      ]
    },
    "rows": [
      "DISCOM approval pending for 7 sites",
      "Substation transformer flagged long-lead",
      "Site Ring Rd energized within SLA"
    ]
  },
  "ev::Network operations": {
    "tabs": [
      "Overview",
      "Stations",
      "Sessions"
    ],
    "kpis": [
      {
        "v": "38",
        "l": "Stations live"
      },
      {
        "v": "312",
        "l": "Chargers online"
      },
      {
        "v": "97.8%",
        "l": "Network uptime"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        30,
        48,
        66,
        82,
        74,
        58
      ],
      "label": "Charging sessions through the day"
    },
    "rows": [
      "Station NH-48 running all 8 chargers",
      "Charger CP-114 offline at Ring Rd",
      "312 chargers online across the network"
    ]
  },
  "ev::Throughput, energy & uptime": {
    "tabs": [
      "Overview",
      "Energy",
      "Uptime"
    ],
    "kpis": [
      {
        "v": "18.4 MWh",
        "l": "Energy delivered today"
      },
      {
        "v": "4,120",
        "l": "Sessions today"
      },
      {
        "v": "97.8%",
        "l": "Network uptime"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        52,
        58,
        64,
        60,
        71,
        80
      ],
      "label": "Energy delivered, 7 days"
    },
    "rows": [
      "18.4 MWh delivered across the network today",
      "Station NH-48 led with 2,140 kWh",
      "Network uptime held at 97.8 percent"
    ]
  },
  "ev::Charging network map": {
    "tabs": [
      "Overview",
      "Map",
      "Status"
    ],
    "kpis": [
      {
        "v": "146",
        "l": "Sites on map"
      },
      {
        "v": "38",
        "l": "Live stations"
      },
      {
        "v": "54",
        "l": "Energizing sites"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Planned",
          "v": 54
        },
        {
          "label": "Energizing",
          "v": 40
        },
        {
          "label": "Live",
          "v": 38
        }
      ]
    },
    "rows": [
      "38 live stations shown on the network map",
      "54 sites energizing across regions",
      "Map filter set to live stations"
    ]
  },
  "atm-rollout::Site delivery lifecycle": {
    "tabs": [
      "Overview",
      "Stages",
      "Sites"
    ],
    "kpis": [
      {
        "v": "3,240",
        "l": "Sites in delivery"
      },
      {
        "v": "05",
        "l": "Delivery stages"
      },
      {
        "v": "412",
        "l": "Commissioned"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Survey",
          "v": 88
        },
        {
          "label": "Install",
          "v": 72
        },
        {
          "label": "Integrate",
          "v": 58
        },
        {
          "label": "Testing",
          "v": 44
        },
        {
          "label": "Commission",
          "v": 30
        }
      ]
    },
    "rows": [
      "Site DEL-2231 moved to commissioning",
      "Integration cleared on 46 sites",
      "Survey booked for 120 new sites"
    ]
  },
  "atm-rollout::Work-order delivery": {
    "tabs": [
      "Overview",
      "Orders",
      "Vendors"
    ],
    "kpis": [
      {
        "v": "9,180",
        "l": "Work orders open"
      },
      {
        "v": "86%",
        "l": "On schedule"
      },
      {
        "v": "34",
        "l": "Vendors active"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Survey",
          "v": 64
        },
        {
          "label": "Civil",
          "v": 58
        },
        {
          "label": "Install",
          "v": 71
        },
        {
          "label": "Commission",
          "v": 42
        }
      ]
    },
    "rows": [
      "Work order WO-5540 closed on site",
      "Civil works released to 3 vendors",
      "Install orders raised for 88 sites"
    ]
  },
  "atm-rollout::Planned vs actual execution": {
    "tabs": [
      "Overview",
      "Plan",
      "Actual"
    ],
    "kpis": [
      {
        "v": "94%",
        "l": "Plan attainment"
      },
      {
        "v": "+6",
        "l": "Sites ahead of plan"
      },
      {
        "v": "1,120",
        "l": "Completed this month"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        52,
        58,
        63,
        60,
        68,
        74
      ],
      "label": "Completions per month"
    },
    "rows": [
      "March actuals matched plan at 94%",
      "42 completions logged this week",
      "Plan variance closed on North program"
    ]
  },
  "atm-rollout::Delivery by program and region": {
    "tabs": [
      "Overview",
      "Programs",
      "Regions"
    ],
    "kpis": [
      {
        "v": "12",
        "l": "Active programs"
      },
      {
        "v": "North",
        "l": "Leading region"
      },
      {
        "v": "04",
        "l": "Site types tracked"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "North",
          "v": 82
        },
        {
          "label": "South",
          "v": 68
        },
        {
          "label": "East",
          "v": 55
        },
        {
          "label": "West",
          "v": 73
        }
      ]
    },
    "rows": [
      "North program leads at 82% delivered",
      "Metro site type ahead of rural",
      "West region gained 9 completions"
    ]
  },
  "atm-rollout::Delivery velocity": {
    "tabs": [
      "Overview",
      "Velocity",
      "Trend"
    ],
    "kpis": [
      {
        "v": "58 / wk",
        "l": "Sites completed weekly"
      },
      {
        "v": "+12%",
        "l": "Pace vs last month"
      },
      {
        "v": "6.2 wks",
        "l": "Avg site cycle time"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        40,
        44,
        48,
        52,
        55,
        58
      ],
      "label": "Sites per week"
    },
    "rows": [
      "Weekly pace reached 58 sites",
      "Cycle time trimmed to 6.2 weeks",
      "Velocity trend up for six weeks"
    ]
  },
  "atm-rollout::Milestones and completions": {
    "tabs": [
      "Overview",
      "Milestones",
      "Rollup"
    ],
    "kpis": [
      {
        "v": "7,640",
        "l": "Milestones cleared"
      },
      {
        "v": "3,120",
        "l": "Sites completed"
      },
      {
        "v": "92%",
        "l": "Rollup on plan"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Program A",
          "v": 90
        },
        {
          "label": "Program B",
          "v": 76
        },
        {
          "label": "Program C",
          "v": 64
        },
        {
          "label": "Program D",
          "v": 81
        }
      ]
    },
    "rows": [
      "Commissioning milestone hit on 120 sites",
      "Program B rollup updated to 76%",
      "Completions rolled up across 34 vendors"
    ]
  },
  "wealth::Group AUM & client base": {
    "tabs": [
      "Overview",
      "AUM",
      "Clients"
    ],
    "kpis": [
      {
        "v": "48,200 Cr",
        "l": "Group AUM"
      },
      {
        "v": "14,600",
        "l": "Active clients"
      },
      {
        "v": "+8.4%",
        "l": "AUM growth YoY"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        60,
        63,
        67,
        70,
        74,
        79
      ],
      "label": "AUM by quarter"
    },
    "rows": [
      "Group AUM crossed 48,200 Cr",
      "312 clients onboarded this quarter",
      "AUM growth held at 8.4 percent"
    ]
  },
  "wealth::Net-flow intelligence": {
    "tabs": [
      "Overview",
      "Flows",
      "Net"
    ],
    "kpis": [
      {
        "v": "+1,240 Cr",
        "l": "Net flow this period"
      },
      {
        "v": "3,180 Cr",
        "l": "Subscriptions"
      },
      {
        "v": "1,940 Cr",
        "l": "Redemptions"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Jan",
          "v": 58
        },
        {
          "label": "Feb",
          "v": 64
        },
        {
          "label": "Mar",
          "v": 71
        },
        {
          "label": "Apr",
          "v": 66
        }
      ]
    },
    "rows": [
      "Net flow positive at 1,240 Cr",
      "Subscriptions led redemptions in March",
      "Redemption spike flagged on one book"
    ]
  },
  "wealth::Revenue economics": {
    "tabs": [
      "Overview",
      "Revenue",
      "Fees"
    ],
    "kpis": [
      {
        "v": "640 Cr",
        "l": "Run-rate revenue"
      },
      {
        "v": "62%",
        "l": "Management fee share"
      },
      {
        "v": "05",
        "l": "Fee lines tracked"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Mgmt",
          "v": 62
        },
        {
          "label": "Trail",
          "v": 18
        },
        {
          "label": "Perf",
          "v": 9
        },
        {
          "label": "AIF",
          "v": 7
        },
        {
          "label": "Advisory",
          "v": 4
        }
      ]
    },
    "rows": [
      "Run-rate revenue at 640 Cr",
      "Management fees drove 62% of revenue",
      "Performance fees booked on two funds"
    ]
  },
  "wealth::RM productivity": {
    "tabs": [
      "Overview",
      "RMs",
      "Output"
    ],
    "kpis": [
      {
        "v": "186",
        "l": "Relationship managers"
      },
      {
        "v": "259 Cr",
        "l": "AUM per RM"
      },
      {
        "v": "+5.1%",
        "l": "Productivity YoY"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Tier 1",
          "v": 88
        },
        {
          "label": "Tier 2",
          "v": 66
        },
        {
          "label": "Tier 3",
          "v": 48
        },
        {
          "label": "Tier 4",
          "v": 34
        }
      ]
    },
    "rows": [
      "AUM per RM reached 259 Cr",
      "Tier 1 desks led on productivity",
      "12 RMs moved up a performance band"
    ]
  },
  "wealth::Client health": {
    "tabs": [
      "Overview",
      "NPS",
      "Growth"
    ],
    "kpis": [
      {
        "v": "62",
        "l": "Client NPS"
      },
      {
        "v": "+8.4%",
        "l": "Client growth"
      },
      {
        "v": "91%",
        "l": "Retention rate"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        54,
        56,
        58,
        59,
        61,
        62
      ],
      "label": "NPS by quarter"
    },
    "rows": [
      "Client NPS climbed to 62",
      "Retention held at 91 percent",
      "Growth steady across five quarters"
    ]
  },
  "wealth::Compliance & board reporting": {
    "tabs": [
      "Overview",
      "Compliance",
      "Board"
    ],
    "kpis": [
      {
        "v": "Clear",
        "l": "Compliance status"
      },
      {
        "v": "04",
        "l": "Open items"
      },
      {
        "v": "1 click",
        "l": "Board pack export"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Cockpit",
        "Compile",
        "Review",
        "Export"
      ]
    },
    "rows": [
      "Board pack generated from the cockpit",
      "Four compliance items pending review",
      "Quarterly report exported in one click"
    ]
  },
  "construction::Earned value": {
    "tabs": [
      "Overview",
      "CPI",
      "SPI"
    ],
    "kpis": [
      {
        "v": "1.04",
        "l": "Portfolio CPI"
      },
      {
        "v": "0.97",
        "l": "Portfolio SPI"
      },
      {
        "v": "24",
        "l": "Projects tracked"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Metro",
          "v": 88
        },
        {
          "label": "Bridge",
          "v": 72
        },
        {
          "label": "Plant",
          "v": 64
        },
        {
          "label": "Tower",
          "v": 79
        }
      ]
    },
    "rows": [
      "Portfolio CPI held at 1.04",
      "EAC updated across 24 projects",
      "SPI slipped to 0.97 on two jobs"
    ]
  },
  "construction::Critical-path & schedule risk": {
    "tabs": [
      "Overview",
      "Float",
      "Risk"
    ],
    "kpis": [
      {
        "v": "6",
        "l": "Milestones at risk"
      },
      {
        "v": "11 days",
        "l": "Lowest float"
      },
      {
        "v": "03",
        "l": "EOT variations raised"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Metro",
          "v": 42
        },
        {
          "label": "Bridge",
          "v": 18
        },
        {
          "label": "Plant",
          "v": 63
        },
        {
          "label": "Tower",
          "v": 29
        }
      ]
    },
    "rows": [
      "Schedule-risk agent flagged 6 milestones",
      "Float on Bridge dropped to 11 days",
      "EOT variation raised ahead of slip"
    ]
  },
  "construction::Cashflow & RA billing": {
    "tabs": [
      "Overview",
      "Cashflow",
      "Billing"
    ],
    "kpis": [
      {
        "v": "312 Cr",
        "l": "90-day inflow"
      },
      {
        "v": "18",
        "l": "RA bills due"
      },
      {
        "v": "96 Cr",
        "l": "Billing to advance"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        48,
        52,
        60,
        57,
        66,
        72
      ],
      "label": "Inflow by month"
    },
    "rows": [
      "90-day inflow forecast at 312 Cr",
      "RA bill RB-118 raised on schedule",
      "Forecaster flagged a billing to advance"
    ]
  },
  "construction::Contractual claims & time-bars": {
    "tabs": [
      "Overview",
      "Claims",
      "Notices"
    ],
    "kpis": [
      {
        "v": "14",
        "l": "Open claims"
      },
      {
        "v": "5",
        "l": "Time-bars this week"
      },
      {
        "v": "9 days",
        "l": "Nearest notice window"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Notice",
          "v": 52
        },
        {
          "label": "Detail",
          "v": 38
        },
        {
          "label": "Review",
          "v": 44
        },
        {
          "label": "Agreed",
          "v": 26
        }
      ]
    },
    "rows": [
      "Notice sentinel flagged a FIDIC time-bar",
      "Claim CL-227 served within its window",
      "Five time-bars due this week"
    ]
  },
  "construction::HSE, QA & physical progress": {
    "tabs": [
      "Overview",
      "HSE",
      "Progress"
    ],
    "kpis": [
      {
        "v": "0.42",
        "l": "Portfolio TRIR"
      },
      {
        "v": "97%",
        "l": "QA first-pass"
      },
      {
        "v": "68%",
        "l": "Physical progress"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Metro",
          "v": 74
        },
        {
          "label": "Bridge",
          "v": 58
        },
        {
          "label": "Plant",
          "v": 66
        },
        {
          "label": "Tower",
          "v": 81
        }
      ]
    },
    "rows": [
      "TRIR held at 0.42 across the portfolio",
      "QA first-pass rate reached 97%",
      "Physical progress logged at 68%"
    ]
  },
  "construction::AI agent fleet": {
    "tabs": [
      "Overview",
      "Agents",
      "Alerts"
    ],
    "kpis": [
      {
        "v": "04",
        "l": "Agents on watch"
      },
      {
        "v": "37",
        "l": "Actions flagged"
      },
      {
        "v": "24",
        "l": "Projects covered"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Agent fleet",
      "nodes": [
        "Schedule",
        "Cost",
        "Cash",
        "Claims"
      ]
    },
    "rows": [
      "Schedule agent flagged an action first",
      "Cost agent surfaced a CPI drift",
      "37 actions raised across 24 projects"
    ]
  },
  "manufacturing::Live OEE & line board": {
    "tabs": [
      "Overview",
      "Lines",
      "Reject"
    ],
    "kpis": [
      {
        "v": "78.4%",
        "l": "Plant OEE"
      },
      {
        "v": "6 / 7",
        "l": "Lines running"
      },
      {
        "v": "1.9%",
        "l": "Reject rate"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Line 1",
          "v": 82
        },
        {
          "label": "Line 2",
          "v": 76
        },
        {
          "label": "Line 3",
          "v": 88
        },
        {
          "label": "Line 4",
          "v": 71
        },
        {
          "label": "Line 5",
          "v": 64
        }
      ]
    },
    "rows": [
      "Line 3 OEE at 88 percent",
      "Line 4 down for changeover, 22 min",
      "Line 5 reject flagged at 3.1 percent"
    ]
  },
  "manufacturing::Production planning & trend": {
    "tabs": [
      "Overview",
      "Plan",
      "Trend"
    ],
    "kpis": [
      {
        "v": "12,480 t",
        "l": "Weekly output"
      },
      {
        "v": "96%",
        "l": "Plan attainment"
      },
      {
        "v": "18",
        "l": "Orders scheduled"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        68,
        72,
        70,
        78,
        82,
        80
      ],
      "label": "Weekly output, tonnes"
    },
    "rows": [
      "Week plan attainment at 96 percent",
      "Order SO-2214 scheduled to Line 2",
      "Weekly output up on prior week"
    ]
  },
  "manufacturing::Scrap & first-pass quality": {
    "tabs": [
      "Overview",
      "Scrap",
      "Quality"
    ],
    "kpis": [
      {
        "v": "1.6%",
        "l": "Scrap rate"
      },
      {
        "v": "97.2%",
        "l": "First-pass quality"
      },
      {
        "v": "42",
        "l": "Heats today"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Casting",
          "v": 38
        },
        {
          "label": "Rolling",
          "v": 26
        },
        {
          "label": "Finishing",
          "v": 18
        },
        {
          "label": "Handling",
          "v": 12
        }
      ]
    },
    "rows": [
      "First-pass quality at 97.2 percent",
      "Heat H-4471 scrap within limit",
      "Casting flagged as largest scrap cause"
    ]
  },
  "manufacturing::Energy per tonne & emissions": {
    "tabs": [
      "Overview",
      "Energy",
      "Emissions"
    ],
    "kpis": [
      {
        "v": "512 kWh/t",
        "l": "Energy per tonne"
      },
      {
        "v": "-3.2%",
        "l": "Change vs last week"
      },
      {
        "v": "1.14 t/t",
        "l": "Stack CO2 per tonne"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        54,
        52,
        53,
        50,
        49,
        51
      ],
      "label": "Energy per tonne by shift"
    },
    "rows": [
      "Energy per tonne 3.2 percent below last week",
      "Stack emissions within permit limit",
      "Shift 2 energy drift flagged early"
    ]
  },
  "manufacturing::OTIF & logistics": {
    "tabs": [
      "Overview",
      "OTIF",
      "Dispatch"
    ],
    "kpis": [
      {
        "v": "94.5%",
        "l": "OTIF"
      },
      {
        "v": "31",
        "l": "Orders due today"
      },
      {
        "v": "5",
        "l": "Dispatches pending"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        90,
        92,
        91,
        93,
        95,
        94
      ],
      "label": "OTIF by week"
    },
    "rows": [
      "OTIF at 94.5 percent this week",
      "Order SO-2208 dispatched on plan",
      "5 dispatches pending against orders due"
    ]
  },
  "manufacturing::Shop-floor approvals & permits": {
    "tabs": [
      "Overview",
      "Queue",
      "Permits"
    ],
    "kpis": [
      {
        "v": "14",
        "l": "Approvals pending"
      },
      {
        "v": "3",
        "l": "Permits open"
      },
      {
        "v": "92%",
        "l": "Calibrations current"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "PRO",
          "v": 42
        },
        {
          "label": "Permit",
          "v": 24
        },
        {
          "label": "Calib",
          "v": 20
        },
        {
          "label": "Other",
          "v": 14
        }
      ]
    },
    "rows": [
      "PRO release PR-882 cleared",
      "Hot-work permit approved for Bay 4",
      "2 calibrations due within the week"
    ]
  },
  "data-center::Estate command center": {
    "tabs": [
      "Overview",
      "Sites",
      "Power"
    ],
    "kpis": [
      {
        "v": "98.7",
        "l": "Health index"
      },
      {
        "v": "7",
        "l": "Open incidents"
      },
      {
        "v": "34%",
        "l": "Power headroom"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "DC-North",
          "v": 96
        },
        {
          "label": "DC-South",
          "v": 91
        },
        {
          "label": "DC-East",
          "v": 88
        },
        {
          "label": "DC-West",
          "v": 94
        }
      ]
    },
    "rows": [
      "Estate health index at 98.7",
      "7 incidents open across the estate",
      "Power headroom at 34 percent"
    ]
  },
  "data-center::Operations": {
    "tabs": [
      "Overview",
      "Incidents",
      "Alarms"
    ],
    "kpis": [
      {
        "v": "2",
        "l": "SLA-breaching"
      },
      {
        "v": "1",
        "l": "SEV1 incidents"
      },
      {
        "v": "99.1%",
        "l": "Device reachability"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 6
        },
        {
          "label": "Major",
          "v": 22
        },
        {
          "label": "Minor",
          "v": 41
        },
        {
          "label": "Warning",
          "v": 58
        }
      ]
    },
    "rows": [
      "SEV1 INC-3391 open, SLA at risk",
      "6 critical alarms across the estate",
      "Device reachability at 99.1 percent"
    ]
  },
  "data-center::Capacity & power": {
    "tabs": [
      "Overview",
      "Capacity",
      "Power"
    ],
    "kpis": [
      {
        "v": "1.32",
        "l": "PUE"
      },
      {
        "v": "28%",
        "l": "Rack capacity free"
      },
      {
        "v": "61%",
        "l": "GPU utilization"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Power",
          "v": 66
        },
        {
          "label": "Rack",
          "v": 72
        },
        {
          "label": "GPU",
          "v": 61
        },
        {
          "label": "Subnet",
          "v": 48
        }
      ]
    },
    "rows": [
      "PUE at 1.32 across the estate",
      "Rack capacity 28 percent free in DC-East",
      "Subnet forecast flags DC-South by Q3"
    ]
  },
  "data-center::Change & maintenance": {
    "tabs": [
      "Overview",
      "Changes",
      "Maintenance"
    ],
    "kpis": [
      {
        "v": "9",
        "l": "Changes in flight"
      },
      {
        "v": "4",
        "l": "Scheduled windows"
      },
      {
        "v": "96%",
        "l": "Change success rate"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Raised",
        "Approved",
        "Scheduled",
        "Deployed"
      ]
    },
    "rows": [
      "Change CHG-1180 approved for DC-North",
      "Maintenance window set for Sat 02:00",
      "Incident INC-3402 logged against change"
    ]
  },
  "data-center::Efficiency, cost & resilience": {
    "tabs": [
      "Overview",
      "Efficiency",
      "Resilience"
    ],
    "kpis": [
      {
        "v": "1.32",
        "l": "PUE"
      },
      {
        "v": "99.98%",
        "l": "Availability"
      },
      {
        "v": "42 min",
        "l": "Mean MTTR"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        40,
        38,
        37,
        36,
        34,
        33
      ],
      "label": "PUE by month"
    },
    "rows": [
      "Monthly opex tracked flat on prior month",
      "Carbon per month down on prior month",
      "N+1 redundancy met at every site"
    ]
  },
  "data-center::Map & topology": {
    "tabs": [
      "Overview",
      "Map",
      "Topology"
    ],
    "kpis": [
      {
        "v": "6",
        "l": "Sites mapped"
      },
      {
        "v": "2",
        "l": "Single-path links"
      },
      {
        "v": "97%",
        "l": "Connectivity health"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Core",
      "nodes": [
        "DC-North",
        "DC-South",
        "DC-East",
        "DC-West"
      ]
    },
    "rows": [
      "6 sites live on the estate map",
      "2 single-path links flagged as risk",
      "Connectivity health at 97 percent"
    ]
  },
  "intelligence-hub::Semantic Ontology": {
    "tabs": [
      "Overview",
      "Objects",
      "Lineage"
    ],
    "kpis": [
      {
        "v": "One model",
        "l": "Enterprise graph"
      },
      {
        "v": "4,200",
        "l": "Objects modelled"
      },
      {
        "v": "Typed",
        "l": "Relationships"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Ontology",
      "nodes": [
        "Objects",
        "Relations",
        "Lineage",
        "Lifecycle"
      ]
    },
    "rows": [
      "Object schema published: Asset",
      "Impact analysis run on lineage",
      "AI context layer refreshed"
    ]
  },
  "intelligence-hub::Command Center": {
    "tabs": [
      "Overview",
      "Forecasts",
      "Actions"
    ],
    "kpis": [
      {
        "v": "Closed loop",
        "l": "Insight to action"
      },
      {
        "v": "24/7",
        "l": "Autonomous monitoring"
      },
      {
        "v": "18",
        "l": "Scenarios modelled"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        45,
        58,
        62,
        70,
        78,
        85
      ],
      "label": "Forecast confidence"
    },
    "rows": [
      "Forecast generated for demand",
      "Root-cause narrative explained",
      "Automated action closed the loop"
    ]
  },
  "intelligence-hub::Sherlock": {
    "tabs": [
      "Overview",
      "Flows",
      "Executions"
    ],
    "kpis": [
      {
        "v": "42",
        "l": "Corrective flows"
      },
      {
        "v": "On track",
        "l": "Execution queue"
      },
      {
        "v": "96%",
        "l": "Auto-resolved"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Detect",
        "Root cause",
        "Correct",
        "Reuse"
      ]
    },
    "rows": [
      "Root cause found for RC-0912",
      "Corrective flow deployed",
      "Execution queued at scale"
    ]
  },
  "intelligence-hub::Marketplace": {
    "tabs": [
      "Overview",
      "Catalog",
      "Subscriptions"
    ],
    "kpis": [
      {
        "v": "180",
        "l": "Catalog offerings"
      },
      {
        "v": "64",
        "l": "AI agents listed"
      },
      {
        "v": "Governed",
        "l": "Access and billing"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Products",
          "v": 70
        },
        {
          "label": "Agents",
          "v": 52
        },
        {
          "label": "Blueprints",
          "v": 38
        }
      ]
    },
    "rows": [
      "Blueprint subscribed: Finance",
      "AI agent added to catalog",
      "Usage tier updated"
    ]
  },
  "intelligence-hub::Sentinel": {
    "tabs": [
      "Overview",
      "Incidents",
      "Remediation"
    ],
    "kpis": [
      {
        "v": "0 open",
        "l": "Critical incidents"
      },
      {
        "v": "6m",
        "l": "Mean time to detect"
      },
      {
        "v": "Healthy",
        "l": "Ecosystem pulse"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 8
        },
        {
          "label": "High",
          "v": 22
        },
        {
          "label": "Medium",
          "v": 41
        },
        {
          "label": "Low",
          "v": 63
        }
      ]
    },
    "rows": [
      "Signals correlated into incident",
      "AI investigation found root cause",
      "Remediation applied and resolved"
    ]
  },
  "corporate-drivers::Strategy": {
    "tabs": [
      "Overview",
      "Themes",
      "Cascade"
    ],
    "kpis": [
      {
        "v": "6",
        "l": "Strategic themes"
      },
      {
        "v": "On track",
        "l": "Theme progress"
      },
      {
        "v": "Aligned",
        "l": "Board to team"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Theme",
        "Objective",
        "Cascade",
        "Result"
      ]
    },
    "rows": [
      "Corporate objective owner set",
      "Theme cascaded to business unit",
      "Team key result linked to theme"
    ]
  },
  "corporate-drivers::Business Planning": {
    "tabs": [
      "Overview",
      "Plan",
      "Budget"
    ],
    "kpis": [
      {
        "v": "5-year",
        "l": "Planning horizon"
      },
      {
        "v": "v4",
        "l": "Plan version"
      },
      {
        "v": "Approved",
        "l": "Board sign-off"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Revenue",
          "v": 82
        },
        {
          "label": "Cost",
          "v": 58
        },
        {
          "label": "Margin",
          "v": 41
        },
        {
          "label": "Cash",
          "v": 66
        }
      ]
    },
    "rows": [
      "Plan version v4 submitted",
      "Assumptions driver-based, reviewed",
      "Plan bridged to operating budget"
    ]
  },
  "corporate-drivers::Business Portfolios": {
    "tabs": [
      "Overview",
      "Proposals",
      "Funding"
    ],
    "kpis": [
      {
        "v": "34",
        "l": "Active proposals"
      },
      {
        "v": "12",
        "l": "Funded outcomes"
      },
      {
        "v": "On track",
        "l": "Value realisation"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Proposal",
        "Case",
        "Fund",
        "Outcome"
      ]
    },
    "rows": [
      "Business proposal moved to case",
      "Portfolio funding approved",
      "Value realisation tracked to date"
    ]
  },
  "corporate-drivers::OKRs": {
    "tabs": [
      "Overview",
      "Objectives",
      "Progress"
    ],
    "kpis": [
      {
        "v": "128",
        "l": "Active objectives"
      },
      {
        "v": "72%",
        "l": "Key results on track"
      },
      {
        "v": "Owned",
        "l": "Every objective"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Corporate",
          "v": 78
        },
        {
          "label": "Business",
          "v": 64
        },
        {
          "label": "Team",
          "v": 58
        },
        {
          "label": "Individual",
          "v": 49
        }
      ]
    },
    "rows": [
      "Objective aligned to corporate goal",
      "Key result forecast updated",
      "Owner assigned to objective"
    ]
  },
  "corporate-drivers::Alliances": {
    "tabs": [
      "Overview",
      "Partners",
      "Coverage"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Active alliances"
      },
      {
        "v": "82",
        "l": "Ecosystem health"
      },
      {
        "v": "Attributed",
        "l": "Value to strategy"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Partners",
          "v": 74
        },
        {
          "label": "JVs",
          "v": 58
        },
        {
          "label": "SPVs",
          "v": 46
        },
        {
          "label": "Invest",
          "v": 52
        }
      ]
    },
    "rows": [
      "Alliance health scored at 82",
      "Strategy coverage white-space found",
      "Value attributed to partner JV"
    ]
  },
  "corporate-drivers::Committees": {
    "tabs": [
      "Overview",
      "Decisions",
      "Bodies"
    ],
    "kpis": [
      {
        "v": "14",
        "l": "Governance bodies"
      },
      {
        "v": "On record",
        "l": "Decisions logged"
      },
      {
        "v": "312",
        "l": "Decisions traced"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Board",
          "v": 64
        },
        {
          "label": "Audit",
          "v": 48
        },
        {
          "label": "Risk",
          "v": 42
        },
        {
          "label": "Exec",
          "v": 58
        }
      ]
    },
    "rows": [
      "Decision recorded by board",
      "Delegation of authority updated",
      "Decision trail exported"
    ]
  },
  "trust-governance-assurance::Governance": {
    "tabs": [
      "Overview",
      "Entities",
      "Frameworks"
    ],
    "kpis": [
      {
        "v": "126",
        "l": "Legal entities"
      },
      {
        "v": "Mapped",
        "l": "Ownership tree"
      },
      {
        "v": "SOX ISO GDPR",
        "l": "Control frameworks"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "SOX",
          "v": 88
        },
        {
          "label": "ISO",
          "v": 74
        },
        {
          "label": "GDPR",
          "v": 81
        },
        {
          "label": "Others",
          "v": 56
        }
      ]
    },
    "rows": [
      "Legal entity added to structure",
      "Ownership tier set to material",
      "Control framework mapped: SOX"
    ]
  },
  "trust-governance-assurance::Risks": {
    "tabs": [
      "Overview",
      "Register",
      "Heatmap"
    ],
    "kpis": [
      {
        "v": "248",
        "l": "Risks registered"
      },
      {
        "v": "72",
        "l": "Portfolio score"
      },
      {
        "v": "18",
        "l": "High-severity risks"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 12
        },
        {
          "label": "High",
          "v": 28
        },
        {
          "label": "Medium",
          "v": 44
        },
        {
          "label": "Low",
          "v": 58
        }
      ]
    },
    "rows": [
      "Risk scored on likelihood, impact",
      "Portfolio score correlation-adjusted",
      "Mitigation plan linked to KRI"
    ]
  },
  "trust-governance-assurance::Compliance": {
    "tabs": [
      "Overview",
      "Obligations",
      "Calendar"
    ],
    "kpis": [
      {
        "v": "412",
        "l": "Obligations tracked"
      },
      {
        "v": "94%",
        "l": "Controls tested"
      },
      {
        "v": "Healthy",
        "l": "Compliance score"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        70,
        74,
        79,
        83,
        88,
        94
      ],
      "label": "Compliance health"
    },
    "rows": [
      "Obligation mapped to owner",
      "Control test evidence attached",
      "Attestation workflow completed"
    ]
  },
  "trust-governance-assurance::Audits": {
    "tabs": [
      "Overview",
      "Engagements",
      "Findings"
    ],
    "kpis": [
      {
        "v": "36",
        "l": "Planned audits"
      },
      {
        "v": "88%",
        "l": "High-risk coverage"
      },
      {
        "v": "12 open",
        "l": "Findings to close"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Plan",
        "Fieldwork",
        "Findings",
        "Follow-up"
      ]
    },
    "rows": [
      "Audit universe risk-ranked",
      "Engagement moved to fieldwork",
      "SOX control finding raised"
    ]
  },
  "trust-governance-assurance::Data Governance": {
    "tabs": [
      "Overview",
      "Catalog",
      "Lineage"
    ],
    "kpis": [
      {
        "v": "5,400",
        "l": "Catalogued datasets"
      },
      {
        "v": "92%",
        "l": "Certified data"
      },
      {
        "v": "Traced",
        "l": "End-to-end lineage"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Catalogued",
          "v": 88
        },
        {
          "label": "Certified",
          "v": 74
        },
        {
          "label": "Classified",
          "v": 81
        },
        {
          "label": "Lineage",
          "v": 69
        }
      ]
    },
    "rows": [
      "Dataset certified by owner",
      "End-to-end lineage traced",
      "Access policy applied to catalog"
    ]
  },
  "trust-governance-assurance::Explainability": {
    "tabs": [
      "Overview",
      "Decisions",
      "Audit trail"
    ],
    "kpis": [
      {
        "v": "1,240",
        "l": "Decisions recorded"
      },
      {
        "v": "Explainable",
        "l": "Every decision"
      },
      {
        "v": "Intact",
        "l": "Audit chain"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Finance",
          "v": 64
        },
        {
          "label": "People",
          "v": 48
        },
        {
          "label": "Supply",
          "v": 56
        },
        {
          "label": "Ops",
          "v": 42
        }
      ]
    },
    "rows": [
      "Decision recorded with allow posture",
      "Policy enforced across entities",
      "Audit chain integrity verified"
    ]
  },
  "customers::CRM": {
    "tabs": [
      "Overview",
      "Pipeline",
      "Forecast"
    ],
    "kpis": [
      {
        "v": "186",
        "l": "Open deals"
      },
      {
        "v": "32%",
        "l": "Win rate"
      },
      {
        "v": "418",
        "l": "Leads scored"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Prospect",
          "v": 74
        },
        {
          "label": "Qualify",
          "v": 58
        },
        {
          "label": "Proposal",
          "v": 41
        },
        {
          "label": "Negotiate",
          "v": 27
        },
        {
          "label": "Won",
          "v": 19
        }
      ]
    },
    "rows": [
      "Lead scored: 84 fit",
      "Deal advanced to Negotiate",
      "Quote sent to ACME Corp"
    ]
  },
  "customers::Orders": {
    "tabs": [
      "Overview",
      "Orders",
      "Billing"
    ],
    "kpis": [
      {
        "v": "1,024",
        "l": "Open orders"
      },
      {
        "v": "41",
        "l": "Days sales outstanding"
      },
      {
        "v": "2",
        "l": "SLA breaches"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Booked",
          "v": 68
        },
        {
          "label": "Fulfilled",
          "v": 54
        },
        {
          "label": "Invoiced",
          "v": 39
        },
        {
          "label": "Paid",
          "v": 31
        }
      ]
    },
    "rows": [
      "Order OD-5521 invoiced",
      "Payment received: OD-5490",
      "Credit-limit alert raised"
    ]
  },
  "customers::Subscribers": {
    "tabs": [
      "Overview",
      "Subscribers",
      "Billing"
    ],
    "kpis": [
      {
        "v": "48,210",
        "l": "Active subscribers"
      },
      {
        "v": "1.8%",
        "l": "Monthly churn"
      },
      {
        "v": "2,140",
        "l": "New activations"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        42,
        48,
        53,
        57,
        62,
        68
      ],
      "label": "Active subscriber base"
    },
    "rows": [
      "Subscriber provisioned on plan Pro",
      "Billing run completed",
      "Network-quality signal logged"
    ]
  },
  "customers::Plans and Products Catalog": {
    "tabs": [
      "Overview",
      "Catalog",
      "Pricing"
    ],
    "kpis": [
      {
        "v": "142",
        "l": "Active plans"
      },
      {
        "v": "38",
        "l": "Bundles"
      },
      {
        "v": "12",
        "l": "Draft versions"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Active",
          "v": 71
        },
        {
          "label": "Draft",
          "v": 22
        },
        {
          "label": "Retiring",
          "v": 11
        },
        {
          "label": "Retired",
          "v": 8
        }
      ]
    },
    "rows": [
      "Plan version 3.2 published",
      "Bundle added to catalog",
      "Pricing updated on offering"
    ]
  },
  "customers::IVR and Contact Center": {
    "tabs": [
      "Overview",
      "Queue",
      "Quality"
    ],
    "kpis": [
      {
        "v": "6,480",
        "l": "Interactions today"
      },
      {
        "v": "72%",
        "l": "AI resolved"
      },
      {
        "v": "0:42",
        "l": "Average handle time"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "AI voice",
          "v": 64
        },
        {
          "label": "AI chat",
          "v": 71
        },
        {
          "label": "Human",
          "v": 42
        },
        {
          "label": "Escalated",
          "v": 18
        }
      ]
    },
    "rows": [
      "Chat resolved by AI agent",
      "Voice call routed to human agent",
      "Knowledge article grounded reply"
    ]
  },
  "customers::Experience and Care": {
    "tabs": [
      "Overview",
      "Cases",
      "Health"
    ],
    "kpis": [
      {
        "v": "318",
        "l": "Open cases"
      },
      {
        "v": "94%",
        "l": "Within SLA"
      },
      {
        "v": "12",
        "l": "At-risk accounts"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Billing",
          "v": 62
        },
        {
          "label": "Technical",
          "v": 78
        },
        {
          "label": "Delivery",
          "v": 34
        },
        {
          "label": "Account",
          "v": 28
        }
      ]
    },
    "rows": [
      "At-risk account flagged for triage",
      "Case opened in one click",
      "SLA timer approaching breach"
    ]
  },
  "customers::Campaigns": {
    "tabs": [
      "Overview",
      "Campaigns",
      "Funnel"
    ],
    "kpis": [
      {
        "v": "24",
        "l": "Active campaigns"
      },
      {
        "v": "3.4%",
        "l": "Click-through rate"
      },
      {
        "v": "1,860",
        "l": "Conversions"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Impress",
          "v": 92
        },
        {
          "label": "Clicks",
          "v": 48
        },
        {
          "label": "Leads",
          "v": 26
        },
        {
          "label": "Convert",
          "v": 14
        }
      ]
    },
    "rows": [
      "Campaign launched across 3 channels",
      "Click-through rate up on email",
      "Conversion recorded from paid search"
    ]
  },
  "customers::Surveys and Feedback": {
    "tabs": [
      "Overview",
      "Surveys",
      "Sentiment"
    ],
    "kpis": [
      {
        "v": "+42",
        "l": "Net promoter score"
      },
      {
        "v": "68%",
        "l": "Response rate"
      },
      {
        "v": "4.3",
        "l": "CSAT average"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Promoters",
          "v": 58
        },
        {
          "label": "Passives",
          "v": 30
        },
        {
          "label": "Detractors",
          "v": 12
        }
      ]
    },
    "rows": [
      "NPS survey released to 2,400 contacts",
      "Response rate reached 68 percent",
      "Detractor feedback routed to action"
    ]
  },
  "customers::Case Management": {
    "tabs": [
      "Overview",
      "Cases",
      "SLA"
    ],
    "kpis": [
      {
        "v": "246",
        "l": "Open complaints"
      },
      {
        "v": "91%",
        "l": "Resolved on time"
      },
      {
        "v": "1.6d",
        "l": "Average resolution"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 14
        },
        {
          "label": "High",
          "v": 38
        },
        {
          "label": "Medium",
          "v": 64
        },
        {
          "label": "Low",
          "v": 42
        }
      ]
    },
    "rows": [
      "Complaint intake logged",
      "Case escalated to high priority",
      "Case closed within SLA"
    ]
  },
  "customers::Channel Partners": {
    "tabs": [
      "Overview",
      "Partners",
      "Payouts"
    ],
    "kpis": [
      {
        "v": "312",
        "l": "Active partners"
      },
      {
        "v": "86%",
        "l": "Activation rate"
      },
      {
        "v": "28",
        "l": "Pending payouts"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Reseller",
          "v": 64
        },
        {
          "label": "Referral",
          "v": 42
        },
        {
          "label": "Distrib.",
          "v": 31
        },
        {
          "label": "OEM",
          "v": 22
        }
      ]
    },
    "rows": [
      "Partner onboarded and activated",
      "Commission payout scheduled",
      "Contract renewed for reseller"
    ]
  },
  "pmo::Programs": {
    "tabs": [
      "Overview",
      "Earned Value",
      "Risks"
    ],
    "kpis": [
      {
        "v": "1.04",
        "l": "Cost performance CPI"
      },
      {
        "v": "0.97",
        "l": "Schedule index SPI"
      },
      {
        "v": "7",
        "l": "Programs on track"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Planned",
          "v": 80
        },
        {
          "label": "Earned",
          "v": 76
        },
        {
          "label": "Actual",
          "v": 73
        },
        {
          "label": "Forecast",
          "v": 82
        }
      ]
    },
    "rows": [
      "Program review recorded CPI 1.04",
      "Schedule variance within threshold",
      "Cross-project risk rolled up"
    ]
  },
  "pmo::Projects": {
    "tabs": [
      "Overview",
      "Projects",
      "Milestones"
    ],
    "kpis": [
      {
        "v": "64",
        "l": "Active projects"
      },
      {
        "v": "92%",
        "l": "On schedule"
      },
      {
        "v": "18",
        "l": "Milestones due"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Planned",
          "v": 70
        },
        {
          "label": "Started",
          "v": 52
        },
        {
          "label": "Complete",
          "v": 44
        },
        {
          "label": "Delayed",
          "v": 12
        }
      ]
    },
    "rows": [
      "Milestone completed on Site A",
      "Project delivery velocity holding",
      "Gap flagged against plan"
    ]
  },
  "pmo::Tasks": {
    "tabs": [
      "Overview",
      "Tasks",
      "Priorities"
    ],
    "kpis": [
      {
        "v": "1,280",
        "l": "Open tasks"
      },
      {
        "v": "64",
        "l": "Due today"
      },
      {
        "v": "38",
        "l": "Overdue"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Overdue",
          "v": 24
        },
        {
          "label": "Due today",
          "v": 40
        },
        {
          "label": "At-risk",
          "v": 33
        },
        {
          "label": "On track",
          "v": 78
        }
      ]
    },
    "rows": [
      "Task auto-routed to owner",
      "AI ranked task by risk and due date",
      "Overdue task escalated"
    ]
  },
  "pmo::Trackers": {
    "tabs": [
      "Overview",
      "Actions",
      "Evidence"
    ],
    "kpis": [
      {
        "v": "142",
        "l": "Open actions"
      },
      {
        "v": "88%",
        "l": "Verified on time"
      },
      {
        "v": "9",
        "l": "At-risk actions"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Planned",
          "v": 36
        },
        {
          "label": "Progress",
          "v": 54
        },
        {
          "label": "Verified",
          "v": 72
        },
        {
          "label": "Overdue",
          "v": 14
        }
      ]
    },
    "rows": [
      "Corrective action linked to finding",
      "Action verified and closed",
      "SOX evidence attached to tracker"
    ]
  },
  "pmo::Meetings": {
    "tabs": [
      "Overview",
      "Agenda",
      "Actions"
    ],
    "kpis": [
      {
        "v": "38",
        "l": "Meetings this week"
      },
      {
        "v": "92%",
        "l": "Quorum met"
      },
      {
        "v": "124",
        "l": "Action items"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Open",
          "v": 44
        },
        {
          "label": "Progress",
          "v": 36
        },
        {
          "label": "Done",
          "v": 68
        },
        {
          "label": "Overdue",
          "v": 12
        }
      ]
    },
    "rows": [
      "Minutes published after review",
      "Action item converted to task",
      "Quorum confirmed for board meeting"
    ]
  },
  "it-cybersecurity::Strategy and Governance": {
    "tabs": [
      "Overview",
      "Portfolio",
      "Roadmap"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Investments tracked"
      },
      {
        "v": "1.6x",
        "l": "Portfolio ROI"
      },
      {
        "v": "92%",
        "l": "ARB compliance"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Run",
          "v": 62
        },
        {
          "label": "Grow",
          "v": 48
        },
        {
          "label": "Transform",
          "v": 34
        },
        {
          "label": "Retire",
          "v": 16
        }
      ]
    },
    "rows": [
      "Investment scored on value and risk",
      "Roadmap milestone approved by ARB",
      "OKR progress updated for quarter"
    ]
  },
  "it-cybersecurity::Build and Delivery": {
    "tabs": [
      "Overview",
      "Sprints",
      "Releases"
    ],
    "kpis": [
      {
        "v": "42",
        "l": "Story points done"
      },
      {
        "v": "6",
        "l": "Releases this month"
      },
      {
        "v": "3",
        "l": "Open RAID items"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        90,
        74,
        60,
        46,
        28,
        12
      ],
      "label": "Sprint burndown"
    },
    "rows": [
      "Sprint burndown on track to close",
      "Release deployed through CI/CD",
      "RAID risk logged and assigned"
    ]
  },
  "it-cybersecurity::Infrastructure": {
    "tabs": [
      "Overview",
      "Estate",
      "Cost"
    ],
    "kpis": [
      {
        "v": "99.98%",
        "l": "Platform uptime"
      },
      {
        "v": "1,420",
        "l": "Cloud resources"
      },
      {
        "v": "Green",
        "l": "Security posture"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "AWS",
          "v": 74
        },
        {
          "label": "Azure",
          "v": 58
        },
        {
          "label": "GCP",
          "v": 36
        },
        {
          "label": "K8s",
          "v": 44
        }
      ]
    },
    "rows": [
      "Backup completed across regions",
      "Cost anomaly detected on Azure",
      "CSPM finding remediated"
    ]
  },
  "it-cybersecurity::Tools and Tech": {
    "tabs": [
      "Overview",
      "Tickets",
      "Assets"
    ],
    "kpis": [
      {
        "v": "284",
        "l": "Open tickets"
      },
      {
        "v": "96%",
        "l": "SLA compliance"
      },
      {
        "v": "612",
        "l": "Software assets"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Incident",
          "v": 68
        },
        {
          "label": "Problem",
          "v": 22
        },
        {
          "label": "Change",
          "v": 40
        },
        {
          "label": "Request",
          "v": 56
        }
      ]
    },
    "rows": [
      "Incident bridged and resolved",
      "Change approved on calendar",
      "Software license reclaimed"
    ]
  },
  "it-cybersecurity::CyberSecurity": {
    "tabs": [
      "Overview",
      "Threats",
      "Identity"
    ],
    "kpis": [
      {
        "v": "6",
        "l": "Open threats"
      },
      {
        "v": "142",
        "l": "Vulnerabilities"
      },
      {
        "v": "98%",
        "l": "Access certified"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 8
        },
        {
          "label": "High",
          "v": 26
        },
        {
          "label": "Medium",
          "v": 52
        },
        {
          "label": "Low",
          "v": 70
        }
      ]
    },
    "rows": [
      "Threat correlated to MITRE technique",
      "Patch applied to critical vulnerability",
      "Access review certified for finance"
    ]
  },
  "people::Workforce": {
    "tabs": [
      "Overview",
      "Directory",
      "Lifecycle"
    ],
    "kpis": [
      {
        "v": "1,860",
        "l": "Active headcount"
      },
      {
        "v": "42",
        "l": "On probation"
      },
      {
        "v": "7",
        "l": "Open lifecycle events"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Operations",
          "v": 40
        },
        {
          "label": "Sales",
          "v": 20
        },
        {
          "label": "Technology",
          "v": 28
        },
        {
          "label": "Support",
          "v": 24
        }
      ]
    },
    "rows": [
      "Onboarding started for 5 new hires",
      "Probation confirmed for E-2201",
      "Org node moved under Operations"
    ]
  },
  "people::Recruitment": {
    "tabs": [
      "Overview",
      "Pipeline",
      "Offers"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Open requisitions"
      },
      {
        "v": "32",
        "l": "Days to fill"
      },
      {
        "v": "86%",
        "l": "Fill rate"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Sourced",
          "v": 100
        },
        {
          "label": "Screened",
          "v": 64
        },
        {
          "label": "Interview",
          "v": 38
        },
        {
          "label": "Offer",
          "v": 18
        },
        {
          "label": "Signed",
          "v": 12
        }
      ]
    },
    "rows": [
      "Requisition REQ-118 approved",
      "Interview loop scheduled for 4",
      "Offer accepted for Backend Engineer"
    ]
  },
  "people::Time and Leave": {
    "tabs": [
      "Overview",
      "Attendance",
      "Leave"
    ],
    "kpis": [
      {
        "v": "97%",
        "l": "Attendance today"
      },
      {
        "v": "128",
        "l": "On leave"
      },
      {
        "v": "14",
        "l": "Regularizations"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        92,
        95,
        96,
        94,
        97,
        98
      ],
      "label": "Attendance this week"
    },
    "rows": [
      "Muster closed for morning shift",
      "Leave request approved for 3 days",
      "Timesheets locked for payroll"
    ]
  },
  "people::Compensation": {
    "tabs": [
      "Overview",
      "Payroll",
      "Filings"
    ],
    "kpis": [
      {
        "v": "Gate 3/4",
        "l": "Payroll run stage"
      },
      {
        "v": "0",
        "l": "Variance flags"
      },
      {
        "v": "On time",
        "l": "Statutory filings"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Inputs",
        "Calculate",
        "Review",
        "Disburse"
      ]
    },
    "rows": [
      "Payroll inputs locked for cycle",
      "Variance review cleared",
      "TDS and PF filings submitted"
    ]
  },
  "people::Growth": {
    "tabs": [
      "Overview",
      "Reviews",
      "Learning"
    ],
    "kpis": [
      {
        "v": "92%",
        "l": "Reviews complete"
      },
      {
        "v": "3.8",
        "l": "Average rating"
      },
      {
        "v": "64%",
        "l": "Goals on track"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Exceeds",
          "v": 22
        },
        {
          "label": "Meets",
          "v": 58
        },
        {
          "label": "Develops",
          "v": 16
        },
        {
          "label": "Below",
          "v": 4
        }
      ]
    },
    "rows": [
      "Review cycle Q2 opened",
      "Calibration session recorded",
      "Learning path assigned to 30 staff"
    ]
  },
  "people::Employee Engagement": {
    "tabs": [
      "Overview",
      "Requests",
      "Helpdesk"
    ],
    "kpis": [
      {
        "v": "78%",
        "l": "Self-serve adoption"
      },
      {
        "v": "210",
        "l": "Open requests"
      },
      {
        "v": "4h",
        "l": "Helpdesk response"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Leave",
          "v": 44
        },
        {
          "label": "Payslip",
          "v": 30
        },
        {
          "label": "Letters",
          "v": 16
        },
        {
          "label": "Docs",
          "v": 10
        }
      ]
    },
    "rows": [
      "Payslip downloaded by 320 staff",
      "Letter request fulfilled",
      "AI helpdesk resolved policy query"
    ]
  },
  "supply-chain::Procurement": {
    "tabs": [
      "Overview",
      "Requisitions",
      "Orders"
    ],
    "kpis": [
      {
        "v": "264",
        "l": "Open requisitions"
      },
      {
        "v": "18",
        "l": "Active RFx"
      },
      {
        "v": "5.2%",
        "l": "Realized savings"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Requisition",
        "RFx",
        "PO",
        "Payment"
      ]
    },
    "rows": [
      "Requisition PR-3391 approved",
      "RFx-77 awarded to vendor",
      "Purchase order PO-8842 issued"
    ]
  },
  "supply-chain::Materials": {
    "tabs": [
      "Overview",
      "Master",
      "Inventory"
    ],
    "kpis": [
      {
        "v": "12,400",
        "l": "Material records"
      },
      {
        "v": "94%",
        "l": "Procurement-ready"
      },
      {
        "v": "6",
        "l": "Low-stock items"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Raw",
          "v": 72
        },
        {
          "label": "Components",
          "v": 58
        },
        {
          "label": "Kits",
          "v": 40
        },
        {
          "label": "Consumable",
          "v": 65
        }
      ]
    },
    "rows": [
      "Material MAT-5521 gated ready",
      "BOM updated for Assembly A",
      "Low-stock alert on 6 components"
    ]
  },
  "supply-chain::Vendors": {
    "tabs": [
      "Overview",
      "Master",
      "Ratings"
    ],
    "kpis": [
      {
        "v": "1,240",
        "l": "Active vendors"
      },
      {
        "v": "88%",
        "l": "Qualified"
      },
      {
        "v": "3",
        "l": "Concentration risks"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "A tier",
          "v": 46
        },
        {
          "label": "B tier",
          "v": 34
        },
        {
          "label": "C tier",
          "v": 16
        },
        {
          "label": "Blacklist",
          "v": 4
        }
      ]
    },
    "rows": [
      "Vendor V-2201 qualified",
      "Rating updated to A tier",
      "Concentration risk flagged in logistics"
    ]
  },
  "supply-chain::Warehouses": {
    "tabs": [
      "Overview",
      "Inbound",
      "Dispatch"
    ],
    "kpis": [
      {
        "v": "96%",
        "l": "OTIF"
      },
      {
        "v": "8",
        "l": "Sites live"
      },
      {
        "v": "12",
        "l": "Exception alerts"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Received",
          "v": 82
        },
        {
          "label": "Put-away",
          "v": 70
        },
        {
          "label": "Picked",
          "v": 58
        },
        {
          "label": "Dispatch",
          "v": 64
        }
      ]
    },
    "rows": [
      "Inbound receipt cleared QC",
      "Put-away completed to zone B",
      "Dispatch released to carrier"
    ]
  },
  "supply-chain::Logistics": {
    "tabs": [
      "Overview",
      "Shipments",
      "Tracking"
    ],
    "kpis": [
      {
        "v": "342",
        "l": "In transit"
      },
      {
        "v": "93%",
        "l": "On-time delivery"
      },
      {
        "v": "6",
        "l": "Carriers"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        88,
        90,
        89,
        92,
        93,
        95
      ],
      "label": "On-time delivery trend"
    },
    "rows": [
      "Shipment SH-4410 booked",
      "Live ETA updated for 40 loads",
      "Proof of delivery captured"
    ]
  },
  "supply-chain::Field Force Management": {
    "tabs": [
      "Overview",
      "Dispatch",
      "Agents"
    ],
    "kpis": [
      {
        "v": "128",
        "l": "Active jobs"
      },
      {
        "v": "91%",
        "l": "On-time completion"
      },
      {
        "v": "74%",
        "l": "Agent utilization"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Assigned",
          "v": 30
        },
        {
          "label": "En route",
          "v": 24
        },
        {
          "label": "On site",
          "v": 28
        },
        {
          "label": "Done",
          "v": 18
        }
      ]
    },
    "rows": [
      "Job J-771 dispatched by skill",
      "Agent arrived on site",
      "Job closed with 5-star rating"
    ]
  },
  "supply-chain::Contracts": {
    "tabs": [
      "Overview",
      "Contracts",
      "Renewals"
    ],
    "kpis": [
      {
        "v": "860",
        "l": "Active contracts"
      },
      {
        "v": "14",
        "l": "Renewals due"
      },
      {
        "v": "98%",
        "l": "Obligations met"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Proposal",
        "Redline",
        "Signed",
        "Renewal"
      ]
    },
    "rows": [
      "Proposal drafted for vendor deal",
      "Redline resolved on clause 7",
      "Renewal alert for 14 contracts"
    ]
  },
  "supply-chain::MRO and Spares": {
    "tabs": [
      "Overview",
      "Spares",
      "Work Orders"
    ],
    "kpis": [
      {
        "v": "3,120",
        "l": "Spares in catalog"
      },
      {
        "v": "9",
        "l": "Below reorder point"
      },
      {
        "v": "22",
        "l": "Open work orders"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Breakdown",
          "v": 38
        },
        {
          "label": "Preventive",
          "v": 52
        },
        {
          "label": "Inspection",
          "v": 24
        },
        {
          "label": "AMC",
          "v": 30
        }
      ]
    },
    "rows": [
      "Reorder indent raised for 9 spares",
      "Preventive work order scheduled",
      "AMC visit logged for pump line"
    ]
  },
  "operations::Tickets": {
    "tabs": [
      "Overview",
      "Queue",
      "SLA"
    ],
    "kpis": [
      {
        "v": "418",
        "l": "Open tickets"
      },
      {
        "v": "95%",
        "l": "Within SLA"
      },
      {
        "v": "3.2h",
        "l": "Average resolution"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 12
        },
        {
          "label": "High",
          "v": 34
        },
        {
          "label": "Medium",
          "v": 60
        },
        {
          "label": "Low",
          "v": 44
        }
      ]
    },
    "rows": [
      "Ticket TK-9920 auto-routed",
      "SLA breach alert cleared",
      "Ticket resolved and closed"
    ]
  },
  "operations::Incidents": {
    "tabs": [
      "Overview",
      "Active",
      "Severity"
    ],
    "kpis": [
      {
        "v": "26",
        "l": "Active incidents"
      },
      {
        "v": "1.8h",
        "l": "Mean time to restore"
      },
      {
        "v": "2",
        "l": "Major incidents"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Sev1",
          "v": 8
        },
        {
          "label": "Sev2",
          "v": 22
        },
        {
          "label": "Sev3",
          "v": 48
        },
        {
          "label": "Sev4",
          "v": 36
        }
      ]
    },
    "rows": [
      "Incident INC-3301 raised to Sev2",
      "Major incident bridge opened",
      "Service restored for OT line"
    ]
  },
  "operations::Problems": {
    "tabs": [
      "Overview",
      "Analysis",
      "Actions"
    ],
    "kpis": [
      {
        "v": "38",
        "l": "Open problems"
      },
      {
        "v": "12",
        "l": "Known errors"
      },
      {
        "v": "64%",
        "l": "RCA complete"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Incident",
        "RCA",
        "Action",
        "Fixed"
      ]
    },
    "rows": [
      "RCA completed for PRB-220",
      "Preventive action assigned",
      "Known error added to register"
    ]
  },
  "operations::Change Management": {
    "tabs": [
      "Overview",
      "Requests",
      "CAB"
    ],
    "kpis": [
      {
        "v": "54",
        "l": "Open changes"
      },
      {
        "v": "97%",
        "l": "Change success rate"
      },
      {
        "v": "3",
        "l": "Awaiting CAB"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Draft",
          "v": 20
        },
        {
          "label": "CAB",
          "v": 14
        },
        {
          "label": "Approved",
          "v": 38
        },
        {
          "label": "Deployed",
          "v": 52
        }
      ]
    },
    "rows": [
      "Change CHG-780 approved by CAB",
      "Risk assessment completed",
      "Freeze window enforced for release"
    ]
  },
  "operations::CMDB": {
    "tabs": [
      "Overview",
      "Map",
      "Health"
    ],
    "kpis": [
      {
        "v": "8,640",
        "l": "Configuration items"
      },
      {
        "v": "92%",
        "l": "CMDB health"
      },
      {
        "v": "140",
        "l": "Mapped services"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Service",
      "nodes": [
        "Servers",
        "Apps",
        "Network",
        "Assets"
      ]
    },
    "rows": [
      "CI SRV-118 dependencies mapped",
      "Impact analysis run for change",
      "CMDB hygiene scan completed"
    ]
  },
  "operations::Assets Tracker": {
    "tabs": [
      "Overview",
      "Register",
      "Utilization"
    ],
    "kpis": [
      {
        "v": "6,210",
        "l": "Assets tracked"
      },
      {
        "v": "81%",
        "l": "Utilization"
      },
      {
        "v": "18",
        "l": "Warranties expiring"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "In use",
          "v": 74
        },
        {
          "label": "Spare",
          "v": 14
        },
        {
          "label": "Repair",
          "v": 8
        },
        {
          "label": "Retired",
          "v": 4
        }
      ]
    },
    "rows": [
      "Asset AST-540 assigned to site",
      "Utilization refreshed across estate",
      "Warranty expiry alert for 18 assets"
    ]
  },
  "operations::Maintenance": {
    "tabs": [
      "Overview",
      "Work Orders",
      "Uptime"
    ],
    "kpis": [
      {
        "v": "98.2%",
        "l": "Asset uptime"
      },
      {
        "v": "88%",
        "l": "On-time maintenance"
      },
      {
        "v": "46",
        "l": "Open work orders"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Preventive",
          "v": 64
        },
        {
          "label": "Corrective",
          "v": 28
        },
        {
          "label": "Predictive",
          "v": 18
        }
      ]
    },
    "rows": [
      "Preventive work order completed",
      "Corrective job raised on pump 3",
      "Uptime target met for the month"
    ]
  },
  "operations::Service Request": {
    "tabs": [
      "Overview",
      "Catalog",
      "Fulfilment"
    ],
    "kpis": [
      {
        "v": "212",
        "l": "Open requests"
      },
      {
        "v": "94%",
        "l": "Fulfilled on SLA"
      },
      {
        "v": "8",
        "l": "Overdue"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Access",
          "v": 52
        },
        {
          "label": "Hardware",
          "v": 30
        },
        {
          "label": "Software",
          "v": 40
        },
        {
          "label": "Facility",
          "v": 22
        }
      ]
    },
    "rows": [
      "Request SR-661 approved",
      "Standard fulfilment completed",
      "Overdue alert on 8 requests"
    ]
  },
  "operations::Knowledge Center": {
    "tabs": [
      "Overview",
      "Articles",
      "Usage"
    ],
    "kpis": [
      {
        "v": "3,480",
        "l": "Published articles"
      },
      {
        "v": "62",
        "l": "Knowledge spaces"
      },
      {
        "v": "18k",
        "l": "Monthly searches"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "IT",
          "v": 64
        },
        {
          "label": "HR",
          "v": 40
        },
        {
          "label": "Ops",
          "v": 52
        },
        {
          "label": "Finance",
          "v": 34
        }
      ]
    },
    "rows": [
      "Article published to IT space",
      "Ask AI answered 320 queries",
      "Usage report shared with owners"
    ]
  },
  "ai-foundry::Autonomous Agents": {
    "tabs": [
      "Overview",
      "Agents",
      "Runs"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Active agents"
      },
      {
        "v": "96%",
        "l": "Completion rate"
      },
      {
        "v": "312",
        "l": "Runs today"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Decide",
          "v": 88
        },
        {
          "label": "Integrate",
          "v": 76
        },
        {
          "label": "Execute",
          "v": 92
        },
        {
          "label": "Verify",
          "v": 81
        }
      ]
    },
    "rows": [
      "Agent AG-204 completed 6-step run",
      "Cross-system action executed",
      "Parallel batch of 40 runs cleared"
    ]
  },
  "ai-foundry::Conversational Agents": {
    "tabs": [
      "Overview",
      "Channels",
      "Quality"
    ],
    "kpis": [
      {
        "v": "92%",
        "l": "Resolved in chat"
      },
      {
        "v": "18s",
        "l": "Avg handle time"
      },
      {
        "v": "6",
        "l": "Live channels"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Voice",
          "v": 84
        },
        {
          "label": "Chat",
          "v": 92
        },
        {
          "label": "WhatsApp",
          "v": 78
        },
        {
          "label": "Web",
          "v": 88
        }
      ]
    },
    "rows": [
      "Voice call resolved without handoff",
      "Chat agent completed order change",
      "Handoff to human on complex case"
    ]
  },
  "ai-foundry::Custom Agents": {
    "tabs": [
      "Overview",
      "Agents",
      "Lifecycle"
    ],
    "kpis": [
      {
        "v": "24",
        "l": "Agents created"
      },
      {
        "v": "18",
        "l": "Approved"
      },
      {
        "v": "6",
        "l": "In draft"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Describe",
        "Draft",
        "Review",
        "Approved"
      ]
    },
    "rows": [
      "Agent drafted from plain-language brief",
      "Business rules and triggers set",
      "Agent AG-77 moved to approved"
    ]
  },
  "ai-foundry::Agent Studio": {
    "tabs": [
      "Overview",
      "Fleet",
      "Operations"
    ],
    "kpis": [
      {
        "v": "120",
        "l": "Agents in fleet"
      },
      {
        "v": "94%",
        "l": "Fleet success rate"
      },
      {
        "v": "Healthy",
        "l": "Fleet status"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Autonomous",
          "v": 42
        },
        {
          "label": "Chat",
          "v": 58
        },
        {
          "label": "Voice",
          "v": 36
        },
        {
          "label": "Flow",
          "v": 24
        }
      ]
    },
    "rows": [
      "Agent deployed to production",
      "Fleet success held at 94 percent",
      "Governance policy applied fleet-wide"
    ]
  },
  "ai-foundry::Flow Orchestrator": {
    "tabs": [
      "Overview",
      "Flows",
      "Versions"
    ],
    "kpis": [
      {
        "v": "36",
        "l": "Active flows"
      },
      {
        "v": "5",
        "l": "Agents per flow"
      },
      {
        "v": "98%",
        "l": "Flow success rate"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Trigger",
        "Process",
        "Orchestrate",
        "Deliver"
      ]
    },
    "rows": [
      "Flow FL-12 orchestrated 5 agents",
      "New version published and reused",
      "End-to-end run completed"
    ]
  },
  "ai-foundry::ML Studio": {
    "tabs": [
      "Overview",
      "Models",
      "Monitor"
    ],
    "kpis": [
      {
        "v": "18",
        "l": "Deployed models"
      },
      {
        "v": "142",
        "l": "Experiments"
      },
      {
        "v": "120ms",
        "l": "Model latency"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Churn",
          "v": 91
        },
        {
          "label": "Demand",
          "v": 86
        },
        {
          "label": "Fraud",
          "v": 94
        },
        {
          "label": "Pricing",
          "v": 88
        }
      ]
    },
    "rows": [
      "Experiment logged with feature set",
      "Model deployed to API endpoint",
      "Live latency held at 120ms"
    ]
  },
  "ai-foundry::Forecaster": {
    "tabs": [
      "Overview",
      "Forecast",
      "Accuracy"
    ],
    "kpis": [
      {
        "v": "9.2%",
        "l": "Weighted MAPE"
      },
      {
        "v": "ARIMA",
        "l": "Selected model"
      },
      {
        "v": "14",
        "l": "Forecast projects"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        42,
        48,
        55,
        60,
        66,
        72
      ],
      "label": "Projected metric, next 6 periods"
    },
    "rows": [
      "AutoML selected ARIMA for series",
      "Forecast generated for 6 periods",
      "Weighted MAPE tracked at 9.2 percent"
    ]
  },
  "ai-foundry::Anomaly Detector": {
    "tabs": [
      "Overview",
      "Anomalies",
      "Watchlist"
    ],
    "kpis": [
      {
        "v": "7",
        "l": "Open anomalies"
      },
      {
        "v": "320",
        "l": "Metrics watched"
      },
      {
        "v": "2m",
        "l": "Time to detect"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        40,
        42,
        41,
        43,
        78,
        45
      ],
      "label": "Metric against learned baseline"
    },
    "rows": [
      "Anomaly detected on latency metric",
      "Automated action triggered on spike",
      "Metric returned to baseline"
    ]
  },
  "ai-foundry::Vision AI": {
    "tabs": [
      "Overview",
      "Flows",
      "Streams"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Vision components"
      },
      {
        "v": "12",
        "l": "Live streams"
      },
      {
        "v": "30fps",
        "l": "Processing rate"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Object",
          "v": 88
        },
        {
          "label": "Text",
          "v": 74
        },
        {
          "label": "Face",
          "v": 69
        },
        {
          "label": "Motion",
          "v": 81
        }
      ]
    },
    "rows": [
      "Vision flow deployed on video stream",
      "Object detection ran in real time",
      "Overlay annotations rendered"
    ]
  },
  "ai-foundry::Prompt Analyzer": {
    "tabs": [
      "Overview",
      "Library",
      "Testing"
    ],
    "kpis": [
      {
        "v": "210",
        "l": "Prompts in library"
      },
      {
        "v": "88%",
        "l": "Success rate"
      },
      {
        "v": "156",
        "l": "Certified"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Certified",
          "v": 74
        },
        {
          "label": "Testing",
          "v": 18
        },
        {
          "label": "Draft",
          "v": 8
        }
      ]
    },
    "rows": [
      "Prompt tested and certified",
      "New version released to agents",
      "Success rate tracked at 88 percent"
    ]
  },
  "ai-foundry::Omnis": {
    "tabs": [
      "Overview",
      "Tasks",
      "Reports"
    ],
    "kpis": [
      {
        "v": "14",
        "l": "Research tasks"
      },
      {
        "v": "8",
        "l": "Reports delivered"
      },
      {
        "v": "42",
        "l": "Sources cross-checked"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Goal",
        "Gather",
        "Reason",
        "Report"
      ]
    },
    "rows": [
      "Research task resumed from history",
      "Sources cross-referenced and reasoned",
      "Report-grade deliverable produced"
    ]
  },
  "engineering-toolkits::Innovate": {
    "tabs": [
      "Overview",
      "Apps",
      "Gallery"
    ],
    "kpis": [
      {
        "v": "32",
        "l": "Apps generated"
      },
      {
        "v": "7min",
        "l": "Build time"
      },
      {
        "v": "20",
        "l": "In app gallery"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Idea",
        "Model",
        "Generate",
        "Deploy"
      ]
    },
    "rows": [
      "App generated from a document",
      "Data model and UI built on-platform",
      "App published to the gallery"
    ]
  },
  "engineering-toolkits::Modernize": {
    "tabs": [
      "Overview",
      "Migration",
      "Rules"
    ],
    "kpis": [
      {
        "v": "1,480",
        "l": "Rules extracted"
      },
      {
        "v": "100%",
        "l": "Rules preserved"
      },
      {
        "v": ".NET",
        "l": "Source stack"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Scan",
        "Extract",
        "Rebuild",
        "Verify"
      ]
    },
    "rows": [
      "Legacy module reverse-engineered",
      "Business rules extracted and mapped",
      "Cloud-native rebuild verified"
    ]
  },
  "engineering-toolkits::Builders and Modellers": {
    "tabs": [
      "Overview",
      "Builders",
      "Insights"
    ],
    "kpis": [
      {
        "v": "64",
        "l": "Workflows built"
      },
      {
        "v": "3",
        "l": "Bottlenecks found"
      },
      {
        "v": "92%",
        "l": "Process conformance"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Intake",
          "v": 88
        },
        {
          "label": "Review",
          "v": 62
        },
        {
          "label": "Approve",
          "v": 74
        },
        {
          "label": "Close",
          "v": 90
        }
      ]
    },
    "rows": [
      "Workflow designed without code",
      "Bottleneck flagged at review stage",
      "Change applied, upgrade-safe"
    ]
  },
  "engineering-toolkits::Integration Connectors": {
    "tabs": [
      "Overview",
      "Connectors",
      "Monitor"
    ],
    "kpis": [
      {
        "v": "86",
        "l": "Active connectors"
      },
      {
        "v": "99.9%",
        "l": "Uptime"
      },
      {
        "v": "0.2%",
        "l": "Error rate"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        50,
        58,
        64,
        60,
        72,
        80
      ],
      "label": "Messages processed per hour"
    },
    "rows": [
      "Connector to ERP established",
      "Reusable connection shared",
      "Error handled and retried"
    ]
  },
  "engineering-toolkits::Data Ingester": {
    "tabs": [
      "Overview",
      "Pipelines",
      "Sources"
    ],
    "kpis": [
      {
        "v": "28",
        "l": "Active pipelines"
      },
      {
        "v": "14",
        "l": "Connected sources"
      },
      {
        "v": "2.4B",
        "l": "Rows ingested"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        30,
        45,
        52,
        61,
        70,
        84
      ],
      "label": "Rows ingested this run"
    },
    "rows": [
      "ETL pipeline built from a prompt",
      "CDC sync running on log stream",
      "Run summary generated in plain text"
    ]
  },
  "engineering-toolkits::Transformers": {
    "tabs": [
      "Overview",
      "Transforms",
      "Output"
    ],
    "kpis": [
      {
        "v": "46",
        "l": "Transform steps"
      },
      {
        "v": "1.8B",
        "l": "Rows processed"
      },
      {
        "v": "Ready",
        "l": "Output status"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Cleanse",
        "Join",
        "Aggregate",
        "Persist"
      ]
    },
    "rows": [
      "Raw data cleansed and joined",
      "Aggregated and reshaped at scale",
      "Output persisted to queryable store"
    ]
  },
  "engineering-toolkits::Data Insider": {
    "tabs": [
      "Overview",
      "APIs",
      "Queries"
    ],
    "kpis": [
      {
        "v": "52",
        "l": "Data APIs live"
      },
      {
        "v": "140ms",
        "l": "P95 latency"
      },
      {
        "v": "18k",
        "l": "Calls today"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "P50",
          "v": 40
        },
        {
          "label": "P95",
          "v": 70
        },
        {
          "label": "P99",
          "v": 88
        }
      ]
    },
    "rows": [
      "API published from a data pool",
      "Plain-language query answered",
      "Agent called data via MCP"
    ]
  },
  "engineering-toolkits::Business Intelligence": {
    "tabs": [
      "Overview",
      "Dashboards",
      "Reports"
    ],
    "kpis": [
      {
        "v": "38",
        "l": "Dashboards built"
      },
      {
        "v": "124",
        "l": "Governed metrics"
      },
      {
        "v": "Scheduled",
        "l": "Report delivery"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Finance",
          "v": 82
        },
        {
          "label": "Sales",
          "v": 74
        },
        {
          "label": "Ops",
          "v": 66
        },
        {
          "label": "People",
          "v": 58
        }
      ]
    },
    "rows": [
      "Dashboard built from plain language",
      "KPI definition governed once",
      "Narrative report scheduled monthly"
    ]
  },
  "engineering-toolkits::ProcBot": {
    "tabs": [
      "Overview",
      "Scripts",
      "Runs"
    ],
    "kpis": [
      {
        "v": "72",
        "l": "Automation scripts"
      },
      {
        "v": "98%",
        "l": "On-SLA execution"
      },
      {
        "v": "340",
        "l": "Runs this week"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Recurring",
          "v": 64
        },
        {
          "label": "On-demand",
          "v": 26
        },
        {
          "label": "One-time",
          "v": 10
        }
      ]
    },
    "rows": [
      "SoP script approved and deployed",
      "MoP executed across 8 systems",
      "Run monitored against SLA"
    ]
  },
  "engineering-toolkits::PLC": {
    "tabs": [
      "Overview",
      "Sprints",
      "Releases"
    ],
    "kpis": [
      {
        "v": "6",
        "l": "Active sprints"
      },
      {
        "v": "42",
        "l": "Velocity"
      },
      {
        "v": "Ready",
        "l": "Release status"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        34,
        38,
        40,
        44,
        41,
        46
      ],
      "label": "Velocity across recent sprints"
    },
    "rows": [
      "Requirement traced to release",
      "Sprint closed at 46 velocity",
      "Release readiness marked green"
    ]
  },
  "engineering-toolkits::Platform": {
    "tabs": [
      "Overview",
      "Roles",
      "Structure"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Roles configured"
      },
      {
        "v": "12",
        "l": "Divisions"
      },
      {
        "v": "Shared",
        "l": "Admin scope"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Admin core",
      "nodes": [
        "Roles",
        "Divisions",
        "Reporting",
        "Config"
      ]
    },
    "rows": [
      "Role assigned to user group",
      "Reporting chain updated",
      "Configuration shared across modules"
    ]
  },
  "operations-toolkits::FinOps": {
    "tabs": [
      "Overview",
      "Budgets",
      "Forecast"
    ],
    "kpis": [
      {
        "v": "18%",
        "l": "Rightsizing savings"
      },
      {
        "v": "3",
        "l": "Cost anomalies"
      },
      {
        "v": "On track",
        "l": "Monthly budget"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "AWS",
          "v": 72
        },
        {
          "label": "Azure",
          "v": 54
        },
        {
          "label": "GCP",
          "v": 38
        },
        {
          "label": "Other",
          "v": 16
        }
      ]
    },
    "rows": [
      "Run-rate projection updated for month",
      "Anomaly flagged on EC2 spend",
      "Rightsizing applied to 24 instances"
    ]
  },
  "operations-toolkits::Service Ops": {
    "tabs": [
      "Overview",
      "Traces",
      "Topology"
    ],
    "kpis": [
      {
        "v": "0.96",
        "l": "Apdex score"
      },
      {
        "v": "142ms",
        "l": "p95 latency"
      },
      {
        "v": "99.95%",
        "l": "Service uptime"
      }
    ],
    "chart": {
      "type": "trend",
      "points": [
        42,
        55,
        48,
        60,
        52,
        44
      ],
      "label": "p95 latency, 6h"
    },
    "rows": [
      "Trace correlated to error log",
      "Dependency map refreshed",
      "Apdex held above target"
    ]
  },
  "operations-toolkits::Cluster Ops": {
    "tabs": [
      "Overview",
      "Nodes",
      "Workloads"
    ],
    "kpis": [
      {
        "v": "48",
        "l": "Nodes healthy"
      },
      {
        "v": "312",
        "l": "Running workloads"
      },
      {
        "v": "68%",
        "l": "CPU utilisation"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "prod",
          "v": 74
        },
        {
          "label": "staging",
          "v": 52
        },
        {
          "label": "data",
          "v": 61
        },
        {
          "label": "system",
          "v": 40
        }
      ]
    },
    "rows": [
      "Autoscaler added 3 nodes to prod",
      "Rightsizing cut memory on 12 pods",
      "RBAC policy synced across namespaces"
    ]
  },
  "operations-toolkits::Observability": {
    "tabs": [
      "Overview",
      "Signals",
      "Retention"
    ],
    "kpis": [
      {
        "v": "1.4 PB",
        "l": "Data under retention"
      },
      {
        "v": "3.2M",
        "l": "Spans per minute"
      },
      {
        "v": "24",
        "l": "Live dashboards"
      }
    ],
    "chart": {
      "type": "stack",
      "items": [
        "Logs",
        "Metrics",
        "Traces",
        "Events"
      ],
      "base": "Correlated on one timeline"
    },
    "rows": [
      "Dashboard published to platform team",
      "Retention policy set to 90 days",
      "Trace linked to metric spike"
    ]
  },
  "operations-toolkits::SIEM and SOAR": {
    "tabs": [
      "Overview",
      "Threats",
      "Playbooks"
    ],
    "kpis": [
      {
        "v": "7",
        "l": "Active detections"
      },
      {
        "v": "2m 40s",
        "l": "Mean response time"
      },
      {
        "v": "31",
        "l": "Techniques mapped"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 18
        },
        {
          "label": "High",
          "v": 44
        },
        {
          "label": "Medium",
          "v": 66
        },
        {
          "label": "Low",
          "v": 80
        }
      ]
    },
    "rows": [
      "Playbook isolated a flagged host",
      "Detection mapped to MITRE T1078",
      "File-integrity change reviewed"
    ]
  },
  "operations-toolkits::DevSecOps": {
    "tabs": [
      "Overview",
      "Scans",
      "Releases"
    ],
    "kpis": [
      {
        "v": "Passed",
        "l": "Risk gate status"
      },
      {
        "v": "5",
        "l": "Findings to triage"
      },
      {
        "v": "Signed",
        "l": "Artifact provenance"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Scan",
        "Gate",
        "Sign",
        "Deploy"
      ]
    },
    "rows": [
      "SBOM generated for release train",
      "SAST scan cleared on main branch",
      "Artifact signed and provenance stored"
    ]
  },
  "operations-toolkits::Data Ops": {
    "tabs": [
      "Overview",
      "Pipelines",
      "Lineage"
    ],
    "kpis": [
      {
        "v": "96",
        "l": "Pipelines healthy"
      },
      {
        "v": "1.2s",
        "l": "CDC lag"
      },
      {
        "v": "99.2%",
        "l": "Pipeline freshness"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Ingest",
          "v": 78
        },
        {
          "label": "Batch",
          "v": 64
        },
        {
          "label": "Stream",
          "v": 71
        },
        {
          "label": "CDC",
          "v": 58
        }
      ]
    },
    "rows": [
      "Streaming pipeline optimised by AI",
      "Lineage traced source to warehouse",
      "Capacity forecast updated for Q3"
    ]
  },
  "operations-toolkits::AI, ML and Agent Ops": {
    "tabs": [
      "Overview",
      "Models",
      "Agents"
    ],
    "kpis": [
      {
        "v": "18",
        "l": "Agents in production"
      },
      {
        "v": "0.94",
        "l": "Quality score"
      },
      {
        "v": "Grounded",
        "l": "Knowledge status"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Agent A",
          "v": 88
        },
        {
          "label": "Agent B",
          "v": 72
        },
        {
          "label": "Agent C",
          "v": 64
        },
        {
          "label": "Agent D",
          "v": 80
        }
      ]
    },
    "rows": [
      "Model telemetry ingested from Agent Studio",
      "Feedback loop lifted quality score",
      "Cost per agent reported to owners"
    ]
  },
  "operations-toolkits::Managed Service Ops": {
    "tabs": [
      "Overview",
      "Incidents",
      "Topology"
    ],
    "kpis": [
      {
        "v": "1",
        "l": "Open incident"
      },
      {
        "v": "82%",
        "l": "Error budget left"
      },
      {
        "v": "P2",
        "l": "Highest severity"
      }
    ],
    "chart": {
      "type": "hub",
      "center": "Payments",
      "nodes": [
        "Auth",
        "Ledger",
        "Gateway",
        "Notify"
      ]
    },
    "rows": [
      "Incident command opened for P2 event",
      "Blast radius ranked across 4 services",
      "What-if simulation ran on gateway"
    ]
  },
  "operations-toolkits::Process Ops": {
    "tabs": [
      "Overview",
      "Mining",
      "Cases"
    ],
    "kpis": [
      {
        "v": "6",
        "l": "Bottlenecks found"
      },
      {
        "v": "4",
        "l": "SLA breaches predicted"
      },
      {
        "v": "2.4 days",
        "l": "Avg cycle time"
      }
    ],
    "chart": {
      "type": "flow",
      "steps": [
        "Intake",
        "Review",
        "Approve",
        "Close"
      ]
    },
    "rows": [
      "Bottleneck found at approval step",
      "SLA breach predicted on 4 cases",
      "Case timeline replayed end to end"
    ]
  },
  "operations-toolkits::System Alerts": {
    "tabs": [
      "Overview",
      "Inbox",
      "Trends"
    ],
    "kpis": [
      {
        "v": "23",
        "l": "Open alerts"
      },
      {
        "v": "96%",
        "l": "SLA compliance"
      },
      {
        "v": "4m",
        "l": "Mean ack time"
      }
    ],
    "chart": {
      "type": "bars",
      "bars": [
        {
          "label": "Critical",
          "v": 8
        },
        {
          "label": "High",
          "v": 22
        },
        {
          "label": "Medium",
          "v": 48
        },
        {
          "label": "Low",
          "v": 70
        }
      ]
    },
    "rows": [
      "Critical alert acknowledged in 3m",
      "Notification routed to on-call",
      "Closed-alert trend improved this week"
    ]
  }
}
