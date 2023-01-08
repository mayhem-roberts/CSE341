myName = (req, res) => {
    const data =
      'Meagan Roberts';
    res.status(200).send(data);
  };

familyName = (req, res) => {
    const data =
      'Emily DeCato';
    res.status(200).send(data);
  };
  
  module.exports = {
    myName, familyName,
  };