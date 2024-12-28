export class Movie {
  private _movieId: Number;
    public get movieId(): Number {
        return this._movieId;
    }
    public set movieId(value: Number) {
        this._movieId = value;
    }
  private _movieName: String;
    public get movieName(): String {
        return this._movieName;
    }
    public set movieName(value: String) {
        this._movieName = value;
    }
  private _totalMovieDuration: Number;
    public get totalMovieDuration(): Number {
        return this._totalMovieDuration;
    }
    public set totalMovieDuration(value: Number) {
        this._totalMovieDuration = value;
    }

}
