function getHouses(req, res){
  const db = req.app.get('db')
  db.get_houses().then(response => res.status(200).send(response))
  .catch(err => console.log('something went wrong', err))
}

function deleteHouse(req, res){
  const db = req.app.get('db')
  db.delete_house(req.params.id)
  .then(response => res.status(200).send(response))
  .catch(err => console.log('something went wrong', err))
}

function addHouse(req, res){
  const {name, address, city, state, zip, img, mortgage, rent} = req.body
  console.log(name, address, city, state, zip, img, mortgage, rent)
  const db = req.app.get('db')
  db.add_house([name, address, city, state, zip, img, mortgage, rent])
  .then(response => res.status(200).send(response))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getHouses,
  deleteHouse,
  addHouse
}