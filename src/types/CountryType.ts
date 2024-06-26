//인터페이스 정의
export interface Country {
  area: number;
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  region: string;
  isFavorite: boolean;
}
