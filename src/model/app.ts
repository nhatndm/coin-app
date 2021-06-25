export type PeriodResolutionValue = '30MIN' | '60MIN' | '3D' | '1W';

export interface PeriodResolution {
  id: number;
  label: string;
  value: PeriodResolutionValue;
}

export interface App {
  period: PeriodResolutionValue;
  timeToRenewData: number;
}
