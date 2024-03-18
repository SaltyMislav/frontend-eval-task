export interface Offer {
  locations: Location[];
}

export interface Location {
  id: string;
  name: string;
  leagues: League[];
  order: number;
}

export interface League {
  id: string;
  name: string;
  iconId: string;
  eventId: string;
  linkedId: string;
  providerId: string;
  betCode: string;
  startDate: string;
  endDate: string;
  eventDateGroups: EventDateGroup[];
  eventless: boolean;
  seasonOriented: boolean;
  order: number;
}

export interface EventDateGroup {
  date: string;
  events: Event[];
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

export interface Fixture {
  startDate: string;
  type: string;
  participants: Participant[];
  league?: LeagueDetail;
  status: string;
}

export interface Participant {
  id: string;
  name: string;
  position: string;
}

export interface LeagueDetail {
  id: string;
  name: string;
  order: number;
  seasonOriented: boolean;
  eventless: boolean;
  iconId: string;
  locationName: string;
  locationId: string;
  locationOrder: number;
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
