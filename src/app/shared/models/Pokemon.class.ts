export class Pokemon {
  private _name: string;
  private _imageUrl: string;
  private _description: string;

  constructor(name: string, imageUrl: string, description: string) {
    (this._name = name),
      (this._imageUrl = imageUrl),
      (this._description = description);
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter imageUrl
   * @return {string}
   */
  public get imageUrl(): string {
    return this._imageUrl;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter imageUrl
   * @param {string} value
   */
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }
}
