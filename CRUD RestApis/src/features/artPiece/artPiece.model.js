

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    return this.db;
  }

  static findOne(id) {
    return this.db.find((item) => item.id === Number(id))
  }

  static update(id, data) {
    const currentIndex = this.db.findIndex((item) => item.id === Number(id));
    if (currentIndex !== -1) {
      this.db[currentIndex] = { ...this.db[currentIndex], ...data };
      return this.db[currentIndex]
    }

    return null


  }

  static delete(id) {
    const currentIndex = this.db.findIndex((item) => item.id === id);
    this.db.splice(currentIndex, 1);
  }
}
