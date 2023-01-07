displayName = (req, res) => {
    const data =
      'Meagan Roberts';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayName,
  };