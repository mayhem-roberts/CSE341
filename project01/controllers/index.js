myName = (req, res) => {
    const data =
      'Meagan Roberts';
    // status code 200 means success so the object is sent
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