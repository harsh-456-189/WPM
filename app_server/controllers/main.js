/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'CareerCompass' });
};
module.exports = {
index
};