import type { ActivityItem, Building, EfficiencyIndicator } from '../types'

export const SIMULATION_NOTICE =
  'All sensor values shown are simulated demo data for hackathon prototyping.'

export const buildings: Building[] = [
  {
    id: 'eng-01',
    name: 'Engineering Complex',
    zone: 'North Campus',
    type: 'Academic',
    occupancy: 1200,
    status: 'watch',
    currentStatus: 'HVAC load elevated during afternoon blocks.',
    metrics: [
      { date: '2026-09-14', electricity: 5400, water: 870, waste: 310 },
      { date: '2026-09-15', electricity: 5520, water: 860, waste: 305 },
      { date: '2026-09-16', electricity: 5590, water: 875, waste: 315 },
      { date: '2026-09-17', electricity: 5640, water: 880, waste: 320 },
      { date: '2026-09-18', electricity: 5710, water: 900, waste: 318 },
      { date: '2026-09-19', electricity: 5760, water: 905, waste: 322 },
      { date: '2026-09-20', electricity: 6620, water: 910, waste: 336 },
    ],
  },
  {
    id: 'lib-02',
    name: 'Central Library',
    zone: 'Core Campus',
    type: 'Public',
    occupancy: 750,
    status: 'optimal',
    currentStatus: 'Energy profile stable, occupancy-normalized efficiency improving.',
    metrics: [
      { date: '2026-09-14', electricity: 2980, water: 420, waste: 180 },
      { date: '2026-09-15', electricity: 3040, water: 430, waste: 178 },
      { date: '2026-09-16', electricity: 3065, water: 428, waste: 181 },
      { date: '2026-09-17', electricity: 3030, water: 425, waste: 176 },
      { date: '2026-09-18', electricity: 2995, water: 421, waste: 172 },
      { date: '2026-09-19', electricity: 2960, water: 418, waste: 170 },
      { date: '2026-09-20', electricity: 2950, water: 415, waste: 169 },
    ],
  },
  {
    id: 'res-03',
    name: 'Residence Hall A',
    zone: 'East Campus',
    type: 'Residential',
    occupancy: 980,
    status: 'critical',
    currentStatus: 'Water leakage pattern suspected in lower-floor utility line.',
    metrics: [
      { date: '2026-09-14', electricity: 4120, water: 980, waste: 420 },
      { date: '2026-09-15', electricity: 4150, water: 1005, waste: 432 },
      { date: '2026-09-16', electricity: 4180, water: 1020, waste: 438 },
      { date: '2026-09-17', electricity: 4220, water: 1040, waste: 441 },
      { date: '2026-09-18', electricity: 4235, water: 1085, waste: 443 },
      { date: '2026-09-19', electricity: 4260, water: 1110, waste: 445 },
      { date: '2026-09-20', electricity: 4290, water: 1385, waste: 448 },
    ],
  },
  {
    id: 'lab-04',
    name: 'Life Sciences Lab',
    zone: 'West Campus',
    type: 'Research',
    occupancy: 420,
    status: 'watch',
    currentStatus: 'Waste stream increased beyond recycling target threshold.',
    metrics: [
      { date: '2026-09-14', electricity: 3650, water: 520, waste: 260 },
      { date: '2026-09-15', electricity: 3710, water: 526, waste: 265 },
      { date: '2026-09-16', electricity: 3740, water: 522, waste: 269 },
      { date: '2026-09-17', electricity: 3705, water: 528, waste: 275 },
      { date: '2026-09-18', electricity: 3680, water: 534, waste: 279 },
      { date: '2026-09-19', electricity: 3735, water: 538, waste: 302 },
      { date: '2026-09-20', electricity: 3775, water: 540, waste: 328 },
    ],
  },
]

export const efficiencyIndicators: EfficiencyIndicator[] = [
  {
    label: 'Campus Efficiency Score',
    value: '82 / 100',
    trend: '+2.1% week-over-week',
    direction: 'positive',
  },
  {
    label: 'Renewable Energy Mix',
    value: '38%',
    trend: '+1.4% from prior period',
    direction: 'positive',
  },
  {
    label: 'Waste Diversion Rate',
    value: '61%',
    trend: '-1.2% vs target',
    direction: 'negative',
  },
]

export const recentActivities: ActivityItem[] = [
  {
    id: 'activity-1',
    timestamp: '2026-09-20T08:15:00Z',
    message: 'Engineering Complex demand response mode initiated automatically.',
    category: 'operations',
  },
  {
    id: 'activity-2',
    timestamp: '2026-09-20T09:30:00Z',
    message: 'Residence Hall A water anomaly flagged for facilities review.',
    category: 'system',
  },
  {
    id: 'activity-3',
    timestamp: '2026-09-20T10:05:00Z',
    message: 'Life Sciences Lab waste stream exceeded weekly median by 17%.',
    category: 'sustainability',
  },
  {
    id: 'activity-4',
    timestamp: '2026-09-20T11:40:00Z',
    message: 'Library baseline model recalculated from latest occupancy profile.',
    category: 'system',
  },
]
