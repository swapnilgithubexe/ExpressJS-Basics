import ArtPiece from "./artPiece.model.js";
export const createArtPiece = (req, res) => {
  const artPiece = ArtPiece.create(req.body);
  res.status(201).send(artPiece);
};

export const getAllArtPieces = (req, res) => {
  const response = ArtPiece.findAll(req.query);
  res.status(200).send(response);
};

export const getArtPiece = (req, res) => {
  const artPiece = ArtPiece.findOne(req.params.id);

  if (!artPiece) {
    return res.status(404).send("Art piece not found");
  }

  res.status(200).send(artPiece);
};

export const updateArtPiece = (req, res) => {
  const artPiece = ArtPiece.update(req.params.id, req.body);

  if (!artPiece) {
    return res.status(404).send("Art piece not found");
  }

  res.status(200).send(artPiece);
};

export const deleteArtPiece = (req, res) => {
  ArtPiece.delete(req.params.id);
  res.status(204).send();
};
