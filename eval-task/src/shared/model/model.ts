export interface Fixture {
  startDate: string;
  type: string;
  participants: Participant[];
  league: League;
  status: string;
}

export interface League {
  id: string;
  name: string;
  iconId: string;
  order: number;
  seasonOriented: boolean;
  eventless: boolean;
  locationName: string;
  locationId: string;
  locationOrder: number;
}

export interface Participant {
  id: string;
  name: string;
  position: string;
}

export interface Market {
  marketId: string;
  betCode: string;
  bl: number;
  name: string;
  picks: Pick[];
  order: number;
  isValid: boolean;
}

export interface Pick {
  id: string;
  name: string;
  odds: number;
  order: number;
  status: number;
  baseLine?: string;
  mostBalanced?: boolean;
}

export interface Event {
  isLive: boolean;
  sportId: string;
  id: string;
  linkedId: string;
  providerId: string;
  betCode: string;
  fixture: Fixture;
  markets: Market[];
  topLeagues: any[];
  marketsTotal: number;
  isHighlighted: boolean;
  willBeLive: boolean;
  picksTotal: number;
  settlementsLocked: boolean;
}
