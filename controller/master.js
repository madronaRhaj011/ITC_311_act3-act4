const container = {
    showIndex:(req, res) =>{
        res.render('index');
    },
    showAboutMe:(req, res) =>{
        res.render('aboutMe');
    },
    showOptions:(req, res) =>{
        res.render('options');
    },
    showContactMe:(req, res) =>{
        res.render('contactMe');
    },
    showSecret:(req, res) =>{
        res.render('secret');
    }

}
module.exports = container;